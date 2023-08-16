import React from "react";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Works from "./components/works/works";
import Contact from "./components/contact/contact";
import Skills from "./components/About/skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills/>
      <Works/>
      <Contact />
    </div>
  );
};

export default App;
