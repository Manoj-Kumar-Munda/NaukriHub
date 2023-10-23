import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";
import MainContent from "../components/MainContent";
import Divider from "../components/Divider";

const Home = () => {
  return (
    <>
      <div className="bg-[#fad6b98a]">
        <Header />
        <Hero />
        <Divider />
      </div>
      

      <main>
        <MainContent />
      </main>
    </>
  );
};

export default Home;
