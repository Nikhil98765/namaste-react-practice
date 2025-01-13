import React, {useEffect, useState} from "react";

import {RestaurantCard} from "./RestaurantCard";
import {Shimmer} from "./Shimmer";


export const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956708347221225&lng=77.6610016822815&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const data = await response.json();
    setListOfRestaurants(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }


  if(listOfRestaurants.length === 0){
    return (
      <Shimmer />
    )
  }


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
