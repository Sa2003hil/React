// import React from "react";
import Chai from "./components/Chai";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import data from "./data/data.js"; // Import the data

function App() {
  return (
    <>
      <Navbar />
      <Chai />
      <Profile {...data} />
    </>
  );
}

export default App;
