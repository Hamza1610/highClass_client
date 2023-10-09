
import { useState } from 'react';
const EditInput = (props) => {
    const [fromEdit, setFromEdit] = useState('');
    const [toEdit, setToEdit] = useState('');
    const handleChange = () => {
        console.log(fromEdit, toEdit);
    }
    handleChange();
    return (
        <div className="time-edit">
            <input type="text" defaultValue={props.time.from} onChange={(e)=> setFromEdit(e.target.value)}/>
            <input type="text" defaultValue={props.time.to}  onChange={(e)=> setToEdit(e.target.value)}/>
        </div>
    )
}
export default EditInput;