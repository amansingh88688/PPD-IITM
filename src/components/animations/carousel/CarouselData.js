import React from "react";
import aman from "../../../images/aman.jpg";
import dummy_img from "../../../images/dummy_img.jpg";

const data = [
    {
        id: 1,
        img: dummy_img,
        name: 'Harshitha Sri',
        comment: (
            <React.Fragment>
                {`“Very Engaging and creative course. The exercises and in-class activities help in thinking out of the box and use games to educate students more effectively, `}
                <b style={{ color: "red", fontSize: "12px" }}>read more...</b>
            </React.Fragment>
        ),
        link: 'https://padlet.com/play2learniitm/ppd-course-testimonials-h1g8ps4pejb8x1cv/wish/2733879556',
    },
    {
        id: 2,
        img: dummy_img,
        name: 'Eluru Sai Venkat',
        comment: (
            <React.Fragment>
                {"“I knew the concept beforehand but never implemented this course to help me with implementing ideas, "}
                <b style={{ color: "red", fontSize: "12px" }}>read more...</b>
            </React.Fragment>
        ),
        link: 'https://padlet.com/play2learniitm/ppd-course-testimonials-h1g8ps4pejb8x1cv/wish/2733885259'
    },
    {
        id: 3,
        img: aman,
        name: 'Aman Singh',
        comment: (
            <React.Fragment>
                {`“I am really happy that I took "Happiness, Habits and Success" course. This course taught me a lot of things which are beyond my thinking and incredible too. This course taught me the actual definition of success,`}
                <b style={{ color: "red", fontSize: "12px" }}>read more...</b>
            </React.Fragment>
        ),
        link: `https://padlet.com/play2learniitm/ppd-course-testimonials-h1g8ps4pejb8x1cv/wish/2766571464`,
    },
    {
        id: 4,
        img: `https://v1.padlet.pics/1/image.webp?t=c_limit%2Cdpr_2%2Ch_707%2Cw_1060&url=https%3A%2F%2Fstorage.googleapis.com%2Fpadlet-uploads%2F2196597595%2Fedecca015405a5ae19005346188f6b41%2F244A8483_1.JPG%3FExpires%3D1701672722%26GoogleAccessId%3D778043051564-q79bsd8mc40b0bl82ikkrtc3jdofe4dg%2540developer.gserviceaccount.com%26Signature%3DXRwLkKtX1I4AV1aF53rrk%252FzaBZ%252BKpjhJOX5n3i%252BARbmDM61m29Nsa8A%252BpWqu1oreLJ4W8OrreV0XOBSIvNhFBskrv7DbR%252FvShkMB2TB%252Bvbw1%252BgTsY5DGHMEF0T4Jv%252B55rCPbxGmIgI%252B8mStDuvqjyKwWzcz3GyQE6wxscp3rB0g%253D%26original-url%3Dhttps%253A%252F%252Fpadlet-uploads.storage.googleapis.com%252F2196597595%252Fedecca015405a5ae19005346188f6b41%252F244A8483_1.JPG`,
        name: 'Ravish Kumar',
        comment: (
            <React.Fragment>
                {`I recently completed the 'Habits, Happiness, and Success' course, and I must say it was truly incredible. The course beautifully integrated mindfulness, meditation, and journaling, providing a holistic approach to self-improvement,`}
                <b style={{ color: "red", fontSize: "12px" }}>read more...</b>
            </React.Fragment>
        ),
        link: 'https://padlet.com/play2learniitm/ppd-course-testimonials-h1g8ps4pejb8x1cv/wish/2766159407',
    },
    {
        id: 5,
        img: 'https://www.superprof.co.uk/images/teachers/teacher-home-sophomore-iit-madras-can-mentor-the-student-teach-physics-and-provide-guidance-with-effective-communication-guide-the.jpg',
        name: 'Gayathri Shrushti',
        comment: (
            <React.Fragment>
                {`“I loved watching Kung Fu Panda. Besides, it did instill a sense that life is bigger than acads and school as how that last 17 years of life told us it was. It was like a stepping stone realizing we've arrived at adulthood,`}
                <b style={{ color: "red", fontSize: "12px" }}>read more...</b>
            </React.Fragment>
        ),
        link: 'https://padlet.com/play2learniitm/ppd-course-testimonials-h1g8ps4pejb8x1cv/wish/2733893609',
    },
    {
        id: 6,
        img: dummy_img,
        name: 'Nikitaa G',
        comment: (
            <React.Fragment>
                {`“A fun-filled course and I had great learnings from all the 3 teachers. It was a small class and enabled us to share freely and collaborate with one another,`}
                <b style={{ color: "red", fontSize: "12px" }}>read more...</b>
            </React.Fragment>
        ),
        link: 'https://padlet.com/play2learniitm/ppd-course-testimonials-h1g8ps4pejb8x1cv/wish/2733883528',
    },
    {
        id: 7,
        img: dummy_img,
        name: 'Keerthana Rachuri',
        comment: (
            <React.Fragment>
                {`“By being more aware of what I am doing, I am able to make life for me and others around me much better. I am very grateful for this course for making me understand how important is peace and spirituality in life,`}
                <b style={{ color: "red", fontSize: "12px" }}>read more...</b>
            </React.Fragment>
        ),
        link: 'https://padlet.com/play2learniitm/ppd-course-testimonials-h1g8ps4pejb8x1cv/wish/2733954222',
    },
    {
        id: 8,
        img: 'https://v1.padlet.pics/1/image.webp?t=c_limit%2Cdpr_2%2Ch_707%2Cw_547&url=https%3A%2F%2Fstorage.googleapis.com%2Fpadlet-uploads%2F2167110906%2Fab39a10f571ca4da9a34fe849039d141%2FWhatsApp_Image_2022_12_23_at_00_29_10.jpg%3FExpires%3D1701672723%26GoogleAccessId%3D778043051564-q79bsd8mc40b0bl82ikkrtc3jdofe4dg%2540developer.gserviceaccount.com%26Signature%3DNg9ycIRIP3d2Znbl2iBmE4hDCPQvBgnfO%252B%252BwlS4pQcJpxzZWa6GfN%252FydGj54jvRXXVCHv3iZY3cI70k0zW0zIOTM%252FjEhSb4fx6SptY5euVgaF3joE2ofrXWv%252BoQ0AblAa7MB95UG89CfvHTYpPgwjZEvUQORpbS%252BkDr0w6REUnk%253D%26original-url%3Dhttps%253A%252F%252Fpadlet-uploads.storage.googleapis.com%252F2167110906%252Fab39a10f571ca4da9a34fe849039d141%252FWhatsApp_Image_2022_12_23_at_00_29_10.jpg',
        name: 'Kudari Pavani',
        comment: (
            <React.Fragment>
                {`“Happiness, Habits, Success Course has eight sessions. As a Biotechnolgy student, I like the way it was taught to us - Science + life. Parents tell us you should sleep early and wake up early, but they never told me science behind it. This course told me the,`}
                <b style={{ color: "red", fontSize: "12px" }}>read more...</b>
            </React.Fragment>
        ),
        link: 'https://padlet.com/play2learniitm/ppd-course-testimonials-h1g8ps4pejb8x1cv/wish/2732630207',
    },
    {
        id: 9,
        img: dummy_img,
        name: 'ChinnPotula Seshank',
        comment: (
            <React.Fragment>
                {`“Its a good course and I recommend fellows to join in it and experience the fun as well as the knowledge to get bonded with the Professors especially Viji mam and Sivakumar sir and classmates. Here you will learn about the ways to get,`}
                <b style={{ color: "red", fontSize: "12px" }}>read more...</b>
            </React.Fragment>
        ),
        link: 'https://padlet.com/play2learniitm/ppd-course-testimonials-h1g8ps4pejb8x1cv/wish/2733904920',
    },
    {
        id: 10,
        img: 'https://v1.padlet.pics/1/image.webp?t=c_limit%2Cdpr_2%2Ch_707%2Cw_565&url=https%3A%2F%2Fstorage.googleapis.com%2Fpadlet-uploads%2F2164115952%2F3aa6b3b898cf425ce29254d6a06b01ed%2FWhatsApp_Image_2023_10_03_at_4_45_14_PM.jpeg%3FExpires%3D1702702729%26GoogleAccessId%3D778043051564-q79bsd8mc40b0bl82ikkrtc3jdofe4dg%2540developer.gserviceaccount.com%26Signature%3DY9z0fT9Yq5xEe%252FgboEwZDmJjuHb0DnfaHTHnBK1pgZBTIqPjCPHhwDrUKjCYtREnBm4GCS%252FngszUCigGHkGmgDOT418Q2%252FcyeW0hDcT79QPm3Crv0aK7yx%252BrhYm2w64e1UHPpTSfiJvwaras9jnZJdrFdt8qeRkA%252BXL7bCccCbs%253D%26original-url%3Dhttps%253A%252F%252Fpadlet-uploads.storage.googleapis.com%252F2164115952%252F3aa6b3b898cf425ce29254d6a06b01ed%252FWhatsApp_Image_2023_10_03_at_4_45_14_PM.jpeg',
        name: 'Deekshitha Bandaru',
        comment: (
            <React.Fragment>
                {`“Every class is so well planned, with the right amount of learning through interaction and self-introspection through the assignments. The amount of peer learning that this course facilitates is very,`}
                <b style={{ color: "red", fontSize: "12px" }}>read more...</b>
            </React.Fragment>
        ),
        link: 'https://padlet.com/play2learniitm/ppd-course-testimonials-h1g8ps4pejb8x1cv/wish/2730048269',
    },
    {
        id: 11,
        img: dummy_img,
        name: 'Aman Yogesh Kulwal',
        comment: (
            <React.Fragment>
                {`“I am currently doing this course, so couldn't write much about the overall course. The idea of this course is really well and aligns with the problems of the students that we face today. Also till now the guest faculties visiting the,`}
                <b style={{ color: "red", fontSize: "12px" }}>read more...</b>
            </React.Fragment>
        ),
        link: 'https://padlet.com/play2learniitm/ppd-course-testimonials-h1g8ps4pejb8x1cv/wish/2733973172',
    },
    {
        id: 12,
        img: 'https://v1.padlet.pics/1/image.webp?t=c_limit%2Cdpr_2%2Ch_400%2Cw_399&url=https%3A%2F%2Fstorage.googleapis.com%2Fpadlet-uploads%2F2196926962%2Fa8988297019d1af9b6803bda1fb7bf12%2F1681768747227.jpeg%3FExpires%3D1702485458%26GoogleAccessId%3D778043051564-q79bsd8mc40b0bl82ikkrtc3jdofe4dg%2540developer.gserviceaccount.com%26Signature%3DFkdKxl%252Fz2Q00x5B5wiTGY6MIwnyj5X6xjBP8o7%252BsII%252FEasFqHT3wkmJ8iHh0jtDN%252Fk3ziFf9B1k4%252Fu35byW35b7O8E7bhcnTSC7uXHCqn53RprMkIHaaSWWCYKYPvMvAljrJYtBFrN6PPvRiQV8wbO4%252Fij%252BCRN0HE%252BqKhUQ3s3c%253D%26original-url%3Dhttps%253A%252F%252Fpadlet-uploads.storage.googleapis.com%252F2196926962%252Fa8988297019d1af9b6803bda1fb7bf12%252F1681768747227.jpeg',
        name: 'Shishir Chaurasiya',
        comment: (
            <React.Fragment>
                {`“I'm really happy that I signed up for this HHS course. The stuff we're learning is organized really well, and after a few weeks, we're starting to understand the patterns in what we're being taught,`}
                <b style={{ color: "red", fontSize: "12px" }}>read more...</b>
            </React.Fragment>
        ),
        link: 'https://padlet.com/play2learniitm/ppd-course-testimonials-h1g8ps4pejb8x1cv/wish/2766551273',
    },
]

export default data;