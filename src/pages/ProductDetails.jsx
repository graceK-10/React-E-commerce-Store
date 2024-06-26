import React, { useState } from "react";
import MenuSidebar from "../components/MenuSidebar";
import Bagsidebar from "../components/Bagsidebar";
import { Link } from "react-router-dom";
import "../index.css";
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
      <Link
        to="/"
        className="back-link text-lg block no-underline text-[#1a1f16] font-bold absolute left-[11rem] top-[50px]"
      >
        &lt;&nbsp;&nbsp;Back
      </Link>
      <div className="product-list ml-[10rem] mr-[25rem] relative font-sans">
        {/* Render item details */}
        <div className="product" key={item.id}>
          {/* Render images */}
          <div className="Container flex justify-between w-full h-auto">
            <div className="smallImg flex flex-col gap-[5px] ml-[1rem]">
              {/* Render small images */}
              <img
                className="smallImage w-[4rem] h-[58px] mb-[10px] rounded-[10px] object-cover"
                src={item.imageUrl}
                alt={item.title}
              />
              <img
                className="smallImage w-[4rem] h-[58px] mb-[10px] rounded-[10px] object-cover"
                src={item.imageUrl}
                alt={item.title}
              />
              <img
                className="smallImage w-[4rem] h-[58px] mb-[10px] rounded-[10px] object-cover"
                src={item.imageUrl}
                alt={item.title}
              />
            </div>
            <div className="bigImg">
              {/* Render big image */}
              <img
                className="bigImage ml-9 rounded-[11px] object-cover w-[30rem] h-[20rem]"
                src={item.imageUrl}
                alt={item.title}
              />
            </div>
          </div>
          <div className="product-details font-cabin font-bold ml-[5rem]">
            <h1 className="text-6xl mt-[1px]">{item.title}</h1>
            <h3 className="text-fontGrey text-3xl mt-5">{item.description}</h3>
            <img className="stars my-2" src={stars} alt="" />
            <p className="font-cabin text-2xl">
              {item.currency}
              {item.price}
            </p>
            <p className="product-des font-cabin text-xl w-[96%]">
              {item.detailedDescription[0]}
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center py-[7px] px-[20px] gap-[8px] bg-[#1a1f16] rounded-[15px] no-underline text-white cursor-pointer w-[12%] ml-[59rem] mt-[30px]"
        onClick={handleClick}
      >
        <img src={cart} alt="Logo" className="cart-icon h-[20px]" />
        <span className="text-[20px]">Add to Bag</span>
      </div>
      {/* Vertical Grey line to the right of content area */}
      <div className="absolute top-[3rem] right-[22rem] w-[4px] h-[110%] bg-gray-500"></div>{" "}
      {/* Horizontal Grey line to the right of content area */}
      <div className="grey-line2 absolute top-[34rem] right-[29%] w-[60%] h-[3px] bg-gray-500 rounded-[10%]"></div>
      <div className="paragraph ml-[11rem] mr-[25rem] font-sans">
        <h1 className="font-cabin text-4xl mt-[5rem] mb-[1rem]">Description</h1>
        <p className="font-cabin text-xl text-fontGrey2 w-[57rem]">
          {item.detailedDescription[1]}
        </p>
      </div>
      <Bagsidebar selectedItem={clickedItem} />
    </>
  );
};

export default ProductDetails;
