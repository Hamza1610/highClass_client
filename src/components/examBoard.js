import { useState, useEffect } from 'react'
import './examBoard.css'
import { Link } from 'react-router-dom';
const ExamBoard = () => {

    const [min,setMin] = useState(60);
    const [sec, setSec] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [testTime, setTestTime] = useState(true);

    const [question, setQuestion] = useState('')
    const [options, setOptions] = useState([])

    const testFetcher = () => {
        return fetch('/exam-questions')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .catch((error) => {
            throw new Error('Fetch error: ${error.messsage}')
        })
    }
    useEffect(() => {
        testFetcher()
        .then((result) => {
            setQuestions(result)
        }).catch((err) => {
            console.error(err)
        });
    }, [])
    
    useEffect(() => {
        setTimeout(() =>{
            setSec(sec-1);    
            if (sec == 0) {
                setMin(min-1);
                setSec(59);
            }
            if (min == 0) {
                setTestTime(false)
                console.log('Calculate score');
            }
        },1000)  
    })
    
    // the testFetche rshould be called first

    
    const [optionA, setOptionA] = useState({});
    const [optionB, setOptionB] = useState({});
    const [optionC, setOptionC] = useState({});
    const [optionD, setOptionD] = useState({});

    const [clickedAnswer, setClickedAnswer] = useState('');
    const clickedStyle = {backgroundColor: '#007bff'} 

    const optionAHandler = () => {
        setOptionA(clickedStyle);
        setOptionB({});
        setOptionC({});
        setOptionD({});
        setClickedAnswer('A');
    }
    const optionBHandler = () => {
        setOptionA({});
        setOptionB(clickedStyle);
        setOptionC({});
        setOptionD({});
        setClickedAnswer('B');
    }
    const optionCHandler = () => {
        setOptionA({});
        setOptionB({});
        setOptionC(clickedStyle);
        setOptionD({});
        setClickedAnswer('C');
    }
    const optionDHandler = () => {
        setOptionA({});
        setOptionB({});
        setOptionC({});
        setOptionD(clickedStyle);
        setClickedAnswer('D');
    }

    const handleClick = (e) => {
        const testNum = e.target.value
        console.log(testNum);
        setQuestion(questions[testNum-1])


    }
    return (
        <div className="exam-board">
            {testTime && (
                <div>
                    <div className="question-and-features">
                        <div className="features">
                            <div className="constants-values"></div>
                            <div className="exam-time">
                                {/* A count down  */}
                                Time: {min}:{sec}
                            </div>
                        </div>
                        {questions && questions.map((question)=> (
                            <div className="question-option" id={question._id}>  
                                <p className='qustion'>{question.key}) {question.Question}</p>
                                <div className='option' style={optionA} onClick={optionAHandler}><input name='option' type='radio' disabled/>A: {question.Options[0]}</div>
                                <div className='option' style={optionB} onClick={optionBHandler}><input name='option' type='radio' disabled/>B: {question.Options[1]}</div>
                                <div className='option' style={optionC} onClick={optionCHandler}><input name='option' type='radio' disabled/>C: {question.Options[2]}</div>
                                <div className='option' style={optionD} onClick={optionDHandler}><input name='option' type='radio' disabled/>D: {question.Options[3]}</div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="prev-next">
                        <button >Prev</button>
                        <button >Next</button>
                    </div> */}
                    <div className="questions-list">
                        {/* The number box will be mapped acoording question uploaded */}
                        {questions.map((question) => (<Link to=''><button onClick={handleClick} className='question-number' value={question.key}>{question.key}</button></Link>))}
                    </div>
                </div>
            )}
            {!testTime && (
                <div>
                    <div>Time ellapse</div>
                    <p>your test score is:</p>
                    {

                    }
                </div>
            )}
        </div>
    )
}
export default ExamBoard;