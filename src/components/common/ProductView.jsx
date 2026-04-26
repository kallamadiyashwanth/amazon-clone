import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ProductView.css";
import {useDispatch } from "react-redux";
import { increment, decrement} from "../../redux/components/redux-flow/actions";

const ProductView = () => {
  const location = useLocation();
  const { productInfo } = location.state || {};
  const dispatch = useDispatch();

  const [userData, setUserData] = useState([]);
  // console.log({response})

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setUserData(data.products.slice(0, 20)))
      .catch("Error");
  };

  useEffect(() => {
    fetchData();
  }, []);


  const [cartItems, setCartItems] = useState({}); 
  // store as object: { index: quantity }

  const handleAddToCart = (item) => {
  const key = item.title;

  setCartItems((prev) => ({
    ...prev,
    [key]: {
      item,
      qty: prev[key] ? prev[key].qty + 1 : 1,
    },
  }));
};

const increaseQty = (key) => {
  setCartItems((prev) => ({
    ...prev,
    [key]: {
      ...prev[key],
      qty: prev[key].qty + 1,
    },
  }));
};

const decreaseQty = (key) => {
  setCartItems((prev) => {
    const updated = { ...prev };

    if (updated[key].qty === 1) {
      delete updated[key];
    } else {
      updated[key].qty -= 1;
    }

    return updated;
  });
};

  if (!userData) {
    return <h2 style={{ textAlign: "center" }}>No Products Found</h2>;
  }

  return (
    <div className="product-container">
      <h1 className="page-title">Products</h1>

      <div className="product-grid">
        {userData.map((item, index) => {
          const key = item.title;

          return (
            <div className="product-card" key={index}>
              <img src={item.images} alt={item.title} className="product-img" />

              <div className="product-details">
                <h3>{item.title}</h3>
                <p className="desc">{item.description}</p>

                <div className="price-section">
                  <span className="discount">{item.discountPercentage}</span>
                  <span className="price">{item.price}</span>
                </div>

                {!cartItems[key] ? (
                  <button
                    className="buy-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="qty-controls">
                    <button onClick={() => dispatch(decrement())}>-</button>
                    <span>{cartItems[key].qty}</span>
                    <button onClick={() => dispatch(increment())} >+</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductView;