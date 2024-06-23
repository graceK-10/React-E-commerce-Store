import React, { useState } from "react";
import MenuSidebar from "../components/MenuSidebar";
import Bagsidebar from "../components/Bagsidebar";
import { Link } from "react-router-dom";
import "../css/ProductDetails.css";
import cart from "../Assets/addcart.svg";
import stars from "../Assets/Special.png";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { item } = location.state;
  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = () => {
    setClickedItem(item);
  };

  return (
    <>
      <MenuSidebar />
      <Link to="/" className="back-link">
        &lt;&nbsp;&nbsp;Back
      </Link>
      <div className="product-list">
        {/* Render item details */}
        <div className="product" key={item.id}>
          {/* Render images */}
          <div className="Container">
            <div className="smallImg">
              {/* Render small images */}
              <img
                className="smallImage"
                src={item.imageUrl}
                alt={item.title}
              />
              <img
                className="smallImage"
                src={item.imageUrl}
                alt={item.title}
              />
              <img
                className="smallImage"
                src={item.imageUrl}
                alt={item.title}
              />
            </div>
            <div className="bigImg">
              {/* Render big image */}
              <img className="bigImage" src={item.imageUrl} alt={item.title} />
            </div>
          </div>
          <div className="product-details font-cabin font-bold">
            <h1>{item.title}</h1>
            <h3 className="font-cabin text-fontGrey text-3xl">
              {item.description}
            </h3>
            <img className="stars" src={stars} alt="" />
            <p className="font-cabin text-2xl">
              {item.currency}
              {item.price}
            </p>
            <p className="product-des font-cabin text-xl">
              {item.detailedDescription[0]}
            </p>
          </div>
        </div>
      </div>
      <div className="button2" onClick={handleClick}>
        <img src={cart} alt="Logo" className="cart-icon" />
        <span>Add to Bag</span>
      </div>
      {/* Vertical Grey line to the right of content area */}
      <div className="absolute top-16 right-[20rem] w-[5px] h-[115%] bg-gray-400"></div>{" "}
      {/* Horizontal Grey line to the right of content area */}
      <div className="grey-line2"></div>
      <div className="paragraph">
        <h1 className="font-cabin text-4xl mt-[5rem] mb-[1rem]">Description</h1>
        <p className="font-cabin text-xl text-fontGrey2 w-[57rem]">
          {item.detailedDescription[1]}
        </p>
        {/* second part of detailed */}
      </div>
      <Bagsidebar selectedItem={clickedItem} />
    </>
  );
};

export default ProductDetails;
