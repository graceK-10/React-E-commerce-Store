//importing assets and css
import React from 'react';
import plus from '../../assets/Plus-Button.svg';
import minus from '../../assets/Minus-Button.svg';
import BlackCard from '../../assets/Black-card.svg';
import BlackGift from '../../assets/Black-gift.svg';
import './CheckOut.css'

//importing React Hooks and components
import { Link } from 'react-router-dom';
import { useState } from "react";


//Checkout component
function CheckOut() {
  const [productsState, setProductsState] = useState(  
    products.map(product => ({ ...product, quantity: 1 }))
  );

  // State to store subtotal, shipping, GST, and gift card values
  const [items,setItems] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [gst, setGst] = useState(0);
  const [giftCard, setGiftCar] = useState(0);

  // Function to update quantity of a products
  const updateQuantity = (productId, increment) => {
    setProductsState(prevProducts => {
      const newProducts = [...prevProducts];
      const productToUpdate = newProducts.find(product => product.id === productId);
      if (productToUpdate) {
        productToUpdate.quantity += increment ? 1 : -1;
      }
      return newProducts;
    });
  };

  // to alculate subtotal, shipping, GST, and gift card values
  const totalPrice = productsState.reduce((acc, product) => acc + product.price * product.quantity, 0);
  setItems(totalPrice);

  const totalShipping = 10;
  setShipping(totalShipping);
  const totalGst = totalPrice * 0.10;
  setGst(totalGst);
  const totalGiftCard = 20;
  setGiftCard(totalGiftCard);
};

//funtion to increament and to decreament quantity
  const incrementQuantity = productId => updateQuantity(productId,true);
  const decreamentQuantity = productId => updateQuantity(productId,false)

  const total = items + shipping + gst - giftCard;

  return (
    <div className="container">
      {/*shipping adress section*/}
      <div className="first-container">
        <h1>Shipping Adress</h1>
        <p>John Maker</p>
        <p>123 Plae Grond Street</p>
        <p>Vermont, California</p>
        <p>United States of America</p>
        <div className="btn">Change</div>
      </div>
    </div>
  )
}


  

export default CheckOut;