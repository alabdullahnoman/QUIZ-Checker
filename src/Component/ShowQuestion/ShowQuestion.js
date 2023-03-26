import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './ShowQuestion.css'
const ShowQuestion = ({Question, increase ,decrease}) => {
   const {question,options,correctAnswer,id}=Question
    const notify = () => toast(correctAnswer)
    const quizAnswer =(e)=>{
        const Answer = e.target.value
        if(Answer === correctAnswer){
            increase()
        }
        else{
            decrease()
        }
    }
    return (
        <div className='quizoption-container'>
            <div className='quiz-question'>
                <h5>{question}</h5>
               <div>
                    <button onClick={notify}>
                        <FontAwesomeIcon className='fa-icon' icon={faEye}></FontAwesomeIcon>
                    </button>
                    <ToastContainer/>
               </div>
            </div>
            <div className='quiz-option'>
            <ul>
                <li>
                    <input type="radio" onChange={quizAnswer} name={`${id}`} id={`${id}`} value={options[0]}/>
                    <label for={`${id}`} >{options[0]}</label>
                </li>
                <li>
                    <input type="radio" onChange={quizAnswer} name={`${id}`} id={`${id}`} value={options[1]}/>
                    <label for={`${id}`} >{options[1]}</label>
                </li>
                <li>
                    <input type="radio" onChange={quizAnswer}  name={`${id}`} id={`${id}`} value={options[2]}/>
                    <label for={`${id}`} >{options[2]}</label>
                </li>
                <li>
                    <input type="radio" onChange={quizAnswer} name={`${id}`} id={`${id}`} value={options[3]}/>
                    <label for={`${id}`} >{options[3]}</label>
                </li>
            </ul>
            </div>
        </div>
    );
};

export default ShowQuestion;