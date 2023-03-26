import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Show from '../Show/Show';
import './Top.css'


const Top = () => {
    const [teachers,setTeacher]=useState([])
    useEffect(()=>{
        fetch("player.json")
        .then(res => res.json())
        .then(data => setTeacher(data))
    },[])
    return (
        <div className='container'>
            <h2 className='teacher-title'>Top Teacher</h2>
            <div className='teacher-container'>
            {
                teachers.map(teacher =><Show teacher={teacher} key={teacher.id}></Show>)
            }
            </div>
            <hr />
            <Course></Course>
        </div>
    );
};

export default Top;
