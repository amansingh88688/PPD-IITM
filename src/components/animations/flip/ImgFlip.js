import React from 'react';
import './ImgFlip.css';

function ImgFlip({imgFront, imgBack}) {
    return (
        <div className="body2" >

            <div className="container2">
                <div className='card2'>
                    <div className="front2">
                        <img src={imgFront} alt="" className="logo-hover2" />
                    </div>
                    <div className="back2">
                        <img src={imgBack} alt="" className="logo-hover2" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ImgFlip