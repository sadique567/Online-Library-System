import "./header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../utils/userContext";
import { useSelector } from "react-redux";
export function MyHeader() {
  const data = useContext(userContext);
  console.log(data);
  const cartItem = useSelector((store) => store.cart.items);
console.log(cartItem);
  return (
    <div className="my-header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/timer">Timer</Link>
        </li>
        <li><Link to="/memo">Memo</Link></li>
        <li>
          <Link to="/">{data.loggedInUser}</Link>
        </li>

        <li> <Link to="/cart">{cartItem.length} items in cart</Link> </li>
      </ul>
    </div>
  );
}
