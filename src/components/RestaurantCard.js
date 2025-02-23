import React from "react";
import {CDN_URL} from "../utils/constants";


export const RestaurantCard = ({ resData }) => {

  const { name, cuisines, avgRatingString, sla, cloudinaryImageId } = resData.info;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-[200px] rounded-lg hover:bg-gray-200 bg-gray-100">
      <img
        className="rounded-lg"
        src={
          CDN_URL + cloudinaryImageId
        }
        alt="res logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
}

/**
 * Higher order components (pass input component and get another component)
 * it should be a pure function
 * https://legacy.reactjs.org/docs/higher-order-components.html
 *
 * @param RestaurantCard
 * @returns {function(*): *}
 */
export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}
