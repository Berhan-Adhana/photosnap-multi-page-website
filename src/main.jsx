import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const Home = React.lazy(() => import("./pages/Home.jsx"));
const Pricing = React.lazy(() => import("./pages/Pricing.jsx"));
const Stories = React.lazy(() => import("./pages/Stories.jsx"));
const Features = React.lazy(() => import("./pages/Features.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Suspense fallback={""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  </React.StrictMode>
);
