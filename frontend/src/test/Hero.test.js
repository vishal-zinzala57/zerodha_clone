import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../landing_Page/home/Hero";
import '@testing-library/jest-dom';

//test suite
describe("Hero Component", () => {
    test("render hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('hero-image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", 'media/images/homehero.png');
    })
});