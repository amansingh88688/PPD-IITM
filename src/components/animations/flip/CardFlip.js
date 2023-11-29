import React from 'react';
import './CardFlip.css';

function CardFlip({imgSrc,frontText, backText}) {
    return (
        <div className="body" >

            <div className="container">
                <div className='card'>
                    <div className="front">
                        <img src={imgSrc} alt="" className="logo-hover" />
                        <p className="">{frontText}</p>
                    </div>
                    <div className="back">
                        <p className="">
                            {backText}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardFlip