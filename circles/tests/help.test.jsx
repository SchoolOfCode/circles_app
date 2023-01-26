import { render, screen } from "@testing-library/react";
import Faq from "../pages/help";
import "@testing-library/jest-dom";

describe("Faq", () => {
  it("renders the background on the page", () => {
    render(<Faq />);

    const backgroundImage = screen.getByRole("img", {
      name: "colour gradient",
    });

    expect(backgroundImage).toBeInTheDocument();
  });
});
