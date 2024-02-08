import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import { CartProvider } from "./context/CartContext"; 

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <UserContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserContextProvider>
  </BrowserRouter>
);
