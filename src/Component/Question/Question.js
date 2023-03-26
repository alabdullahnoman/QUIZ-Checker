import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuestion from '../ShowQuestion/ShowQuestion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Question.css'


const Question = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const data =useLoaderData()
    const questions =data.data.questions
    const [correct , setCorrect] =useState(0)
    const [Incorrect , setIncorrect] =useState(0)
    const increase =()=>{
        setCorrect(correct+1)
    }
    const decrease =()=>{
        setIncorrect(Incorrect+1)
    }
    
    return (
        <div className='mb-5'>
           {
            questions.map(Question => <ShowQuestion increase={increase} decrease={decrease} Question={Question} key={Question.id}></ShowQuestion>)
           }
           <>
                <div className='btn-modal'>
                    <Button  variant="outline-success" onClick={handleShow}>
                        Submit
                    </Button>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Result of Quiz</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><p>Correct Answer: {correct}</p> <p>Incorrect Answer: {Incorrect}</p></Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>

    );
};

export default Question;