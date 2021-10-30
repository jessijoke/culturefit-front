import './chat.css'

const ChatContainer = (props) => {
    return(
        <div className="chatContainer">
            <div className="innerContainer">
                {props.messages}
            </div>
        </div>
    )
}

export default ChatContainer;