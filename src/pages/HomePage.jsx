import React, { useState } from "react"; // Import React and useState hook
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom
import MenuSidebar from "../components/MenuSidebar";
import data from "../components/Data";
import bagadd from "../assets/Bag add.svg";
import "../css/Homepage.css";

const HomePage = () => {
  // State variables
  const [clickedItem, setClickedItem] = useState(null); // State for clicked item
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const navigate = useNavigate(); // Navigation hook from react-router-dom

  // Handle click on item
  const handleClick = (item) => {
    setClickedItem(item); // Set clicked item
  };

  // Handle click on product image
  const handleImageClick = (id) => {
    // Find clicked item by ID
    const clickedItem = data.find((item) => item.id === id);
    if (clickedItem) {
      // Navigate to item page with item details
      navigate(`/item/${clickedItem.id}`, { state: { item: clickedItem } });
    } else {
      console.error(`Item with ID ${id} not found.`); // Log error if item not found
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
      if (item.empty) return null; // Skip rendering if empty card
      return (
        <div key={index} className="item-card">
          <div
            className="product-image"
            onClick={() => handleImageClick(item.id)} // Handle click on product image
          >
            <img src={item.imageUrl} alt={item.title} className="product-img" />{" "}
            {/* Product image */}
          </div>
          <div className="content">
            <div className="item-name font-cabin text-xl font-bold">
              {item.title}
            </div>{" "}
            {/* Product title */}
            <div className="small-description font-cabin text-xl">
              {item.description}
            </div>{" "}
            {/* Product description */}
            <div className="action">
              <div className="price font-cabin ">
                {item.currency}
                {item.price} {/* Product price */}
              </div>
              <div className="view" onClick={() => handleClick(item)}>
                {" "}
                {/* Handle click on view */}
                <img src={bagadd} alt="Add to Bag" className="bag-icon" />{" "}
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
      <div className="content-frame">
        <div className="top-bar">
          <div className="input">
            <div className="label font-cabin text-fontGrey">Search Item</div>{" "}
            {/* Search input label */}
            <div className="input-field">
              <input
                type="text"
                placeholder="Apple Watch, Samsung S21, Macbook Pro, ..." // Placeholder text
                className="placeholder"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Handle search query change
              />
            </div>
          </div>
        </div>

        <div className="content-area">
          <div className="content-row">
            {renderFixedRow(filteredProducts.slice(0, 4))}{" "}
            {/* Render first row of products */}
          </div>
          <div className="content-row">
            {renderFixedRow(filteredProducts.slice(4, 8))}{" "}
            {/* Render second row of products */}
          </div>
        </div>
      </div>
      {/* Grey line to the right of content area */}
      <div className="grey-line"></div>{" "}
      {/* <SideBar2 selectedItem={clickedItem} /> Sidebar 2 component */}
    </>
  );
};

export default HomePage;
