import React from 'react'
import './Card2.css';

function Card2({num, className, course_name, course_no, course_desc, course_link}) {
  console.log(num);
return (
  <div className={`card-temp-2 ${className || ''}`}>
      <div className="sq-small-2"></div>
      <div className="sq-med-2"></div>
      <div className="sq-lar-2"></div>
      <div className={num%2 === 0 ? 'rectangle-1-2 mirror-text-2':'rectangle-1-2'}>
          <a href={course_link} target="_blank" rel="noopener noreferrer" class="course-desc-2">{course_desc} <span className='view-more'>view more</span></a> 
      </div>
      <div className={num%2 === 0 ? 'rectangle-2-2 mirror-text-2':'rectangle-2-2'}>
          <div className={`course-name-2 ${(num===2 || num===9) ? 'reduce-size':''}`}>{course_name}</div>
          <div className={`course-name-2 course-no-2 ${(num===2 || num===9) ? 'reduce-size':''}`}>{course_no}</div>
      </div>
  </div>
)
}

export default Card2

