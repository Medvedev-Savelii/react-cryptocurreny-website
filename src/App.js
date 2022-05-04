import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Featured from "./components/featured/Featured";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
    </>
  );
}

export default App;
