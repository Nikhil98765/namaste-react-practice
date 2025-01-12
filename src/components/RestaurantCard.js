import React from "react";
import {CDN_URL} from "../utils/constants";

const styles = {
  backgroundColor: "#f0f0f0",
}

export const RestaurantCard = ({ resData }) => {

  const { name, cuisines, avgRatingString, sla, cloudinaryImageId } = resData.info;

  return (
    <div className="res-card" style={styles}>
      <img
        className="res-logo"
        src={
          CDN_URL + cloudinaryImageId
        }
        alt="res logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
}
