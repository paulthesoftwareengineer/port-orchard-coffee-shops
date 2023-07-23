// CoffeeShopList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const CoffeeShopList = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    axios.get("/path/to/your/coffeeShops.json")
      .then((response) => {
        setCoffeeShops(response.data);
      })
      .catch((error) => {
        console.error("Error fetching coffee shop data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Coffee Shops in Port Orchard</h1>
      <ul>
        {coffeeShops.map((shop) => (
          <li key={shop.id}>
            <strong>{shop.name}</strong>
            <p>Address: {shop.address}</p>
            <p>Phone: {shop.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeShopList;

