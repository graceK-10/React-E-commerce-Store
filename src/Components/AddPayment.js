import cards from "../Assets/card-svg.svg"
import "../Components/AddPayment.css"
import lock from "../Assets/lock.svg"

function AddPayment() { //renders a simple interface for selecting and adding a payment card. 
  return (
    <>
    <div className="container">
      <div className="top-container">
        <h1>SELECT A CARD</h1>
        <p><img src={cards} alt=""></img>MasterCard ending in 4242</p>
        <p><img src={cards} alt=""></img>VISA Debit ending in 2894</p>
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
                <input type="text" id="cardNumber" placeholder="5126-5987-2214-7621" />
              </div>
            </div>
            <div className="form-group">
            <div className="Date">
             <label>Expiry Date</label>
             <input type="text" id="Date" placeholder="MM/YYYY" />
            </div>
             {/* divided form into groups using div elements with classes form-group and card. */}