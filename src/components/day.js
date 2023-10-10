import './day.css';
import EditInput from './editInput';
import { useState } from 'react';

const Day = (props) => {
    const key = props.day;
    const timeAll = new FormData();

    const [time, setTime] = useState([{
        from: '',
        to: ''
    }]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTime({
            ...time,
            [name]: value
        });
     
    }

    const handleAdd = async (e) => {
        timeAll.append('from',time['from']);
        timeAll.append('to',time['to']);

        const Data = { key, timeAll }
        const response = await fetch('/set-timetable', {
            method: 'POST',
            body: Data
        })

        const json = response.json();
        if (!response.ok) {
            console.log(json.error);
        }
        
        if (response && response.ok) {
            console.log(response);
            setTime({
                from: '',
             to: ''
           })
            console.log('Data sent successfully');
        }

    }
    const handleEdit = () => {
        // Here the  onData should be the data returned from server
        props.onPop(true);
        props.onData(timeAll);
    }

    return (
        <div className="day">
            <h3>{props.day}</h3>
            <div className="time-inputs">
                <div>
                    <label htmlFor='from'>From : </label>
                    <input id='from' name='from' type="time" value={time['from']} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor='to'>To : </label>
                    <input id='to' name='to' type="time" value={time['to']} onChange={handleInputChange}/>
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