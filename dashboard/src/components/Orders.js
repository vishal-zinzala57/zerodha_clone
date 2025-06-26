import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allorders")
      .then((res) => {
        setAllOrders(res.data);
      }, []);
  });


  return (


    <div className="orders">
      {allOrders.length > 0 ?
        (<div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((stock, index) => {
                let name = stock.name;
                let Qty = stock.qty;
                let price = stock.price;
                return (
                  <tr key={index}>
                    <td>{name}</td>
                    <td>{Qty}</td>
                    <td>&#8377;{price}</td>
                    <td style={{ fontSize: "15px" }}>&#8377; {price * Qty}</td>
                  </tr>
                )
              })}
            </tbody>

          </table>
        </div>)
        :
        (<div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>)}
    </div>
  );
};

export default Orders;
