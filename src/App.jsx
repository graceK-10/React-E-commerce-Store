import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import CheckOut from "./pages/CheckOut/CheckOut"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<ProductDetails />} />
        <Route path="/Checkout" element={<CheckOut />} />
      </Routes>
    </Router>
  );
}

export default App;
