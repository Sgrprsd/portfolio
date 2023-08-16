import React from "react";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/About/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
};

export default App;
