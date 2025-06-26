const express = require("express");
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../model/UserModel');

const router = express.Router();

// Register

router.post("/register", async (req, res) => {

    const { email, password } = req.body;
    try {
        const exists = await User.findOne({ email });
        if (exists) {
            return res.status(400).json({ msg: "User already exists" });
        }
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).json({ msg: "user created succesfully" });
    }
    catch (err) {
        console.error("Registration Error:", err); // 👈 this line is critical
        res.status(500).json({ msg: "Error registering user" });
    }
});

// Login

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Lax",
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.json({ msg: "Logged in" });
    }
    catch (err) {
        console.error("Login Error:", err); // 👈 Helpful
        res.status(500).json({ msg: "Login error" });
    }
});

// Protected route

router.get("/profile", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { _id, email } = req.user;
        res.json({ user: { _id, email } });
    }
);

// Logout
router.get('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: "Lax",
    secure: false // true in production
  });
  res.json({ msg: 'Logged out' });
});

module.exports = router;