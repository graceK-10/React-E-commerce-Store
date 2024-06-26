// Importing assets and CSS
import cardIcon from "../../Assets/Card-Icon.svg";
import giftIcon from "../../Assets/Gift-Icon.svg";
import "./CheckOut.css";
import plus from "../../Assets/Plus-Button.svg";
import minus from "../../Assets/Minus-Button.svg";

// Importing React hooks and components
import { useState } from "react";
import data from "../../components/Data";
import { Link } from "react-router-dom";



// Checkout component
function CheckOut() {
  // State to store products with quantity
  const [productsState, setProductsState] = useState(
    data.map((product) => ({ ...product, quantity: 1 }))
  );

  // State to store subtotal, shipping, GST, and gift card values
  const [items, setItems] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [gst, setGst] = useState(0);
  const [giftCard, setGiftCard] = useState(0);

  // Function to update quantity of a product
  const updateQuantity = (productId, increment) => {
    // Update product quantity in state
    setProductsState((prevProducts) => {
      const newProducts = [...prevProducts];
      const productToUpdate = newProducts.find(
        (product) => product.id === productId
      );
      if (productToUpdate) {
        productToUpdate.quantity += increment ? 1 : -1;
      }
      return newProducts;
    });

    //to calculate new subtotal, shipping, GST, and gift card values
    const totalPrice = productsState.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setItems(totalPrice.toFixed(2));

    const totalShipping = 10;
    setShipping(totalShipping.toFixed(2));

    const totalGst = totalPrice * 0.05;
    setGst(totalGst.toFixed(2));

    const totalGiftCard = 20;
    setGiftCard(totalGiftCard.toFixed(2));

    const total = isNaN(
      parseFloat(items) +
        parseFloat(shipping) +
        parseFloat(gst) -
        parseFloat(giftCard)
    )
      ? 0
      : parseFloat(items) +
        parseFloat(shipping) +
        parseFloat(gst) -
        parseFloat(giftCard);
  };

  // functions to increment and decrement quantity
  const incrementQuantity = (productId) => updateQuantity(productId, true);
  const decrementQuantity = (productId) => updateQuantity(productId, false);

  // Calculate total order value
  const total = items + shipping + gst - giftCard;

  return (
    <div className="container">
      {/* Shipping address section */}
      <div className="top-container">
        <h1>SHIPPING ADDRESS</h1>
        <p>John Maker</p>
        <p>123 Plae Grond Street</p>
        <p>Vermont, California</p>
        <p>United States of America</p>
        <div className="btn">
          <button>Change</button>
        </div>
      </div>

      {/* Payment method section */}
      <div className="middle-container">
        <h1>PAYMENT METHOD</h1>
        <p>
          <img src={cardIcon} alt="card"></img>MasterCard ending in 1252
        </p>
        <p>
          <img src={giftIcon} alt="card"></img>$53.21 Gift card balance
        </p>
        <div className="checkbox">
          <input type="checkbox" id="myCheckbox" name="myCheckbox" />
          <label htmlFor="myCheckbox">
            Billing adress same as Shipping adress
          </label>
        </div>
        <div className="btn">
          <button>Change</button>
        </div>
      </div>

      {/* Review your bag section */}
      <div className="bottom-container">
        <h1>REVIEW YOUR BAG</h1>
        <div className="cart-items">
          {productsState.map((product) => (
            <div className="items-cards" key={product.id}>
              <div className="products-container">
                <div className="products-images">
                  <img src={product.imageUrl} alt={product.title} />
                </div>
                <div className="products-info">
                  <h3>{product.title}</h3>
                  <p id="title">{product.description}</p>
                  <p id="disc">{product.shortDescription}</p>
                  <img src={product.rating} alt={product.title} />
                  <p id="pricee">
                    {product.currency}
                    {product.price}
                  </p>
                  <div className="quantity">
                    <div onClick={() => incrementQuantity(product.id)}>
                      <img id="incr" src={plus} alt="plus" />
                    </div>
                    <p>{product.quantity}</p>
                    <div onClick={() => decrementQuantity(product.id)}>
                      <img id="decr" src={minus} alt="minus" />
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
      </div>

      {/* Order summary section */}
      <div className="sub-total">
        <h1>Order Summary</h1>
        <div className="item">
          <p>Items:</p>
          <p>${items}</p>
        </div>
        <div className="item">
          <p>Shipping:</p>
          <p>${shipping}</p>
        </div>
        <div className="item">
          <p>Estimated GST:</p>
          <p>${gst}</p>
        </div>
        <div className="item">
          <p>Gift card:</p>
          <p>${giftCard}</p>
        </div>
        <hr></hr>
        <div className="item">
          <p id="red">Order total:</p>
          <p id="red">${total}</p>
        </div>
        <hr></hr>
        <Link to="/AddPayment">
          <button className="btn3">Place your order</button>
        </Link>
        {/* Back button */}
      <div className="back-btn">
        <button className="btn-4">Back</button>
      </div>
    </div>
      </div>

      
  );
}

export default CheckOut;
