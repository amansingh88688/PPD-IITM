import React from 'react'
import './Card.css';

function Card({num, className, course_name, course_no, course_desc}) {
    console.log(num);
  return (
    <div className={`card-temp ${className || ''}`}>
        <div className="sq-small"></div>
        <div className="sq-med"></div>
        <div className="sq-lar"></div>
        <div className={num%2 === 0 ? 'rectangle-1 mirror-text':'rectangle-1'}>
            <div className='course-desc'>{course_desc}</div>
        </div>
        <div className={num%2 === 0 ? 'rectangle-2 mirror-text':'rectangle-2'}>
            <div className='course-name'>{course_name}</div>
            <div className='course-name course-no'>{course_no}</div>
        </div>
    </div>
  )
}

export default Card

