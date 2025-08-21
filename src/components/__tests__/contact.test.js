import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import { BrowserRouter } from "react-router-dom";

test('Should load contact us component', () => { 
    render(
    <BrowserRouter>
    <Contact />
    </BrowserRouter>)
    const contactElement = screen.getByRole("heading") 
    expect(contactElement).toBeInTheDocument();
})