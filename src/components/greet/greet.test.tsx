import { render, screen } from "@testing-library/react"
import  Greet  from "./greet"

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("Greet renders a name", () => {
    render(<Greet name="Sadakshya" />);
    const textElement = screen.getByText("Hello Sadakshya");
    expect(textElement).toBeInTheDocument;
  });
});