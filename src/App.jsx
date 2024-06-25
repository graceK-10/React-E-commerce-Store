import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import Bag from "./components/Bag";
import CheckOut from "./pages/CheckOut/CheckOut";
import ShippingAddressForm from "./components/ShippingAddressForm";
import AddPayment from "./components/AddPayment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<ProductDetails />} />
        <Route path="/Bag" element={<Bag />} />
        <Route path="/Checkout" element={<CheckOut />} />
        <Route path="/AddPayment" element={<AddPayment />} />
        <Route path="/ShippingAddressForm" element={<ShippingAddressForm />} />
      </Routes>
    </Router>
  );
}

export default App;
