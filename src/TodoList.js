function TodoList(props) {
    const todos = props.todos;
    const todoItems = todos.map((todo, idx) => <li key={idx}>{todo}</li>);

    return (
        <ul>{todoItems}</ul>
    );
}

/*
function TodoList(props) {
    const todos = props.todos;
    const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);

    return (
        <ul>{todoItems}</ul>
    );
}
*/

export default TodoList;