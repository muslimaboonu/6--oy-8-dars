import React from 'react'
import Navbar from "../../components/navbar/navbar.jsx";
import Hero from "../../components/hero/hero.jsx";
import Cards from "../../components/cards/cards.jsx";
import Footer from "../../components/footer/footer.jsx";

function Home() {
  return (
    <div className="container max-w-[1440px] w-full mx-auto">
      <Navbar />
      <Hero/>
      <Cards/>
      <div className="w-full flex justify-center items-center pb-6">
        <button className="font-semibold underline cursor-pointer">View more</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
