import React from "react";
import Navbar from "./component/Navbar/navbar";
import Footer from "./component/Footer/footer";
import Intro from "./component/Intro/intro";
import Skills from "./component/Skills/skills";
import Works from "./component/Works/works";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
};

export default App;
