import {fireEvent, render, screen} from "@testing-library/react";
import { Header } from '../Header';
import { Provider } from "react-redux";
import { AppStore } from "../../store/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe('Header component test cases', () => {
  it('should render header component with a login button', () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByRole('button', {name: 'Login'});
    // const loginBtn = screen.getByText('Login');
    expect(loginBtn).toBeInTheDocument();
  })

  it('should render header component with cart items - 0 ', () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0)");

    // Match by regex
    // const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
  })

  it('should change login button logout on click', () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByRole('button', {name: 'Login'});
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByText('Logout');
    expect(logoutBtn).toBeInTheDocument();
  })
})
