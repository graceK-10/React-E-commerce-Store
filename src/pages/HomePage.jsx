import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuSidebar from "../components/MenuSidebar";
import Bagsidebar from "../components/Bagsidebar";
import data from "../components/Data";
import bagadd from "../Assets/Bag add.svg";
import "../index.css";

const HomePage = () => {
  // State variables
  const [clickedItem, setClickedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Handle click on item
  const handleClick = (item) => {
    setClickedItem(item);
  };

  // Handle click on product imag
  const handleImageClick = (id) => {
    const clickedItem = data.find((item) => item.id === id);
    if (clickedItem) {
      // Navigate to item page with item details
      navigate(`/item/${clickedItem.id}`, { state: { item: clickedItem } });
    } else {
      console.error(`Item with ID ${id} not found.`);
    }
  };

  // Filter products based on search query
  const filteredProducts = data.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.price.toString().includes(searchQuery)
  );

  // Render fixed row of product cards
  const renderFixedRow = (rowProducts) => {
    const fixedNumberOfCards = 4; // Number of cards per row
    const emptyCard = { empty: true }; // Placeholder for empty card

    // Generate row items with fixed number of cards
    const rowItems = Array.from({ length: fixedNumberOfCards }, (_, index) => {
      const product = rowProducts[index];
      return product ? product : emptyCard;
    });

    // Render each item card
    return rowItems.map((item, index) => {
      if (item.empty) return null;
      return (
        <div
          key={index}
          className="item-card flex flex-col justify-center items-start p-1 gap-2"
        >
          {/* Product image */}
          <div
            className="product-image flex justify-center items-center p-4 w-52 h-64 bg-white rounded-2xl"
            onClick={() => handleImageClick(item.id)}
          >
            <img src={item.imageUrl} alt={item.title} className="h-full" />{" "}
          </div>

          <div className="content flex flex-col justify-center items-start p-2 gap-2 bg-brown-900">
            <div className="item-name font-cabin text-xl font-bold w-52 h-6 text-black">
              {item.title}
            </div>{" "}
            {/* Product title */}
            <div className="small-description font-cabin text-lg w-28 h-5 text-gray-500">
              {item.description}
            </div>{" "}
            {/* Product description */}
            <div className="action flex justify-between items-center p-2 gap-2 w-44 h-12 text-black">
              <div className="price font-cabin w-72 h-6 text-xl text-black">
                {item.currency}
                {item.price} {/* Product price */}
              </div>
              <div
                className="view p-2 gap-2 bg-black flex justify-center items-center rounded-xl"
                onClick={() => handleClick(item)}
              >
                {" "}
                {/* Handle click on view */}
                <img
                  src={bagadd}
                  alt="Add to Bag"
                  className="bag-icon w-[3rem] h-5"
                />{" "}
                {/* Add to bag icon */}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  // Render Dashboard component
  return (
    <>
      <MenuSidebar /> {/* Sidebar component */}
      <div className="content-frame flex flex-col items-center p-2 gap-2 w-full md:w-[800px] lg:w-[1148px] mx-[8rem] ">
        <div className="top-bar flex flex-col items-start p-2 gap-2 w-[573px] md:w-[573px]">
          <div className="input flex flex-col justify-center items-start p-0 gap-2">
            <div className="label flex items-center text-lg gap-2 w-[8rem] h-5 font-cabin text-fontGrey">
              Search Item
            </div>{" "}
            {/* Search input label */}
            <div className="input-field flex items-center p-[8px,16px] gap-2 w-[557px] h-14 bg-white shadow-[0_4px_16px_rgba(26,31,22,0.15)] rounded-xl">
              <input
                type="text"
                placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
                className="placeholder w-[457px] text-xl p-2 gap-2 text-gray-600 ml-4 border border-white outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="content-area w-full">
          <div className="content-row flex justify-start items-center p-0 gap-8 w-full md:w-[600px] lg:w-[1145px] h-auto lg:h-[420px] flex-wrap">
            {renderFixedRow(filteredProducts.slice(0, 4))}{" "}
            {/* Render first row of products */}
          </div>
          <div className="content-row flex justify-start items-center p-0 gap-8 w-full md:w-[600px] lg:w-[1145px] h-auto lg:h-[420px] flex-wrap">
            {renderFixedRow(filteredProducts.slice(4, 8))}{" "}
            {/* Render second row of products */}
          </div>
        </div>
        {/* Grey line to the right of content area */}
        <div className="hidden lg:block fixed top-16 right-[22rem] w-[4px] h-[115%] bg-gray-500"></div>{" "}
      </div>
      <Bagsidebar selectedItem={clickedItem} />
    </>
  );
};

export default HomePage;
