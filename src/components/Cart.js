import {ItemsList} from "./ItemsList";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../store/CartStore";

export const Cart = () => {

  const dispatch = useDispatch();

  const items = useSelector(state => state.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button className="bg-black text-white rounded-lg p-2" onClick={handleClearCart}>Clear Cart</button>
        {items?.length === 0 && <h1 className="m-2">Cart is empty. Add Items to the cart!</h1>}
        <ItemsList items={items}/>
      </div>
    </div>
  )
}
