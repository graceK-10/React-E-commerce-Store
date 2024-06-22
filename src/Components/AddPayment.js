import cards from "../Assets/card-svg.svg"
import "../Components/AddPayment.css"
import lock from "../Assets/lock.svg"

function AddPayment() {
  return (
    <>
    <div className="container">
      <div className="top-container">
        <h1>SELECT A CARD</h1>
        <p><img src={cards} alt=""></img>MasterCard ending in 4242</p>
        <p><img src={cards} alt=""></img>VISA Debit ending in 2894</p>
      </div>