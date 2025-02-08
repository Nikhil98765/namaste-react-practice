import { useParams } from "react-router-dom";

import { Shimmer } from "./Shimmer";
import {useRestaurantMenu} from "../hooks/useRestaurantMenu";
import {RestaurantCategory} from "./RestaurantCategory";
import {useState} from "react";

export const RestaurantMenu = () => {

  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resData === null) {
    return <Shimmer />
  }
  const { name, cuisines, costForTwoMessage } = resData.cards[2]?.card?.card?.info;
  const categories = resData.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(category => {
    return category.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  });

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {
        categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.categoryId}
            data={category.card.card}
            showItem={index === showIndex}
            onExpand={() => setShowIndex(prev => {
              return prev === index ? null: index
            })}
          />
        ))
      }
    </div>
  );
}
