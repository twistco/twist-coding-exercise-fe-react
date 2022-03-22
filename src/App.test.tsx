import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("starter test", () => {
  render(<App />);
  const linkElement = screen.getByText(/Crypto Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
