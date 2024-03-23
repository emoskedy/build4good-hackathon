import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Client from "./Client";
import NavigateBar from "./Components/Navigate";
import Category from "./CategorizeItem";
import NewApp from "./NewApp";

function MainApp() {
  return (
    <Router>
      <NavigateBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/client" element={<Client />} />
        <Route path="/admin" element={<NewApp />} />
        <Route path="/appetizer" element={<Category tags="Appetizers" />} />
        <Route path="/rice" element={<Category tags="Rice" />} />
        <Route path="/soups" element={<Category tags="Soups" />} />
        <Route path="/thainoodle" element={<Category tags="Thai Noodles" />} />
        <Route path="/thaientrees" element={<Category tags="Thai Entrees" />} />
        <Route path="/bbq" element={<Category tags="BBQ (w/ rice)" />} />
        <Route
          path="/pinoynoodle"
          element={<Category tags="Pinoy Noodles" />}
        />
        <Route
          path="/signaturepinoyentrees"
          element={<Category tags="Signature Pinoy Entrees" />}
        />
        <Route
          path="/pinoyentrees"
          element={<Category tags="Pinoy Entrees" />}
        />
        <Route path="/salads" element={<Category tags="Salads" />} />
        <Route
          path="/seafooddishes"
          element={<Category tags="Seafood Dishes" />}
        />
        <Route path="/beverages" element={<Category tags="Beverages" />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
