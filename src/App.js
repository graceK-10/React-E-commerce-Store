import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPayment from "./Components/AddPayment";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/AddPayment" element={<AddPayment />} />
      </Routes>
      </Router>
  );
}

export default App;