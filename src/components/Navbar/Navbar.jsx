import { FaShoppingCart } from "react-icons/fa";
import "./navbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
const Navbar = () => {
  const {gettotalcartitem} = useContext(ShopContext)
  return (
    <>
      <div className="navbar">
            <div className="logo">
                <h2>Shop</h2>
            </div>
            <ul>
              <Link to="/"> <li>Home</li> </Link> 
             <Link to={"/product"}>   <li>Product</li> </Link>
            </ul>
            <div className="cart">
            <Link to={"/cart"}>  <FaShoppingCart fontSize={"40px"} /> </Link>
            <div className="cart-count">{gettotalcartitem()}</div>
          </div>
      </div>
    </>
  )
}

export default Navbar