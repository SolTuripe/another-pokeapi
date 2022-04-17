/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import PokeCardList from "./PokeCardList";
import api from "../../Global";

jest.mock("../../Global");

test("render PokeCardList with all items", async () => {
  const mockedResponse = [
    { name: "pikachu", image: "img" },
    { name: "charmander", image: "img" },
    { name: "squirtle", image: "img" },
  ];

  api.getPaginatedPokemons.mockResolvedValue(mockedResponse);

  const { findAllByTestId } = render(<PokeCardList />);

  const cards = await findAllByTestId("pokecard");
  console.log(cards[0]);

  expect(cards.length).toBe(mockedResponse.length);
});
