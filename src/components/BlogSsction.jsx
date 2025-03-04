import React from 'react'
import logo1 from '../../public/logo1.jpg'
import Image from 'next/image'

const BlogSsction = () => {

  const cards = [
    {
      index: 0,
      image: logo1,
      heading: "Exploring the World",
      date: "12 July 2023",
      para: "Travel opens up new perspectives and enriches the soul with unforgettable experiences."
    },
    {
      index: 1,
      image: logo1,
      heading: "The Power of Education",
      date: "25 August 20",
      para: "Education is the key to unlocking a brighter future, empowering individuals worldwide."
    },
    {
      index: 2,
      image: logo1,
      heading: "Healthy Living Tips",
      date: "5 September 2023",
      para: "A balanced diet and regular exercise are essential for maintaining a healthy lifestyle."
    },
    {
      index: 3,
      image: logo1,
      heading: "Tech Innovations 2024",
      date: "18 October 2023",
      para: "The latest technological advancements are shaping the future with AI, automation, and more."
    },
    {
      index: 4,
      image: logo1,
      heading: "Mastering Time Management",
      date: "30 November 2023",
      para: "Effective time management boosts productivity and helps maintain a work-life balance."
    }
  ];
  
  return (
    <div className='bg-white'> 
    <div className='flex flex-wrap mx-8 gap-10 justify-start py-10 '>
      {cards.map((card) => (
        <div className='h-[30rem] w-[20rem] bg-slate-500 rounded-2xl overflow-hidden'
        key={card.index}
        >
        <Image
        src={card.image}
        height={200}
        width={200}
        className='w-full h-[15rem]'
        alt='notfound'
        />
        <div className='px-5 mt-5'>
  <h1 className='font-bold text-white text-xl  '>
   {card.heading}
  </h1>
   <h1 className='font-mono'>
   {card.date}
   </h1> 
   <p>
    {card.para}
   </p>
      </div>
      </div>
      ))}
    </div>

    
    
    </div>
  )
}

export default BlogSsction