import { render, screen } from "@testing-library/react"

test('Should load contact us component', () => { 
    render(<Contact />)
    const contactElement = screen.getByText(/This is a Contact Page/i) 
 })