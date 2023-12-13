import React, { useEffect, useRef } from 'react'
import "./Professional.css"
import Footer from "../footer/Footer"
import CardFlip2 from './../card-temp/Card2';

const CourseContent = [
  {
    id: 1,
    course_name: 'Discovering Creativity',
    course_no: 'GN5002',
    desc: 'This course is designed to help students look at creativity in a pratical way. To help them understand that creativity can be used effectively in everyday life.',
    link:'https://drive.google.com/file/d/1sKqAKRGEm1mzPiQ3U099hCkfRhgusdoc/view?usp=drive_link',
  },
  {
    id: 2,
    course_name: `Nurturing Women's Leadership Potential`,
    course_no: 'GN5005',
    desc: 'This course empowers women pursuing ambitious careers by addressing internal barriers, enhancing leadership skills, self-confidence and eliminates biases.',
    link:'https://drive.google.com/file/d/1Wh_mWvF32d9itijl9I0NfcV6uoGJ6GCe/view?usp=drive_link',
  },
  {
    id: 3,
    course_name: `Let's Play to Learn`,
    course_no: 'GN6002',
    desc: 'This course aims to equip students with the skills to create educational tablestop and activity games to grasp game-based learning principles.',
    link:'https://drive.google.com/file/d/1qikL6zJDvmOanUoogWKifVCZMIY-TSFG/view?usp=drive_link',
  },
  {
    id: 4,
    course_name: 'Strategies for Personal Growth',
    course_no: 'GN6101',
    desc: 'This course focuses on diverse aspects crucial for corporate success beyond technical expertise, including financial acumen & emotional intelligence.',
    link:'https://drive.google.com/file/d/1xib8-We8s_6W6hSLhXjh1stYGR5EZBmo/view?usp=drive_link',
  },
  {
    id: 5,
    course_name: 'Cross Cultural Understanding',
    course_no: 'GN6107',
    desc: 'To help students learn different cultures and understand the differences in cultures to enable them to bridge the cultural divide and become global leaders.',
    link:'https://drive.google.com/file/d/1Uc5We2R8568eIcC_2_8_aRH6OJQ6Bas7/view?usp=drive_link',
  },
  {
    id: 6,
    course_name: 'The Purposeful Engineer',
    course_no: 'GN6110',
    desc: 'The very purpose of learning science is to unearth the solutions that science keeps hidden. Problem solving, design thinking, research methods, & networking with people.',
    link:'https://drive.google.com/file/d/1nv_phgNRwWjTqfgt8CwypZ_OTu5ewsxj/view?usp=drive_link',
  },
  {
    id: 7,
    course_name: 'Engineers - Saving Lives',
    course_no: 'GN6111',
    desc: 'This course is designed to empower young engineers by instilling a sense of purpose in their careers. It believes that engineering skills can solve many human problems.',
    link:'https://drive.google.com/file/d/1mGxByZQNCy52d9xYVPR_UWrtLEQiMkDN/view?usp=drive_link',
  },
  {
    id: 8,
    course_name: 'System Thinking for Engineers',
    course_no: 'GN6130',
    desc: 'This course promotes a holistic approach to understanding interconnected systems and their impact encouraging problem-solving by teaching habits of systems thinking.',
    link:'https://drive.google.com/file/d/1OqQgEFi1oGqWTTx3DuBAJLbP_qRWl2TU/view?usp=drive_link',
  },
  {
    id: 9,
    course_name: 'Inovative Entrepreneur-1 Customer Discovery',
    course_no: 'ID5101',
    desc: 'This course emphasizes customer discovery, highlighting the significance of grasping customer segments and their requirements for venture success.',
    link:'https://drive.google.com/file/d/1eAw-7KfHC1kyreU70BEfk4fGNw85oGH8/view?usp=drive_link',
  },
  {
    id: 10,
    course_name: 'Inovative Entrepreneur-2',
    course_no: 'ID5102',
    desc: 'This course is designed to empower young engineers by instilling a sense of purpose in their careers. It believes that engineering skills can solve many human problems.',
    link:'https://drive.google.com/file/d/1SSJyMWS7_kMTykH9daOItn1NCuL3kukt/view?usp=drive_link',
  },
  {
    id: 11,
    course_name: 'Introduction to Biomimicry',
    course_no: 'ID5200',
    desc: 'The course is designed to encourage students to explore the principles of nature & apply them to real life solutions and contextualise their design.',
    link:'https://drive.google.com/file/d/160SPsiS7-hMTZ0LiI5Hvr9ddxfK0pVZm/view?usp=drive_link',
  },
]

function Professional() {

  const cardsRef = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight - 100; // Adjust the offset as needed

        if (isVisible) {
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
        }
      });
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <h1 className='heading-proff'>Professional Development Courses</h1>
      <hr className='style14' />
      <div className='professional-card'>
        {CourseContent.map((item, index) => (
        <div className={`card-container ${item.id % 2 === 0 ? 'RtoL-card-2' : ''}`}> 
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`animate-card ${item.id % 2 === 0 ? '' : ''} `}
          >
          <CardFlip2
            num={item.id}
            course_name={item.course_name} 
            course_no={item.course_no} 
            course_desc={item.desc} 
            course_link={item.link}
          />
          </div>
        </div>
        ))}


        <div className="footer-pers">
            <Footer/>
        </div>
      </div>
    </>
  )
}

export default Professional