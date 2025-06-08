import React from 'react'
import img from "../../assets/blog-image-06.png"
import img2 from "../../assets/blog-image-04.png"
import img3 from "../../assets/blog-image-05.png"
import img4 from "../../assets/blog-image-03.png"
import img5 from "../../assets/blog-image-01.png"
import img6 from "../../assets/blog-image-02.png"

const Cards = ({length}) => {

  const cards = [
    {
      id: "1",
      date: "JULY 23, 2022",
      img: img,
      title: "Blog one",
      description: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
      id: "2",
      date: "JULY 23, 2022",
      img: img2,
      title: "Blog one",
      description: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
      id: "3",
      date: "JULY 23, 2022",
      img: img3,
      title: "Blog one",
      description: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
      id: "4",
      date: "JULY 23, 2022",
      img: img4,
      title: "Blog one",
      description: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
      id: "5",
      date: "JULY 23, 2022",
      img: img5,
      title: "Blog one",
      description: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
      id: "6",
      date: "JULY 23, 2022",
      img: img6,
      title: "Blog one",
      description: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    }
  ]

  return (
      <div className="container max-w-[1440px] w-full mx-auto grid grid-cols-3 gap-4 px-10 py-6">
        {
          length === 3 ? cards.slice(3).map((card) => (
              <div key={card.id}>
                <div>
                  <img src={card.img} alt=""/>
                </div>
                <div className="py-4 space-y-2">
                  <p>{card.date}</p>
                  <h3 className="text-[24px] font-semibold">{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
          )) : cards.map((card) => (
              <div key={card.id}>
                <div>
                  <img src={card.img} alt=""/>
                </div>
                <div className="py-4 space-y-2">
                  <p>{card.date}</p>
                  <h3 className="text-[24px] font-semibold">{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
          ))
        }
      </div>
  )
}
export default Cards
