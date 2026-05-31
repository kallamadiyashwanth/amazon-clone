import React from "react";
import { useLocation } from "react-router-dom";
import "./ProductView.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/actions";

const ProductView = () => {
  const location = useLocation();
  const { productInfo } = location.state || {};
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartItems || {});

  if (!productInfo) {
    return <h2 style={{ textAlign: "center" }}>No Products Found</h2>;
  }

  return (
    <div className="product-container">
      <h1 className="page-title">Products</h1>

      <div className="product-grid">
        {productInfo.map((item, index) => {
          const key = item.title;

          return (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.title} className="product-img" />

              <div className="product-details">
                <h3>{item.title}</h3>
                <p className="desc">{item.description}</p>

                <div className="price-section">
                  <span className="discount">{item.discount}</span>
                  <span className="price">{item.price}</span>
                </div>

                {!cartItems[key] ? (
                  <button
                    className="buy-btn"
                    onClick={() => dispatch(increment(item))}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="qty-controls">
                    <button onClick={() => dispatch(decrement(item))}>-</button>
                    <span>{cartItems[key].qty}</span>
                    <button onClick={() => dispatch(increment(item))}>+</button>
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