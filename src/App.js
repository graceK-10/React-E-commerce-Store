import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShippingAddressForm from './ShippingAddressForm';
import AddPayment from './AddPayment';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/add-payment" element={<AddPayment />} />
        <Route path="/" element={<ShippingAddressForm />} />
      </Routes>
    </Router>
  );
};

export default App;
