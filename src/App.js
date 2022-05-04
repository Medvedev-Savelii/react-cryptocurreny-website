import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Featured from "./components/featured/Featured";
import Signup from "./components/signup/Signup";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
	  <Signup />
	  <Footer />
    </>
  );
}

export default App;
