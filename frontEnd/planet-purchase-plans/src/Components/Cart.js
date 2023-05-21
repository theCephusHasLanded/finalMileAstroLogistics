import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import ThemeContext from "../Components/ThemeContext";

function Cart({ planetName }) {
  const { darkMode } = useContext(ThemeContext);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    setCartItems((prevCartItems) => [...prevCartItems, planetName]);
  };

  const deleteFromCart = () => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((planet) => planet !== planetName)
    );
  };

  const themeMode = darkMode ? "dark" : "light";
  const buttonColor = darkMode ? "#333" : "#4CAF50";
  const buttonTextColor = darkMode ? "#FFF" : "#000";

  return (
    <div className={`cart-container ${themeMode}`}>
      <h2>Shopping List</h2>
      {cartItems.length === 0 ? (
        <p>No items in your list</p>
      ) : (
        <ul>
          {cartItems.map((planet, index) => (
            <li key={index}>{planet}</li>
          ))}
        </ul>
      )}
      <Button
        onClick={addToCart}
        variant={themeMode === "light" ? "success" : "dark"}
        className="cart-button"
        style={{
          backgroundColor: buttonColor,
          color: buttonTextColor,
          fontFamily: "Syne",
        }}
      >
        Add Planet 🛒
      </Button>
      <Button
        onClick={deleteFromCart}
        variant={themeMode === "light" ? "danger" : "dark"}
        className="cart-button"
        style={{
          backgroundColor: "black",
          color: "white",
          fontFamily: "Syne",
        }}
      >
        Remove Planet 🗑️
      </Button>
    </div>
  );
}

export default Cart;
