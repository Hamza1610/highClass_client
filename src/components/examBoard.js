import { useState, useEffect } from 'react'
import './examBoard.css'
import { set } from 'mongoose';
const ExamBoard = () => {

    const [min,setMin] = useState(60);
    const [sec, setSec] = useState(60);
    const useTimer = () => {
        useEffect(()=> {
                if (sec) {
                    setSec(sec-1);    
                    if (sec == 0) {
                        setMin(min-1);
                        setSec(60);
                    }
                }
        },1000);
    }

    useTimer();

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
    return (
        <div className="exam-board">
            <div className="question-and-features">
                <div className="features">
                    <div className="constants-values"></div>
                    <div className="exam-time">
                        {/* A count down  */}
                        Time: {min}:{sec}
                    </div>
                </div>
                <div className="question-option">
                    <p className='qustion'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veniam nostrum vel, commodi, corporis distinctio atque cum nihil quidem asperiores quae voluptas molestiae? Hic illum optio accusantium assumenda, iusto est?</p>
                    <div className='option' style={optionA} onClick={optionAHandler}><input name='option' type='radio' disabled/> Option A</div>
                    <div className='option' style={optionB} onClick={optionBHandler}><input name='option' type='radio' disabled/> Option B</div>
                    <div className='option' style={optionC} onClick={optionCHandler}><input name='option' type='radio' disabled/> Option C</div>
                    <div className='option' style={optionD} onClick={optionDHandler}><input name='option' type='radio' disabled/> Option D</div>
                </div>
            </div>
            <div className="prev-next">
                <button >Prev</button>
                <button >Next</button>
            </div>
            <div className="questions-list">
                {/* The number box will be mapped acoording question uploaded */}
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40].map((num) => (<button className='question-number'>{num}</button>))}
            </div>
        </div>
    )
}
export default ExamBoard;