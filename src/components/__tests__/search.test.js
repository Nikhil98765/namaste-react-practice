import {act, fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {BrowserRouter} from "react-router-dom";

import {Body} from "../Body";
import resListData from "../mocks/restaurantListData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(resListData),
  })
})

describe("Integration test cases for search and top rated restaurant features", () => {

  // beforeAll(() => {
  //   console.log('before all')
  // })
  //
  // beforeEach(() => {
  //   console.log('before each');
  // })
  //
  // afterAll(() => {
  //   console.log('after all');
  // })
  //
  // afterEach(() => {
  //   console.log('after each');
  // })

  it("should render body component with search button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      ));

    const resCardsBefore = screen.getAllByTestId("resCard");
    expect(resCardsBefore).toHaveLength(20);

    const searchBtn = screen.getByText('Search');
    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "pizza" } });
    fireEvent.click(searchBtn);

    const resCardsAfter = screen.getAllByTestId('resCard');
    expect(resCardsAfter).toHaveLength(4);
  })

  it("should filter top rated restaurants", async () => {
    await act(async () => {
      await render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    });

    const resCardsBefore = screen.getAllByTestId('resCard');
    expect(resCardsBefore).toHaveLength(20);

    const topRatedBtn = screen.getByText("Top Rated Restaurants");
    expect(topRatedBtn).toBeInTheDocument();

    fireEvent.click(topRatedBtn);

    const resCardsAfter = screen.getAllByTestId('resCard');
    expect(resCardsAfter).toHaveLength(6);
  })
})
