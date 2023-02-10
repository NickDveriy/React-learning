import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

test("renders Hello World as a text", () => {
  //Arrange
  render(<Greeting />);

  //Act
  // ... nothing

  //Assert
  const element = screen.getByText("Hello World", { exact: false });
  expect(element).toBeInTheDocument();
});
