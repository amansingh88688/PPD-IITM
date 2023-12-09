import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import home_ban1 from "../../images/home_ban1.png";
import home_ban2 from "../../images/home_ban2.png";
import home_ban3 from "../../images/home_ban3.png";
import home_banner1 from "../../images/home_banner1.png";
import hover_img1 from "../../images/hover_img1.jpg";
import hover_img2 from "../../images/hover_img2.jpg";
import hover_img3 from "../../images/hover_img3.jpg";
import hover_img4 from "../../images/hover_img4.jpg";
import hover_img5 from "../../images/hover_img5.jpg";
import metrics_tree from '../../images/metrics_tree.png';
import metrics_tree_filled from '../../images/metrics_tree_filled.png';
import personal_course from "../../images/personal_course.png";
import professional_course from "../../images/professional_course.png";
import Histogram1 from "../../images/Histogram1.png";
import Histogram2 from "../../images/Histogram2.png";
import ProgramSpecific3 from "../../images/ProgramSpecific3.png";
import kpi_card_1_front from "../../images/kpi_card_1_front.png"
import kpi_card_1_back from "../../images/kpi_card_1_back.png"
import kpi_card_2_front from "../../images/kpi_card_2_front.png"
import kpi_card_2_back from "../../images/kpi_card_2_back.png"
import Carousel from '../animations/carousel/Carousel';
import CardFlip from '../animations/flip/CardFlip';
import ImgFlip from '../animations/flip/ImgFlip';
import Footer from "../footer/Footer";
import "./Homepage.css";

const cardFlipContent = [
    {
        id: 1,
        imgSrc: hover_img1,
        frontText: "Nurturing student growth, we focus on develop...",
        backText: "Nurturing student growth, we focus on developing—skills for adulthood, fostering resilience, compassion, and empowerment, preparing them for life's challenges"
    },
    {
        id: 2,
        imgSrc: hover_img2,
        frontText: "Elevate with courses blending personal and p...",
        backText: "Elevate with courses blending personal and professional development—unlock perfection and growth for a thriving journey of self and career"
    },
    {
        id: 3,
        imgSrc: hover_img3,
        frontText: "Unleash your potential in both personal and profes...",
        backText: "Unleash your potential in both personal and professional realms—cultivating growth, success, and fulfillment on your unique developmental journey"
    },
    {
        id: 4,
        imgSrc: hover_img4,
        frontText: "To gain insights into professional etiquette an...",
        backText: "To gain insights into professional etiquette and gender diversity, to make them well-rounded and independent individuals in society."
    },
    {
        id: 5,
        imgSrc: hover_img5,
        frontText: "These courses foster critical thinking, adapta...",
        backText: "These courses foster critical thinking, adaptability, and confidence, preparing students for a competitive job market and lifelong learning."
    }
];

const imageFlipContent = [
    {
        id: 1,
        frontImage: kpi_card_1_back,
        backImage: kpi_card_1_front
    },
    {
        id: 2,
        frontImage: kpi_card_2_front,
        backImage: kpi_card_2_back
    }
];


