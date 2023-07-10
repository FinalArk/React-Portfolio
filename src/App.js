import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Experience from "./components/Experience";

export default function App() {
  return (
    <main className="site">
      <Navigation />
      <Home />  
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )};