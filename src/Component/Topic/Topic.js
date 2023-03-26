import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Topic.css'

const Topic = ({quiz}) => {
   
    const {name,logo,total,id}=quiz
    const navigate=useNavigate()
    const goToQues=()=>{
        navigate(`/topic/${id}`)
    }
    return (
        <div className='Quiz'>
            <div className='Quiz-banner'>
                <img src={logo} alt="" />
            </div>
            <div className='Quiz-info'>
                <span>
                    <p>{name}</p>
                    <p>Question: {total}</p>
                </span>
                <button onClick={goToQues}>Start Practice</button>
            </div>
            
        </div>
    );
};

export default Topic;