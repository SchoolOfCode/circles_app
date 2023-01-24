import { render, screen } from "@testing-library/react";
import App from "../pages/home";

test("renders Google link", () => {
  render(<App />);
  const linkElement = screen.getByText(/googl/i);
  expect(linkElement).toBeInTheDocument();
});
