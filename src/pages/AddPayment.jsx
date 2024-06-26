import { Link } from "react-router-dom";
import cards from "../Assets/card-svg.svg";
import "../css/AddPayment.css";
import lock from "../Assets/lock.svg";

function AddPayment() {
  //renders a simple interface for selecting and adding a payment card.
  return (
    <>
      <div className="container">
        <div className="top-container">
          <h1>SELECT A CARD</h1>
          <p>
            <img src={cards} alt=""></img>MasterCard ending in 4242
          </p>
          <p>
            <img src={cards} alt=""></img>VISA Debit ending in 2894
          </p>
        </div>
        <div className="bottom-container">
          <form>
            <h1>ADD A NEW CARD</h1>
            <div className="form-group">
              <div className="card">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Maker" />
              </div>
            </div>
            <div className="form-group">
              <div className="card">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="5126-5987-2214-7621"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="Date">
                <label>Expiry Date</label>
                <input type="text" id="Date" placeholder="MM/YYYY" />
              </div>
              {/* divided form into groups using div elements with classes form-group and card. */}
              <div className="Date">
                <label>CVC</label>
                <input type="number" id="Date" placeholder="123" />
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="myCheckbox" name="myCheckbox" />
              <label htmlFor="myCheckbox">
                Save this as your default payment method
              </label>
            </div>
            <Link to="/ShippingAddressForm">
              <div className="button6">
                <button className="button7">Add Payment Method</button>
              </div>
            </Link>
            <div className="la-line">
              <p id="ba">back</p>
              <p id="la">
                <img src={lock} alt=""></img>Secure Connection
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddPayment;
