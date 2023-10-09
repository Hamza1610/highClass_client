import { useState } from 'react'
import './learnGroup.css';
import Room from './room';
const LearnGroup = () => {
    const [roomOne, setRoomOne] = useState(true);
    const [roomTwo, setRoomTwo] = useState(false);

    const roomOneSetter = () => {
        setRoomOne(true);
        setRoomTwo(false);
    }
    const roomTwoSetter = () => {
        setRoomTwo(true);
        setRoomOne(false);
    }
    return (
        <div className="learn-group">
            <div className='learn-group-nav' >
                <div className='rooms-div'>
                    <button onClick={roomOneSetter}>Room 1</button>
                    <button onClick={roomTwoSetter}>Room 2</button>
                </div>
                <div className='search-div'>
                    <input className="search-input" type="search" />
                    <button className='search-btn'>Search</button>
                </div>
            </div>
            {/* To get chats for both Room two collections are created and useEffect is used to fetch them */}
            {roomOne && (<Room/>)}
            {roomTwo && (<Room/>)}
        </div>
    )
}
export default LearnGroup;