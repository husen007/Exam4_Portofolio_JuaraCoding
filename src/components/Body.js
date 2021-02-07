import React, { Component } from "react";
import Menu from "./Menu";
import Home from "./Home";
import Resume from "./Resume";
import Skill from "./Skill";
import Portofolio from "./Portofolio";
import Blog from "./Blog";
import Contact from "./Contact";
import BodyBlog from "./BodyBlog";

class Body extends Component {
  render() {
    return (
      <section id="body">
        <div className="container">
          <Menu />
          <Home />
          <Resume />
          <Skill />
          <Portofolio />
          <Blog />
          <BodyBlog />
          <Contact />
        </div>
      </section>
    );
  }
}

export default Body;
