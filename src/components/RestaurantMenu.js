import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

export const RestaurantMenu = () => {

  const { resId } = useParams();

  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  async function fetchMenuData() {
    const response = await fetch(MENU_URL + "413468");
    const data = await response.json();
    console.log("🚀 ~ fetchMenuData ~ data:", data);
    setResData(data);
  }

  if (resData === null) {
    return <Shimmer />
  }

  const { name, cuisines, costForTwoMessage } = resData.data?.cards[2]?.card?.card?.info;
  const { itemCards } = resData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log("🚀 ~ RestaurantMenu ~ itemCards:", itemCards)

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
}
