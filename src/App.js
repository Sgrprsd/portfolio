import React from "react";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/about/skills";
import Works from "./components/works/works";
import Contact from "./components/contact/contact";

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
