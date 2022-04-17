/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

const Wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

describe("Home", () => {
  it("Must display a title", () => {
    const screen = render(<Home />, { wrapper: Wrapper });

    expect(
      screen.getByText(/Click here to search for a pokemon/i)
    ).toBeInTheDocument();
  });
});
