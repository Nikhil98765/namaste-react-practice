import {render, screen} from "@testing-library/react";
import {Contact} from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page tests", () => {
  it("should load contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button on the contact component", () => {
    render(<Contact />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it("should load 2 input boxes on the contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole('textbox');
    expect(inputBoxes.length).toBe(2);
  })
})


