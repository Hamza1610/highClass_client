import './day.css';
const Day = ({day}) => {
    return (
        <div className="day">
            <h2>{day}</h2>
            <div className="time-inputs">
                <input type="time" placeholder=""/>
                <b>to :</b>
                <input type="time" />
            </div>
            <div className="add-and-edit-div">
                <button className="add-button">Add</button>
                <button className="add-edit">Edit</button>
            </div>
        </div>
    )
}
export defau