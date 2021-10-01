import React from "react";

function Mailbox(props) {
    const unreadMessage = props.unreadMessage;
    const readMessage = () => {
        console.log(unreadMessage[0]);

        unreadMessage.splice(0, 1);
    }

    return (
        <div>
            <h1>Hello!</h1>
            {
                unreadMessage.length > 0 && 
                    <React.Fragment>
                        <h2>You have {unreadMessage.length} unread message{unreadMessage.length > 1 && 's'}.</h2>
                        <button onClick={readMessage}>Read Last Mail</button>
                    </React.Fragment>
            }
        </div>
    );
}

export default Mailbox;