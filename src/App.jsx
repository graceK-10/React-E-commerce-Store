import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import Bag from "./components/Bag";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<ProductDetails />} />
        <Route path="/Bag" element={<Bag />} />
      </Routes>
    </Router>
  );
}

export default App;
