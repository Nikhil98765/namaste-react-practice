import React from "react";
import {CDN_URL} from "../utils/constants";


export const RestaurantCard = ({ resData }) => {

  const { name, cuisines, avgRatingString, sla, cloudinaryImageId } = resData.info;

  return (
    <div className="m-4 p-4 w-[200px] rounded-lg hover:bg-gray-200 bg-gray-100">
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
