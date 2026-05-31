import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/orders.css";

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div className="orders-container">
      <div className="orders-breadcrumb">
        <span>Your Account</span> &gt; <span className="active">Your Orders</span>
      </div>

      <h1 className="orders-title">Your Orders</h1>

      <div className="no-orders-card">
        {/* <div className="no-orders-icon">📦</div> */}
        <h2 className="no-orders-text">No orders placed yet</h2>
        {/* <p className="no-orders-subtext">You haven't placed any orders in the last 6 months.</p> */}
        <button className="shop-now-btn" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Orders;