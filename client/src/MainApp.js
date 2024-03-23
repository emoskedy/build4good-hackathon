import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Client from "./Client";
import NavigateBar from "./Components/Navigate";
import Category from "./CategorizeItem";

function MainApp() {
  return (
    <Router>
      <NavigateBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/client" element={<Client />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
