import React from "react";
import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route path="">404 not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}
