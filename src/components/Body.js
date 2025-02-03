import React, {useEffect, useRef, useState} from "react";

import {RestaurantCard} from "./RestaurantCard";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router-dom";
import {useOnlineStatus} from "../hooks/useOnlineStatus";


export const Body = () => {

  const listOfRestaurants = useRef([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  async function fetchData() {
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956708347221225&lng=77.6610016822815&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const data = await response.json();
    const resList = data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    listOfRestaurants.current = resList;
    setFilteredListOfRestaurants(resList);
  }

  if(onlineStatus === false) {
    return <h1>Looks like you're offline!! Please check your internet connection.</h1>
  }


  if(listOfRestaurants.length === 0){
    return (
      <Shimmer />
    )
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.current.filter(
                (restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setFilteredListOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.current.filter(
              (item) => item.info.avgRating > 4
            );
            setFilteredListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
}
