import React from 'react'
import data from './CarouselData';
import './Carousel.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const Carousel2 = () => {


    return (
        <div className='wrapper'>
            <div className="slider">
                <div class="separator">
                    <div class="line"></div>
                    <h1>Feedback</h1>
                    <div class="line"></div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    // pagination={{ clickable: true }}
                >
                <div className="slide-track">
                        {data.map((item) => (
                        <SwiperSlide>
                            <div className="slide" key={item.id}>
                                <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
                                    <div className="upper-part">
                                        <img src={item.img} alt="" className="" />
                                        <h2 className="">{item.name},<br />IIT Madras</h2>
                                    </div>
                                    <hr className='style-one' />
                                    <div className="comment">
                                        <b>Course GN6120:</b><br /> {item.comment}
                                    </div>

                                </Link>
                            </div>
                        </SwiperSlide>
                        ))}


                    <div className="slide slide-final">
                        <Link to="https://padlet.com/play2learniitm/ppd-course-testimonials-h1g8ps4pejb8x1cv" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <hr className='style-one' />
                            <div className="comment-final">
                                <b style={{ color: "red", fontSize: "15px" }}>Read all feebacks here</b>
                            </div>
                            <hr className='style-one' />
                        </Link>
                    </div>

                </div>
                </Swiper>
            </div>
        </div>
    )
}



export default Carousel2