function Homepage() {

    const [text] = useTypewriter({
        words: ['Personal', 'Professional'],
        loop: {},
        typeSpeed: 80,
        delaySpeed: 1000,
        deleteSpeed: 100,
    });

    const [counter1On, setCounter1On] = useState(false);
    const [counter2On, setCounter2On] = useState(false);


    return (
        <div className='main'>
            <div className='first-section'>
                <div className='first-col'>
                    <h1 className='main-heading'>
                        <span className='moving-text'>{text}</span><Cursor /><br /> Development
                    </h1>
                    <p className="main-content">
                        "Intertwining <span className='personal-text'>personal</span> and <span className='profess-text'>professional</span> development unlocks your potential. Personal growth nurtures self-awareness and emotional intelligence, while professional development fuels your career. Balance empowers confident, successful living."
                    </p>
                </div >
                <div className='second-col'>
                    <img src={home_banner1} alt="" className="banner1" />
                </div>
            </div>

                 

            <div className='second-section'>
                <h1 className="second-heading">
                    Purpose of the minor stream in Personal and Professional Development
                </h1>
                <div className="hover-card">
                    {cardFlipContent.map((item) => <CardFlip key={item.id} imgSrc={item.imgSrc} frontText={item.frontText} backText={item.backText} />)}
                </div>
            </div>


            <div className="seventh-section">
                <div className="" id="child1">
                    <p className="">
                        On one hand, personal development nurtures <b>values, character, and essential life skills, fostering emotional intelligence, resilience, empathy, and self-awareness</b>, all of which cast a profound impact on adult life. Personal growth is not an optional supplement but an essential foundation for a balanced and fulfilling life. Simultaneously, professional development equips <b>students with the abilities, knowledge, and mindset necessary for success in their chosen fields</b>. It encompasses academic progress, hands-on training, and exposure to real-world situations, facilitating a seamless transition from the classroom to the workplace. It includes hands-on experience and solving real engineering problems which helps students bridge the gap between what they learn in school and what they need in their careers.
                    </p>
                </div>
                <div className="" id="child2">
                    <img src={home_ban1} alt="" className="" />
                </div>
            </div>


            <div className="eighth-section">
                <div className="">
                    <img src={home_ban2} alt="" class="" />
                </div>
                <div className="">
                    <p className="">
                        Personal and Professional development courses are specifically tailored to support engineering students in their personal and professional growth during their college years, complementing their technical education. These courses cover a wide range of topics, including <b>life skills, self-awareness, creativity, leadership, and holistic perspectives</b>, equipping engineering students with practical knowledge and skills beyond traditional subjects. They enhance <b>soft skills, personal growth, adaptability, problem-solving, networking, emotional resilience, and holistic well-being</b>. Graduates also gain insights into professional etiquette and gender diversity, making them well-rounded and independent individuals who are better prepared for the unique challenges that engineering careers can present.
                    </p>
                </div>
            </div>


            <div className="ninth-section">
                <div className="" id="child1">
                    <p className="">
                        These Personal and Professional Development courses have made a significant impact by <b>helping students since 2010.</b> With over <b>23,700 registrations,</b> they have provided valuable opportunities for personal and professional growth. Offering a selection of <b>17 courses</b>, these programs have been instrumental in equipping individuals with essential skills. Notably, they have benefitted from the expertise of <b>numerous alumni who have served as course facilitators, sharing practical insights and experiences to guide current participants.</b> This collaborative approach, engaging a diverse participant base and experienced alumni facilitators, has played a crucial role in how these courses have positively contributed to students' personal and professional development.
                    </p>
                </div>
                <div className="" id="child2">
                    <img src={home_ban3} alt="" className="" />
                </div>
            </div>



            <div className="third-section">
            <img src={metrics_tree} alt="" className="empty" />
            <img src={metrics_tree_filled} alt="" className="filled" />
                <span className="registration">
                    <h1 className='number1'>
                        <ScrollTrigger onEnter={() => setCounter1On(true)} onExit={() => setCounter1On(false)}>
                            {counter1On && <CountUp start={0} end={18000} duration={2} delay={0} />}+
                        </ScrollTrigger>
                    </h1>
                    <span className='regis'>Registered <br/>Students</span>
                </span>
                <span className="courses">
                    <h1 className='number2'>
                        <ScrollTrigger onEnter={() => setCounter1On(true)} onExit={() => setCounter1On(false)}>
                            {counter1On && <CountUp start={0} end={19} duration={3} delay={0} />}
                        </ScrollTrigger>
                    </h1>
                    <span className='course'>Courses</span>
                </span>
                <span className="baskets">
                    <h1 className='number3'>
                        <ScrollTrigger onEnter={() => setCounter1On(true)} onExit={() => setCounter1On(false)}>
                            {counter1On && <CountUp start={0} end={2} duration={1} delay={0} />}
                        </ScrollTrigger>
                    </h1>
                    <span className='basket'>Baskets</span>
                </span>
                <span className="industry-exp">
                    <h1 className='number4'>
                        <ScrollTrigger onEnter={() => setCounter2On(true)} onExit={() => setCounter2On(false)}>
                            {counter2On && <CountUp start={0} end={10} duration={2} delay={0} />}+
                        </ScrollTrigger>
                    </h1>
                    <span className='industry'>Industry <br/>Experts</span>
                </span>
                <span className="since-year">
                    <span className='since'>Since</span>
                    <h1 className='number5'>
                        2010
                    </h1>
                </span>
                <span className="alumnis">
                    <h1 className='number6'>
                        <ScrollTrigger onEnter={() => setCounter2On(true)} onExit={() => setCounter2On(false)}>
                            {counter2On && <CountUp start={0} end={30} duration={2} delay={0} />}+
                        </ScrollTrigger>
                    </h1>
                    <span className='alumni'>Alumni</span>
                </span>
            </div>

            <div className='twelth-section'>
                {imageFlipContent.map((item) => <ImgFlip key={item.id} imgFront={item.frontImage} imgBack={item.backImage} />)}
            </div>


            <div className="fourth-section">
                <img src={personal_course} alt="" className="" />
            </div>
            <div className="tenth-section">
                <img src={Histogram1} alt="" class="" />
            </div>
            <div className="fourth-section fourth-section2">
                <img src={professional_course} alt="" className="" />
            </div>
            <div className="tenth-section tenth-section2">
                <img src={Histogram2} alt="" class="" />
            </div>
            <div className="eleventh-section">
                <img src={ProgramSpecific3} alt="" class="" />
            </div>


            <div className="fifth-section">
                <Carousel />
            </div>
            <div className='sixth-section last-section footer-section'>
                <Footer />
            </div>

        </div>
    )
}

export default Homepage