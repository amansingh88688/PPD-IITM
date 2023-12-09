import React from 'react'
import "./Professional.css"
import Footer from "../footer/Footer"
import CardFlip2 from './../card-temp/Card2';

const CourseContent = [
  {
    id: 1,
    course_name: 'Discovering Creativity',
    course_no: 'GN5002',
    desc: 'This course is designed to help students look at creativity in a pratical way. To help them understand that creativity can be used effectively in everyday life.',
  },
  {
    id: 2,
    course_name: `Nurturing Women's Leadership Potential`,
    course_no: 'GN5005',
    desc: 'This course empowers women pursuing ambitious careers by addressing internal barriers, enhancing leadership skills, self-confidence and eliminates biases.',
  },
  {
    id: 3,
    course_name: `Let's Play to Learn`,
    course_no: 'GN6002',
    desc: 'This course aims to equip students with the skills to create educational tablestop and activity games to grasp game-based learning principles.',
  },
  {
    id: 4,
    course_name: 'Strategies for Personal Growth',
    course_no: 'GN6101',
    desc: 'This course focuses on diverse aspects crucial for corporate success beyond technical expertise, including financial acumen & emotional intelligence.',
  },
  {
    id: 5,
    course_name: 'Cross Cultural Understanding',
    course_no: 'GN6107',
    desc: '',
  },
  {
    id: 6,
    course_name: 'The Purposeful Engineer',
    course_no: 'GN6110',
    desc: 'The very purpose of learning science is to unearth the solutions that science keeps hidden. Problem solving, design thinking, research methods, & networking with people.',
  },
  {
    id: 7,
    course_name: 'Engineers - Saving Lives',
    course_no: 'GN6111',
    desc: 'This course is designed to empower young engineers by instilling a sense of purpose in their careers. It believes that engineering skills can solve many human problems.',
  },
  {
    id: 8,
    course_name: 'System Thinking for Engineers',
    course_no: 'GN6130',
    desc: 'This course promotes a holistic approach to understanding interconnected systems and their impact encouraging problem-solving by teaching habits of systems thinking.',
  },
  {
    id: 9,
    course_name: 'Inovative Entrepreneur-1 Customer Discovery',
    course_no: 'ID5101',
    desc: 'This course emphasizes customer discovery, highlighting the significance of grasping customer segments and their requirements for venture success.',
  },
  {
    id: 10,
    course_name: 'Inovative Entrepreneur-2',
    course_no: 'ID5102',
    desc: 'This course is designed to empower young engineers by instilling a sense of purpose in their careers. It believes that engineering skills can solve many human problems.',
  },
  {
    id: 11,
    course_name: 'Introduction to Biomimicry',
    course_no: 'ID5200',
    desc: 'The course is designed to encourage students to explore the principles of nature & apply them to real life solutions and contextualise their design.',
  },
]

function Professional() {
  return (
    <div className='professional-card'>
      {/* <img src={course} alt="" className="course" /> */}
      {CourseContent.map((item) => (
      <CardFlip2
        key={item.id} 
        num={item.id}
        course_name={item.course_name} 
        course_no={item.course_no} 
        course_desc={item.desc} 
        className={item.id%2===0 ? 'RtoL-card-2':''}
      />
      ))}
      <div className="footer-pers">
          <Footer/>
      </div>
    </div>
  )
}

export default Professional