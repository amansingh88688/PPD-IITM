import React, { useEffect, useRef } from 'react'
import './Personal.css';
import CardFlip from "../card-temp/Card"
import Footer from "../footer/Footer"

const CourseContent = [
  {
    id: 1,
    course_name: 'Self Awareness',
    course_no: 'GN5001',
    desc: `To enable students to understand and explore self-awareness, based on traditional Indian wisdom and modern approaches, & learn to find inspiration.`,
    link:'https://drive.google.com/file/d/1Q5yGK3fDZgGK_RmTlVIFsKWlgYHojHIk/view?usp=drive_link',
  },
  {
    id: 2,
    course_name: 'Discovering Creativity',
    course_no: 'GN5002',
    desc: 'This course is designed to help students look at creativity in a pratical way. To help them understand that creativity can be used effectively in everyday life.',
    link:'https://drive.google.com/file/d/1sKqAKRGEm1mzPiQ3U099hCkfRhgusdoc/view?usp=drive_link',
  },
  {
    id: 3,
    course_name: 'Integral Karma Yoga',
    course_no: 'GN6001',
    desc: 'To explore spiritual in work based on selected teachings from ancient Indian wisdom. The concepts of life and death, and the pursuit of self-realisation.',
    link:'https://drive.google.com/file/d/1lrUgEvz5IJxHO5fxOh0ZAKacasfH1ZM7/view?usp=drive_link',
  },
  {
    id: 4,
    course_name: `Let's Play to Learn`,
    course_no: 'GN6002',
    desc: 'This course aims to equip students with the skills to create educational tablestop and activity games to grasp game-based learning principles.',
    link:'https://drive.google.com/file/d/1qikL6zJDvmOanUoogWKifVCZMIY-TSFG/view?usp=drive_link',
  },
  {
    id: 5,
    course_name: 'Happines, Habits & Success',
    course_no: 'GN6106',
    desc: 'To raise awareness and learn a variety of tools available to understand oneself and the need for development through a scientific approach.',
    link:'https://drive.google.com/file/d/115DQRcj_fsAp9OS_Xw2JTy-dRkb7Rye1/view?usp=drive_link',
  },
  {
    id: 6,
    course_name: 'Fostering Enriching Relationships',
    course_no: 'GN6109',
    desc: 'To put emphasis on relationships as central points  in our existence. Higher incidence of social isolation and lonliness is a cause of concern.',
    link:'https://drive.google.com/file/d/1PD-GNqz_f5C3qY74Nr8Yr8oUEOifjs6H/view?usp=drive_link',
  },
  {
    id: 7,
    course_name: 'Tools For Life',
    course_no: 'GN6112',
    desc: 'Focus on enhancing physical, emotional, mental, and spiritual health of students. Introduction of knowledge and tools to live an enriching life.',
    link:'https://drive.google.com/file/d/11Mo96SGirkzVr2cYmJrBEbW8xfDc6g6I/view?usp=drive_link',
  },
  {
    id: 8,
    course_name: 'The Competition Mindset',
    course_no: 'GN6120',
    desc: 'The objective of the course is help cultivate a winning mindset, invest in self improve productivity & performance, balance their practice with academics.',
    link:'https://drive.google.com/file/d/1DhhBW4lLAipjqQKNaqxjkLhK9uOYU0Po/view?usp=drive_link',
  },
]

function Personal() {
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
      <h1 className='heading-pers'>Personal Development Courses</h1>
      <hr className='style14' />
      <div className='personal-card'>
        {CourseContent.map((item, index) => (
          <div className={`card-container ${item.id % 2 === 0 ? 'RtoL-card' : ''}`}> 
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`animate-card ${item.id % 2 === 0 ? '' : ''} `}
            >
              <CardFlip
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
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Personal;