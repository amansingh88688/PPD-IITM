import React from 'react'
import './Personal.css';
import CardFlip from "../card-temp/Card"
import Footer from "../footer/Footer"

const CourseContent = [
  {
    id: 1,
    course_name: 'Self Awareness',
    course_no: 'GN5001',
    desc: 'To enable students to understand and explore self-awareness, based on traditional Indian wisdom and modern approaches, & learn to find inspiration.',
  },
  {
    id: 2,
    course_name: 'Discovering Creativity',
    course_no: 'GN5002',
    desc: 'This course is designed to help students look at creativity in a pratical way. To help them understand that creativity can be used effectively in everyday life.',
  },
  {
    id: 3,
    course_name: 'Integral Karma Yoga',
    course_no: 'GN6001',
    desc: 'To explore spiritual in work based on selected teachings from ancient Indian wisdom. The concepts of life and death, and the pursuit of self-realisation.',
  },
  {
    id: 4,
    course_name: `Let's Play to Learn`,
    course_no: 'GN6002',
    desc: 'This course aims to equip students with the skills to create educational tablestop and activity games to grasp game-based learning principles.',
  },
  {
    id: 5,
    course_name: 'Happines, Habits & Success',
    course_no: 'GN6106',
    desc: 'To raise awareness and learn a variety of tools available to understand oneself and the need for development through a scientific approach.',
  },
  {
    id: 6,
    course_name: 'Fostering Enriching Relationships',
    course_no: 'GN6109',
    desc: 'To put emphasis on relationships as central points  in our existence. Higher incidence of social isolation and lonliness is a cause of concern.',
  },
  {
    id: 7,
    course_name: 'Tools For Life',
    course_no: 'GN6112',
    desc: 'To enable students to understand and explore self-awareness, based on traditional Indian wisdom and modern approaches, & learn to find inspiration',
  },
  {
    id: 8,
    course_name: 'The Competition Mindset',
    course_no: 'GN6120',
    desc: 'The objective of the course is help cultivate a winning mindset, invest in self improve productivity & performance, balance their practice with academics.',
  },
]

function Personal () {
  return (
    <div className='personal-card'>
      {/* <img src={course} alt="" className="course" /> */}
      {CourseContent.map((item) => (
      <CardFlip
        key={item.id} 
        num={item.id}
        course_name={item.course_name} 
        course_no={item.course_no} 
        course_desc={item.desc} 
        className={item.id%2===0 ? 'RtoL-card':''}
      />
      ))}
      <div className="footer-pers">
          <Footer/>
      </div>
    </div>
  )
}

export default Personal