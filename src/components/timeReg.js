import Day from './day';

import '';

const TimeReg = () => {
    const days = ['Monday', 'Tuesday', 'Wednessday', 'Thusday', 'Friday', 'Saturday', 'Sunday']

    return (
        <div className="time-reg">
            { days.map((day) => <Day key={day} />) }
        </div>
    )   
}
export default TimeReg;