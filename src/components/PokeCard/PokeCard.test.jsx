import React from "react";
import { render } from "@testing-library/react";
import PokeCard from "./PokeCard";

describe("PokeCard", () => {
  it("Must have props", () => {
    const props = {
      name: "name",
      image: "",
    };

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = render(<PokeCard {...props} />);

    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByTestId("image")).toBeInTheDocument();
  });
});
