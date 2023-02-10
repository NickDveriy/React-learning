import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders 'Hello World' as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ... nothing

    //Assert
    const element = screen.getByText("Hello World", { exact: false });
    expect(element).toBeInTheDocument();
  });

  test("renders 'Initial text' if the button was not clicked", () => {
    render(<Greeting />);

    const textElement = screen.getByText("Initial text");
    expect(textElement).toBeInTheDocument();
  });

  test("renders 'Changed text' if the button was clicked", () => {
    render(<Greeting />);

    // const button = screen.getByText("Change text!");
    // button.click();

    const button = screen.getByRole("button");
    userEvent.click(button);

    const textElement = screen.getByText("Changed text");
    expect(textElement).toBeInTheDocument();
  });

  test("does not render 'Initial text' if the button was clicked", () => {
    render(<Greeting />);

    // const button = screen.getByText("Change text!");
    // button.click();

    const button = screen.getByRole("button");
    userEvent.click(button);

    const textElement = screen.queryByText("Initial text");
    expect(textElement).toBeNull();
  });
});
