import React from 'react';
import './Course.css'
import img1 from '../../images/courses/course-1.png'
import img2 from '../../images/courses/course-2.png'
import img3 from '../../images/courses/course-3.png'

const Course = () => {
    return (
        <div>
            <h2 className='teacher-title'>Top Course</h2>
            <div className='courses'>

            <div className='course'>
                    <div className='course-banner'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='course-details'>
                            <h3 className="course-title">
                                React - The Complete Guide 2020
                            </h3>
                            <p className="course-author"> <a href="/">Reed Krakof</a></p>
                            <div className="course-info">
                                <div>
                                    <i className="fa-solid fa-star filled"></i>
                                    <i className="fa-solid fa-star filled"></i>
                                    <i className="fa-solid fa-star filled"></i>
                                    <i className="fa-solid fa-star filled"></i>
                                    <i className="fa-solid fa-star-half-stroke filled"></i>
                                    <span>4.5</span>
                                </div>
                                <div className="course-duration">
                                    <i className="fa-regular fa-clock"></i>
                                    01:30 hr
                                </div>
                            </div>
                    </div>

            </div>
            <div className="course">
                    <div className="course-banner">
                        <img src={img2} alt=""/>
                    </div>
                    <div className="course-details">
                        <h3 className="course-title">
                            The Complete JavaScript Guide 2020
                        </h3>
                        <p className="course-author"> <a href="/">Jhankar Mahbub</a></p>
                        <div className="course-info">
                            <div>
                                <i className="fa-solid fa-star filled"></i>
                                <i className="fa-solid fa-star filled"></i>
                                <i className="fa-solid fa-star filled"></i>
                                <i className="fa-solid fa-star filled"></i>
                                <i className="fa-regular fa-star filled "></i>
                                <span>4</span>
                            </div>
                            <div className="course-duration">
                                <i className="fa-regular fa-clock"></i>
                                02:00 hr
                            </div>
                        </div>


                    </div>
                </div>
                <div className="course">
                    <div className="course-banner">
                        <img src={img3} alt=""/>
                    </div>
                    <div className="course-details">
                        <h3 className="course-title">
                            Powerpoint 2020 Master Powerpoint Course
                        </h3>
                        <p className="course-author"> <a href="/">Walter Scott</a></p>
                        <div className="course-info">
                            <div>
                                <i className="fa-solid fa-star filled"></i>
                                <i className="fa-solid fa-star filled"></i>
                                <i className="fa-solid fa-star filled"></i>
                                <i className="fa-solid fa-star filled"></i>
                                <i className="fa-solid fa-star filled"></i>
                                <span>5</span>
                            </div>
                            <div className="course-duration">
                                <i className="fa-regular fa-clock"></i>
                                01:70 hr
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Course;