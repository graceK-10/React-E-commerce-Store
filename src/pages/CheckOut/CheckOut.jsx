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

  const [items,setItems] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [gst, setGst] = useState(0);
  const [giftCard, setGiftCar] = useState(0);

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

  const incrementQuantity = productId => updateQuantity(productId,true);
  const decreamentQuantity = productId => updateQuantity(productId,false)
}
  

export default CheckOut;