import React from 'react';
import './Show.css'

const Show = ({teacher}) => {
    const {img,name}=teacher
    return (
        <div className='teacher-info'>
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Show;