import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="main-container bg">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div >
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
