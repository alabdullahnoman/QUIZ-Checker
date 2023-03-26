import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Top from '../Top/Top';
import Topic from '../Topic/Topic';
import './Main.css'

const Main = () => {
    const quiz = useLoaderData()
    const quizArray= quiz.data
    return (
        <div>
         <Top></Top>
        <div className='container'>
        <h2 className='teacher-title'>Quiz</h2>
            <div className='quiz-container'>
            {
                quizArray.map(quizz => <Topic quiz={quizz} key={quizz.id}
                ></Topic>)
            }
            </div>
        </div> 
        </div>
    );
};

export default Main;