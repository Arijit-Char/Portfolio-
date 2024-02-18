import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
export default function Home() {
  return (
    <>
      <div className="App">
        <section className="Navbar" id="Home">
          <Navbar />
          <Hero />
        </section>
      </div>
    </>
  );
}
