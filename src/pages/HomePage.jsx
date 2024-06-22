import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import MenuSidebar from "../components/MenuSidebar";
import data from "../components/Data";
import bagadd from "../assets/Bag add.svg";
import { addToCart } from "../redux/actions/cartActions"; // Import your Redux action

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle search input change
  const handleHomeInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterProducts(query);
  };

  // Filter products based on search query
  const filterProducts = (query) => {
    if (query === "") {
      setFilteredItems(data);
    } else {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  // Handle click on product image
  const handleImageClick = (id) => {
    const clickedItem = data.find((item) => item.id === id);
    if (clickedItem) {
      navigate(`/item/${clickedItem.id}`, { state: { item: clickedItem } });
    } else {
      console.error(`Item with ID ${id} not found.`);
    }
  };

  // Handle add to cart
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <MenuSidebar />
      <div className="content-frame">
        <div className="top-bar">
          <div className="input">
            <div className="label font-cabin text-fontGrey">Search Item</div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
                className="placeholder"
                value={searchQuery}
                onChange={handleHomeInputChange}
              />
            </div>
          </div>
        </div>

        <div className="content-area">
          {filteredItems.length === 0 && <div>No products found</div>}
          {filteredItems.map((item) => (
            <div key={item.id} className="item-card">
              <div
                className="product-image"
                onClick={() => handleImageClick(item.id)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="product-img"
                />
              </div>
              <div className="content">
                <div className="item-name font-cabin text-xl font-bold">
                  {item.title}
                </div>
                <div className="small-description font-cabin text-xl">
                  {item.description}
                </div>
                <div className="action">
                  <div className="price font-cabin">
                    {item.currency}
                    {item.price}
                  </div>
                  <div className="view" onClick={() => handleAddToCart(item)}>
                    <img src={bagadd} alt="Add to Bag" className="bag-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grey-line"></div>
    </>
  );
};

export default HomePage;
