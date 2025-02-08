import React, {useContext, useEffect, useRef, useState} from "react";

import {RestaurantCard, withOpenLabel} from "./RestaurantCard";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router-dom";
import {useOnlineStatus} from "../hooks/useOnlineStatus";
import {UserContext} from "../utils/UserContext";


export const Body = () => {

  const listOfRestaurants = useRef([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  const {loggedInUser, setUserName} = useContext(UserContext);

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

  const RestaurantCardPromoted = withOpenLabel(RestaurantCard);

  return (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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

        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-50 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.current.filter(
                (item) => item.info.avgRating > 4
              );
              setFilteredListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <input value={loggedInUser} type="text" className="border-black border p-2"
                 onChange={e => setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredListOfRestaurants.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {
              res.info.isOpen ?<RestaurantCardPromoted resData={res}></RestaurantCardPromoted> : <RestaurantCard resData={res} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
}
