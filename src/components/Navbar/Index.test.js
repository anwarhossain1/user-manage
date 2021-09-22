import React from "react";
import { render, screen, within } from "@testing-library/react";
import Index from "./Index";
import "@testing-library/jest-dom/extend-expect";
describe("<Index/>", () => {
  it("checking render", () => {
    render(<Index />);
  });
});
it("checking text", () => {
  const { getByTestId } = render(<Index />);
  const { getByText } = within(getByTestId("durbin"));
  expect(getByText("DurBinLab-Test")).toBeInTheDocument();
});
