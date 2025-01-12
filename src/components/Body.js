import React, {useEffect, useState} from "react";

import {RestaurantCard} from "./RestaurantCard";
import {resList} from "../utils/mockData";


export const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    console.log('useEffect rendered')
  }, [])

  console.log('body rendered');

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(item => item.info.avgRating > 4);
          setListOfRestaurants(filteredList);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          listOfRestaurants.map(res => <RestaurantCard key={ res.info.id } resData={res}/>)
        }
      </div>
    </div>
  );
}
