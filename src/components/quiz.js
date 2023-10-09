import './quiz.css'
import { Link } from 'react-router-dom'

const Quiz = () => {
    return (
        <div className="quiz">
            <div className="quiz-start">
                <Link to=''>
                    <button className="">Start quiz</button>
                </Link>
                <p>Details on starting quiz and getting reward. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ratione hic perferendis magnam esse, natus fugit doloribus repellendus praesentium laborum non. Excepturi voluptas, dicta reprehenderit ut facere ipsum debitis quis illum nam possimus natus blanditiis.</p>
            </div>
            <div className="quiz-reward">
                <h2>Claim your reward</h2>
                <div className='reward-code-div'>
                    <input className='reward-input' type="text" placeholder='Enter your reward code'/>
                    <button className='reward-button'>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Quiz;