import React from 'react'
import Cards from "../../components/cards/cards.jsx";
import Footer from "../../components/footer/footer.jsx";
import Navbar from "../../components/navbar/navbar.jsx";

import userImg from "../../assets/image 18.png"

const Contact = () => {
  return (
      <div className="container max-w-[1440px] w-full mx-auto">
        <Navbar/>

        <div className="w-full flex justify-between items-center gap-6 px-[50px] py-8">
          <div>
            <img src={userImg} alt="User image"/>
          </div>

          <div className="px-6 space-y-2">
            <h3 className="font-semibold text-[36px]">Hi there! My name is Roku and welcome to my learning journal.</h3>
            <p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to
              the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
          </div>
        </div>

        <div className="px-[130px] py-6 space-y-6">
          <h3 className="font-semibold text-[24px]">How I stay committed to learning</h3>

          <p className="text-[18px]">
            I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to
            create simple projects using what I learned or work new techniques into existing projects.</p>
          <p>
            While that was fun, I felt like it would be helpful to share what I was learning and most things about my
            journey with the world.
          </p>

          <h3 className="font-semibold">How I got started</h3>

          <p>
            I started simple and gradually grew my learning journal site. I would take notes about what I was
            learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write
            short summaries of what I learned using my own words.
          </p>

          <p>
            That helped me grok what I was learning, and I realized that posting my learning summaries was also
            helping others learn and stay motivated.
          </p>
        </div>

        <div>
          <p className="text-center font-semibold text-[24px]">Recent posts</p>
        </div>
        <Cards length={3}/>
        <Footer/>
      </div>
  )
}
export default Contact
