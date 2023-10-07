import './day.css';
import EditInput from './editInput';
import { useState } from 'react';


const Day = (props) => {
    const [time, setTime] = useState({
        from: '',
        to: ''
    });

    const [pop,setPop] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTime({
            ...time,
            [name]: value
        });
     
    }

    const handleAdd = (e) => {
        const timeData = new FormData();
        timeData.append('time',time);
        console.log(time);
        setTime({
            from: '',
            to: ''
        })
    }
    const handleEdit = () => {
        if (pop==true) {
            
        } else {
            
        }    
    }
    return (
        <div className="day">
            {pop && (
                <div className="edit-pop">
                    {time.map((time) => (<EditInput time={time} />))}
                </div>
            )}
            <h3>{props.day}</h3>
            <div className="time-inputs">
                <div>
                    <label htmlFor='from'>From : </label>
                    <input id='from' name='from' type="time" value={time.from} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor='to'>To : </label>
                    <input id='to' name='to' type="time" value={time.to} onChange={handleInputChange}/>
                </div>
            </div>
            <div className="add-and-edit-div">
                <button className="add-button" onClick={handleAdd}>Add</button>
                <button className="add-edit" onClick={handleEdit}>Edit</button>
            </div>
        </div>
    )
}
export default Day;