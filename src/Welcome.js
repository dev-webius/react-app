import React from 'react';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

class Welcome extends React.Component {
    render() {
        const comment = {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            author: {
                name: 'Hello ' + this.props.name,
                avatarUrl: 'https://placekitten.com/g/64/64'
            }
        };

        console.log(this.props);

        return (
            <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author} />
        )
    };
}

export default Welcome;
