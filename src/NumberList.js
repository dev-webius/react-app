function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <ListItem key={number.toString()} value={number} />);

    return (
        <ul>{listItems}</ul>
    );
}

function ListItem(props) {
    return (
        <li>{props.value}</li>
    );
}

export default NumberList;