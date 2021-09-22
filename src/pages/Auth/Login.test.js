import React from "react";
import { render, fireEvent, within, screen } from "@testing-library/react";
import Login from "./Login";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
describe("<Login/>", () => {
  it("checking render", () => {
    render(<Login />);
  });
});

it("text check", () => {
  const { getByTestId } = render(<Login />);
  const { getByText } = within(getByTestId("login"));
  expect(getByText("Login")).toBeInTheDocument();
});

describe("Input Field Check", () => {
  test("render email input", () => {
    render(<Login />);

    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
  });

  test("pass valid email to test email input field", () => {
    render(<Login />);

    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test@mail.com");

    // expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
    // expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });

  // test('pass invalid email to test input value', () => {
  //   render(<App />);

  //   const inputEl = screen.getByTestId("email-input");
  //   userEvent.type(inputEl, "test");

  //   expect(screen.getByTestId("email-input")).toHaveValue("test");
  //   expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
  //   expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid email.");
  // });
});
