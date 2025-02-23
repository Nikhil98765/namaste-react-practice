import {act, fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import "@testing-library/jest-dom";

import {RestaurantMenu} from "../RestaurantMenu";
import MOCK_DATA from '../mocks/restaurantMenuData.json';
import {AppStore} from "../../store/AppStore";
import {Header} from "../Header";
import {BrowserRouter} from "react-router-dom";
import {Cart} from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () =>  Promise.resolve(MOCK_DATA)
  })
})

describe('Test cases for adding item to cart', () => {

  it('should load RestaurantMenu component', async () => {
    await act(async () => await render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    ));

    // Click on the category accordion
    const accordionHeader = screen.getByText('Recommended (20)');
    fireEvent.click(accordionHeader);

    // Check for the items in the category
    const itemCards = screen.getAllByTestId('itemCards');
    expect(itemCards).toHaveLength(20);

  //   find the Add + button and check the header for no of items beside cart button
    const addBtns = screen.getAllByRole('button', {name: 'Add +'});
    fireEvent.click(addBtns[0]);

    const cartBtn = screen.getByText('Cart - (1)');
    expect(cartBtn).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    const cartBtn1 = screen.getByText('Cart - (2)');
    expect(cartBtn1).toBeInTheDocument();

  //   check the number of items in cart page
    const cartItemsBefore = screen.getAllByTestId('itemCards');
    expect(cartItemsBefore).toHaveLength(22);

  //   click on the clear cart button and recheck the itemCards length
    const clearCartBtn = screen.getByRole('button', {name: 'Clear Cart'});
    fireEvent.click(clearCartBtn);

    const cartItemsAfter = screen.getAllByTestId('itemCards');
    expect(cartItemsAfter).toHaveLength(20);

  })
})
