import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import { faBars, faCartShopping, faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "../styles/header.css";
import Shop from "./shop-section";
import Location from "./location";
import Cart from "./cart";
import Orders from "./orders";
import Login from "./login";
import ProductView from "./common/ProductView";

=======
import {
  faBars,
  faCartShopping,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import Shop from "./shop-section";
import Address from "./Address";
import SignIn from "./signin";
import Cart from "./cart";
import Orders from "./orders";
import Login from "./login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import ProductView from "./common/ProductView";
import { useSelector} from "react-redux";
>>>>>>> ae41a18d1cbf10515b49674a2a496843bc5cc4a1
const Header = () => {
  const cartCount = useSelector((state) => state.count);
  return (
    <div className="parent">
      <header>
        <Router>
          <div class="navbar">
            <NavLink to="/" activeClassName="active">
              <div class="nav-logo border">
                <div class="logo"></div>
              </div>
            </NavLink>

<<<<<<< HEAD
            <NavLink to="/location" activeClassName="active">
=======
            <NavLink to="/address" activeClassName="active">
>>>>>>> ae41a18d1cbf10515b49674a2a496843bc5cc4a1
              <div class="nav-address border">
                <p class="add-first">Deliver to</p>
                <div class="add-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p class="add-second">India</p>
                </div>
              </div>
            </NavLink>

            <div class="nav-search">
              <select class="search-select">
                <option>All</option>
              </select>
              <input placeholder="Search Amazon" class="search-input" />
              <div class="search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>

            <NavLink to="/login" activeClassName="active">
              <div class="nav-signin border">
                <p>
                  <span>Hello, sign in</span>
                </p>
                <p class="nav-second">Account & Lists</p>
              </div>
            </NavLink>

            <NavLink to="/orders" activeClassName="active">
              <div class="nav-return border">
                <p>
                  <span>Returns</span>
                </p>
                <p class="nav-second">& Orders</p>
              </div>
            </NavLink>

            <NavLink to="/cart" activeClassName="active">
              <div class="nav-cart border">
                <FontAwesomeIcon icon={faCartShopping} className="cartIcon" />
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
                Cart
              </div>
            </NavLink>
          </div>

          <div class="panel">
            <div class="panel-all">
              <FontAwesomeIcon icon={faBars} />
              {/* <i class="fa-solid fa-bars"></i> */}
              All
            </div>

            <div class="panel-ops">
              <ul>
                <li>Today's Deals</li>
                <li>Customer Service</li>
                <li>Registry</li>
                <li>Gift Cards</li>
                <li>Sell</li>
              </ul>
            </div>

            <div class="panel-deals">Shop deals in Electronics</div>
          </div>

<<<<<<< HEAD
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/location" element={<Location />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product-view" element={<ProductView />} />
            <Route path="/login" element={<Login />} />
          </Routes>
=======
          <div className="pagecontent">
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/address" element={<Address />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product-view" element={<ProductView />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
>>>>>>> ae41a18d1cbf10515b49674a2a496843bc5cc4a1
        </Router>
      </header>
    </div>
  );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> ae41a18d1cbf10515b49674a2a496843bc5cc4a1
