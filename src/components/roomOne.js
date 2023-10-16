import { useEffect, useState } from "react"
import './room.css'
const RoomOne = () => {
    const [chats, setChats] = useState([])
    const [error, setError] = useState({})
    const [msg, setMsg] = useState('')

    useEffect(() => {
        setTimeout(1000)
        chatFetcher();
    },)
    const chatFetcher = async () => { 
            try {
                const response = await fetch('/room-one');
                const json = await response.json();
                setChats(json);
                // console.log(json);
            } catch (error) {
                setError(error);
                console.log(error);
            }
        }
    //  chatFetcher()

    const sendMsg = async (e) => {
        e.preventDefault();
        const reg_num = localStorage.getItem('regNumber');
        const time = Date()
        const data = {RegistionNum: reg_num, Message: msg, Time: time}
        try {
            const response = await fetch('/postchat-1', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            setMsg('')
            // console.log(json);
        } catch (error) {
            setError(error);
            console.log(error);
        }
    }
    return (
        <div className='learn-group-content'>
            <div className='roomate-list'>
                {/* This is going to map all student users and render as profile */}
            </div>
            <div className='roomate-chat'>
                <div className='chats-board'>
                    
                    {chats.map((chat) => (
                    <div class='msg-box' key={chat._id}>
                        {/* { error && (<div class='msg-err'>Error: {error}</div>)} */}
                        <div class='msg-author'>
                            <span>{chat.RegistionNum}</span>
                        </div>
                        <div class='msg-content'>
                            <p>{chat.Message}</p>
                        </div>
                        <small>{chat.Time}</small>
                    </div>
                    ))}
                
                </div>
                <div className='chat-pad'>
                    <input value={msg} className="input-msg" type='text' onChange={(e) => {setMsg(e.target.value)}}/>
                    {/* Icon should be used here */}
                    <button className="send-msg" onClick={sendMsg}>Send</button>
                </div>
            </div>
        </div>

    ) 
}
export default RoomOne;