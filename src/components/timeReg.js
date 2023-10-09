import { useState } from 'react';
import Day from './day';
import EditInput from './editInput';
import './timeReg.css';

const TimeReg = () => {
    const days = ['Monday', 'Tuesday', 'Wednessday', 'Thusday', 'Friday', 'Saturday', 'Sunday']
    const [editableData, setEditableData] = useState(null);
    const [popSetter, setPopSetter] = useState(false);

    // This function handles data from Day component
    const editableFetcher = (data) => {
        setEditableData(data);
    }
    const popFetcher = (pop) => {
        setPopSetter(pop);
    }

    // POP FUNCTIONS

    const saveEdit = () => {
        // Need to save the time to the time variable
        setPopSetter(false);
    }

    return (
        <div className="time-reg">
            {popSetter && (
                <div className="edit-pop">
                    {/* Later after i add the day(Mon, tues, wed ..) to each time the will be day  */}
                    {[editableData].map((time) => (<EditInput key={time} time={time} />))}
                    <button className='save-edit' onClick={saveEdit}>Save</button>
                </div>
            )}
            <div className='study-time-content'>
                <h1>Register your prefered study time</h1>
                <div className="days-div">
                    { days.map((day) => <Day key={day} day={day} onData={editableFetcher} onPop={popFetcher} />) }
                </div>
            </div>
        </div>
    )   
}
export default TimeReg;