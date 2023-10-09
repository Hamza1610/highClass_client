const Room = () => {
    return (
        <div className='learn-group-content'>
            <div className='roomate-list'>
                {/* This is going to map all student users and render as profile */}
            </div>
            <div className='roomate-chat'>
                <div className='chats-board'></div>
                <div className='chat-pad'>
                    <input className="input-msg" type='text'/>
                    {/* Icon should be used here */}
                    <button className="send-msg">Send</button>
                </div>
            </div>
        </div>

    ) 
}
export default Room;