import React from "react";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/About/skills";
import Works from "./components/works/works";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works/>
    </div>
  );
};

export default App;
