import Day from './day';

import './timeReg.css';

const TimeReg = () => {
    const days = ['Monday', 'Tuesday', 'Wednessday', 'Thusday', 'Friday', 'Saturday', 'Sunday']

    return (
        <div className="time-reg">
            <h1>Register your prefered study time</h1>
            <div className="days-div">
                { days.map((day) => <Day key={day} day={day} />) }
            </div>
        </div>
    )   
}
export default TimeReg;