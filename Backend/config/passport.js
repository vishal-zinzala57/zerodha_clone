const { Strategy: jwtStrategy, ExtractJwt } = require('passport-jwt');
const User = require('../model/UserModel');
const dotenv = require('dotenv');
dotenv.config();

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) token = req.cookies["token"];
  return token;
};

const options = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.JWT_SECRET,
};

module.exports = (passport) =>{
    passport.use(
        new jwtStrategy(options , async (jwt_payload , done) =>{
            try{
                const user = await User.findById(jwt_payload.id);
                if(user){
                    return done(null , user);
                }
                return done(null, false);
            }
            catch(e){
                console.log(e);
                return done(e , false);
            }
        })
    );
};