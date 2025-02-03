import { useParams } from "react-router-dom";

import { Shimmer } from "./Shimmer";
import {useRestaurantMenu} from "../hooks/useRestaurantMenu";

export const RestaurantMenu = () => {

  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);
  console.log(resData);

  if (resData === null) {
    return <Shimmer />
  }
  const { name, cuisines, costForTwoMessage } = resData.cards[2]?.card?.card?.info;
  const { itemCards } = resData.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

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
