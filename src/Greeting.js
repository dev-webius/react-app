function Greeting(props) {
    if (props.isLoggedIn) {
        return <UserGreeting name={props.name} />
    }
    return <GuestGreeting />
}

function UserGreeting(props) {
    return <h1>Welcome, {props.name}!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up!</h1>;
}

export default Greeting;