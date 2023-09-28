import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  //   Testimonials,
  Blog,
  Education,
  //   Experience,
  Contacts,
  Projects,
  //   Services,
  Achievement,
  Experience,
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      
      <Projects />
      {/* <Achievement /> */}
      {/* <Services /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
