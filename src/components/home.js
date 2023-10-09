import { Link } from 'react-router-dom';
import { useState } from 'react';
import LearnGroup from './learnGroup';
import TimeReg from './timeReg';
import Quiz from './quiz';
import './home.css';
const Home = () => {
    const [learn, setLearn] = useState(false);    
    const [readTime, setReadTime] = useState(false);    
    const [quiz, setQuiz] = useState(false);
    
    const handleLearn = () => {
        setLearn(true);
        setReadTime(false);
        setQuiz(false);
    }
    const handleTimeReg = () => {
        setLearn(false);
        setReadTime(true);
        setQuiz(false);
    }
    const handleQuiz = () => {
        setLearn(false);
        setReadTime(false);
        setQuiz(true);
    }
return (
    <div className="home">
        <nav className='nav'>
            <div className='label'>HighClass</div>
            <div className='nav-content'>
                <div className='nav-bars'>
                    <div className='nav-btn' onClick={handleLearn}>Learning Group</div>
                    <div className='nav-btn' onClick={handleTimeReg}>Reading schedule</div>
                    <div className='nav-btn' onClick={handleQuiz}>Quize and reward</div>
                </div>

                <Link to='/signin' ><button className='sign-up-btn'>Sign up</button></Link>
            </div>
        </nav>
        <div className='home-content'>
            {learn && (<LearnGroup />)}
            {readTime && (<TimeReg />)}
            {quiz && (<Quiz />)}
        </div>
    </div>
)
}
export default Home;