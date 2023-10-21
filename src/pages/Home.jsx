import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";

const Home = () => {
  return (
    <>
      <div className="bg-[#fad6b98a]">
        <Header />
        <Hero />
      </div>

      <main>
        <MainContent />
      </main>
    </>
  );
};

export default Home;
