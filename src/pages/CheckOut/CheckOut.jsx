//importing assets and css
import React from 'react';
import plus from '../../assets/Plus-Button.svg';
import minus from '../../assets/Minus-Button.svg';
import cardIcon from '../../assets/Card-Icon.svg';
import giftIcon from '../../assets/Gift-Icon.svg';
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
        <h1>SHIPPING ADRESS</h1>
        <p>John Maker</p>
        <p>123 Plae Grond Street</p>
        <p>Vermont, California</p>
        <p>United States of America</p>
        <div className="btn">Change</div>
      </div>

      {/* Payment method section */}
      <div className="second-container">
        <h1>PAYMENT METHOD</h1>
        <p>
          <img src={cardIcon} alt="card-icon" /></img>MasterCard ending in 1252
        </p>
        <p>
          <img src={giftIcon}alt="gift-icon" /></img>$53.21 Gift card balance
        </p>
        <div className="checkbox">
          <input type="checkbox" id="giftCheckbox" name="giftCheckbox" />
          <label for="giftCheckbox">Billing adess same as Shipping adress</label>
        </div>
        <div className="btn">{/* <button>Change</button> */}</div>
      </div>

    </div>
  )
}


  

export default CheckOut;