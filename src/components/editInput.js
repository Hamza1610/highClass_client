import './editInput.css'
import { useState } from 'react';
const EditInput = (props) => {

    const [fromOne, setFromOne] = useState('');
    const [toOne, setToOne] = useState('');

    const [fromTwo, setFromTwo] = useState('');
    const [toTwo, setToTwo] = useState('');

    const [fromThree, setFromThree] = useState('');
    const [toThree, setToThree] = useState('');

    const [fromFour, setFromFour] = useState('');
    const [toFour, setToFour] = useState('');

    const handleEdit = async () => {
        const day = localStorage.getItem('editDay');
        const reg_num = localStorage.getItem('regNumber');
        const editData = [];
        editData.push({ from: fromOne, to: toOne })
        editData.push({ from: fromTwo, to: toTwo})
        editData.push({ from: fromThree, to: toThree })
        editData.push({ from: fromFour, to: toFour })

        const data = { reg_num: reg_num, editedData: editData , day: day}
        console.log(data)

        const response = await fetch('/edit-time', {
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
            props.saveEdit()
            console.log('Data edited successfully');
        }
    // console.log(data)
    }

    return (
        <div className="time-edit">
            <div>Edit {} schedule</div>
            <div className='edit-input-pair'>
                <input id='from' name='from' type="time" value={fromOne} onChange={(e)=> setFromOne(e.target.value)}/>
                <span>to:  </span>
                <input id='to' name='to' type="time" value={toOne}  onChange={(e)=> setToOne(e.target.value)}/>
            </div>

            <div className="edit-input-pair">
                <input id='from' name='from' type="time" value={fromTwo}  onChange={(e)=> setFromTwo(e.target.value)}/>
                <span>to:  </span>
                <input type="time" value={toTwo}  onChange={(e)=> setToTwo(e.target.value)}/>
            </div>

            <div className="edit-input-pair">
                <input id='from' name='from' type="time" value={fromThree}  onChange={(e)=> setFromThree(e.target.value)}/>
                <span>to:  </span>
                <input id='to' name='to' type="time" value={toThree}  onChange={(e)=> setToThree(e.target.value)}/>
            </div>
            
            <div className="edit-input-pair">
                <input id='from' name='from' type="time" value={fromFour}  onChange={(e)=> setFromFour(e.target.value)}/>
                <span>to:  </span>
                <input id='to' name='to' type="time" value={toFour}  onChange={(e)=> setToFour(e.target.value)}/>
            </div>
        
            <button className='save-edit' onClick={handleEdit}>Save</button>
        </div>
    )
}
export default EditInput;