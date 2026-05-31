import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increment, decrement, removeItem } from "../redux/actions";
import "../styles/cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseFloat(priceStr.replace(/[^0-9.]/g, ""));
  };

  const cartList = Object.values(cartItems);

  let totalItemsCount = 0;
  let totalDiscountedCost = 0;
  let totalOriginalCost = 0;

  cartList.forEach(({ item, qty }) => {
    const discountedPrice = parsePrice(item.discount);
    const originalPrice = parsePrice(item.price);
    totalItemsCount += qty;
    totalDiscountedCost += discountedPrice * qty;
    totalOriginalCost += originalPrice * qty;
  });

  const totalSavings = totalOriginalCost - totalDiscountedCost;

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {cartList.length === 0 ? (
        <div className="empty-cart-view">
          <h2 className="empty-cart-text">Your cart is currently empty.</h2>
          <p className="empty-cart-subtext">Add items to it from our wide range of products!</p>
          <button className="shop-now-btn" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-content-wrapper">
          <div className="cart-items-section">
            <div className="cart-header-row">
              <span className="header-title">Product Details</span>
              <span className="header-qty">Quantity</span>
              <span className="header-price">Price</span>
              <span className="header-total">Total</span>
            </div>

            {cartList.map(({ item, qty }) => {
              const discountedPrice = parsePrice(item.discount);
              const originalPrice = parsePrice(item.price);
              const itemTotal = discountedPrice * qty;

              return (
                <div className="cart-item-card" key={item.title}>
                  <div className="item-details-col">
                    <img src={item.image} alt={item.title} className="cart-item-img" />
                    <div className="item-info">
                      <h3 className="item-title">{item.title}</h3>
                      <p className="item-desc">{item.desc || item.description}</p>
                      <button
                        className="remove-item-btn"
                        onClick={() => dispatch(removeItem(item))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="item-qty-col">
                    <div className="qty-selector">
                      <button
                        className="qty-btn"
                        onClick={() => dispatch(decrement(item))}
                      >
                        -
                      </button>
                      <span className="qty-value">{qty}</span>
                      <button
                        className="qty-btn"
                        onClick={() => dispatch(increment(item))}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="item-price-col">
                    <span className="item-current-price">{item.discount}</span>
                    {originalPrice > discountedPrice && (
                      <span className="item-original-price">{item.price}</span>
                    )}
                  </div>

                  <div className="item-total-col">
                    <span className="item-total-price">${itemTotal.toFixed(2)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-summary-sidebar">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-row">
              <span>Items ({totalItemsCount}):</span>
              <span>${totalOriginalCost.toFixed(2)}</span>
            </div>

            {totalSavings > 0 && (
              <div className="summary-row discount-row">
                <span>Savings:</span>
                <span>-${totalSavings.toFixed(2)}</span>
              </div>
            )}

            <div className="summary-row">
              <span>Shipping:</span>
              <span className="free-shipping">FREE</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row total-row">
              <span>Total Cost:</span>
              <span>${totalDiscountedCost.toFixed(2)}</span>
            </div>

            <button className="checkout-btn" onClick={() => alert("Proceeding to checkout...")}>
              Proceed to Buy ({totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'})
            </button>

            {/* <div className="safe-shopping-badge">
              🔒 Secure checkout. Satisfaction guaranteed.
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;