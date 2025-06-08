import React from 'react'
import bg from "../../assets/blog-image-hero.png"

const Hero = () => {
  return (
      <div className="max-w-[1440px] w-full mx-auto">
        <img className='w-full' src={bg} alt=""/>
        <div className="text-white -mt-[220px] w-2/3 px-8 space-y-2 pb-[100px]">
          <p>JULY 23, 2022</p>
          <h3 className="font-semibold text-[40px]">My new journey as a bootcamp student.</h3>
          <p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the
            Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
        </div>
      </div>
  )
}
export default Hero
