import {ItemsList} from "./ItemsList";

export const RestaurantCategory = ({data, onExpand, showItem}) => {


  const handleClick = () => {
    onExpand();
  }

  return (
    <div>
      <div className="mx-auto my-4 w-6/12 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemsList items={data.itemCards} /> }
      </div>
    </div>
  )
}
