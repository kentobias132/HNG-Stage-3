import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// import ProductListing from "./components/ProductListing";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <div className="flex flex-1"> */}
      <Sidebar />
      {/* <ProductListing /> */}
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
