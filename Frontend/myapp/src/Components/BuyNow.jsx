import React, { useState } from "react";
import { useSelector } from "react-redux";
const BuyNow = () => {
  const order = useSelector((state) => state.orders.CurrentOrderPlaced);
  console.log('-------order----',order)
  let subTotal=0;
  const username = useSelector(
    (state) => state.authentication.loggedInUserName
  );
  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <div className="order-container">
        <div className="OrderPlaced">
          <div className="order-Confirm">
            <span
              style={{
                fontWeight: "800",
                fontFamily: "Times New Roman",
                display: "table",
                margin: "auto",
                marginTop: "20px",
              }}
            >
              ORDER CONFIRMATION
            </span>
            <div
              className="order-user"
              style={{
                fontWeight: "300",
                fontFamily: "Times New Roman",
                display: "table",
                margin: "auto",
                marginTop: "40px",
              }}
            >
              {username}, thank you for your order!
            </div>
            <span
              style={{
                fontWeight: "400",
                fontFamily: "Times New Roman",
                display: "table",
                margin: "auto",
                marginTop: "20px",
              }}
              className="order-resp"
            >
              We've recieved your order and will contact you as soon as your
              package
            </span>
            <span
              style={{
                fontWeight: "400",
                fontFamily: "Times New Roman",
                display: "table",
                margin: "auto",
                marginTop: "20px",
              }}
            >
              is shipped. You can find your purchase information below.
            </span>
            <span  style={{
                fontWeight: "400",
                fontFamily: "Times New Roman",
                display: "table",
                margin: "auto",
                marginTop: "20px",
              }}>
              Order will be delivered at {order.shippingInfo.address}
            </span>
          </div>
          <div className="order-summary">
            <h4 style={{ display: "table", margin: "auto", marginTop: "50px" }}>
              Order Summary
            </h4>
            <span
              style={{ display: "table", margin: "auto", marginTop: "30px" }}
            >
              {monthNames[date.getMonth()]} {date.getUTCDate()},{" "}
              {date.getFullYear()}
            </span>
            <div className="order-items">
              <div className="order-desc">
                <hr />
                {order.orderItems.map((item, idx) => {
                  subTotal+=item.Quantity*item.Order.price
                  return (
                    <>
                      <div className="order-specific">
                        <div className="order-img">
                          <img src={item.Order.image[0]} alt="missing" />
                        </div>
                        <div className="order-detail">
                          <div className="order-price">
                            <div className="order-name">Product Name</div>
                            <div className="order-name">{item.Order.name}</div>
                          </div>
                          <div className="order-price">
                            <div className="order-name">Category</div>
                            <div className="order-name">{item.Order.category}</div>
                          </div>
                          {/* <div className="order-price">
                            <div className="order-name">
                             Shipping Price
                            </div>
                            <div className="order-name">{item.shippingPrice}</div>
                          </div> */}
                          <hr />
                          <div className="order-price">
                            <div className="order-name">Product ID</div>
                            <div className="order-name">#{item.Order._id}</div>
                          </div>
                          <div className="order-price">
                            <div className="order-name">Price</div>
                            <div className="order-name">₹{item.Order.price}</div>
                          </div>
                          <div className="order-price">
                            <div className="order-name">Vendor ID</div>
                            <div className="order-name">#{item.Order.CreatedBy}</div>
                          </div>
                          <div className="order-price">
                            <div className="order-name">Quantity</div>
                            <div className="order-name">{item.Quantity}</div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="order-total">
              <span
                style={{
                  fontWeight: "800",
                  fontFamily: "Times New Roman",
                  display: "table",
                  margin: "auto",
                  marginTop: "20px",
                }}
              >
                Order Total
              </span>
              <hr />
              <div className="order-price">
                <div className="order-name">Subtotal Price</div>
                <div className="order-name">₹{subTotal}</div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyNow;
