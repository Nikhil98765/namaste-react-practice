import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import {RestaurantCard, withOpenLabel} from "../RestaurantCard";
import MOCK_DATA from '../mocks/restaurantData.json';

describe('Restaurant Card test cases', () => {
  it('render Restaurant Card with props', () => {
    // Testing component which accepts props
    render(<RestaurantCard resData={MOCK_DATA} />);

    const restaurantName = screen.getByText("Pizza Hut");
    expect(restaurantName).toBeInTheDocument();
  })

  it('should render promoted restaurant card', () => {
    const RestaurantCardPromoted = withOpenLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_DATA}/>);

    const promotedLabel = screen.getByText('Promoted');
    expect(promotedLabel).toBeInTheDocument();
  })
})
