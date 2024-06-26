import React, { useState } from "react";
import "../css/ShippingAddressForm.css";

const ShippingAddressForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    suburb: "",
    zipCode: "",
    saveAddress: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Submitted:", formData);
  };

  return (
    <form className="shipping-form" onSubmit={handleSubmit}>
      <h2>Shipping Address Form</h2>
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Pearl Jonas"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="+27 672 4896"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="South Africa"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="state">State/Province:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Gauteng"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Brakpan"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="suburb">Suburb:</label>
        <input
          type="text"
          id="suburb"
          name="suburb"
          value={formData.suburb}
          onChange={handleChange}
          placeholder="Sheerwood"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="zipCode">ZIP Code:</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          placeholder="1541"
          required
        />
      </div>

      <div className="form-group save-address">
        <input
          type="checkbox"
          id="saveAddress"
          name="saveAddress"
          checked={formData.saveAddress}
          onChange={handleChange}
        />
        <label htmlFor="saveAddress">Save this as your default address</label>
      </div>

      <button type="submit" className="submit-btn">
        Add Address
      </button>
    </form>
  );
};

export default ShippingAddressForm;
