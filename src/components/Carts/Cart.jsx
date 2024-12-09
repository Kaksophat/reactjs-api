import { ShopContext } from "../context/Shopcontext";
import { useContext } from "react";
import "./cart.css"
import { CiCircleRemove } from "react-icons/ci";

const Cart = () => {
  const { all_product, cartitems, removecart,gettotalcart } = useContext(ShopContext);

  return (
    <>
    <div className="cartitem">
    <div className="cartitem-format-main">
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Total</p>
      <p>Remove</p>
    </div>
    <hr />

    {all_product.map((e) => {
        if (cartitems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitem-format cartitem-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.price}</p>
                <button className="cartitem-quantify">{cartitems[e.id]}</button>
                <p>${e.price * cartitems[e.id]}</p>
                <CiCircleRemove onClick={() => removecart(e.id)} className="removecart" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitem-total">
             <h1>CartTotal</h1>
             <div className="total">
              <h3>Total</h3>
              <p>${gettotalcart()}</p>
              </div>
              <button>Proceed To Checkout</button>
      </div>
  </div>
  </>
  )
}

export default Cart