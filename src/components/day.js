import './day.css';
import { useState } from 'react';

const Day = (props) => {

    const [time, setTime] = useState([{
        from: '',
        to: ''
    }]);

    // const [daySet, setDaySet] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTime({
            ...time,
            [name]: value
        });
     
    }

    const handleAdd = async (e) => {
        const day = props.day;
        // this set day for th pop/editinput component
        // setDaySet(day);
        // 

        const reg_num = localStorage.getItem('regNumber')

        const data = { reg_num: reg_num,  day: day, from: time.from, to: time.to}
        console.log(data);
        const response = await fetch('/time-reg', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
              },
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
        const day = props.day
        localStorage.setItem('editDay',day)
        // Here the  onData should be the data returned from server
        props.onPop(true);
        props.onData(time);
        // props.daySet(props.day);
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