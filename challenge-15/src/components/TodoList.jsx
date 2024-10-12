import TodoItem from "./TodoItem";

const TodoList = ({ todos = [] }) => {
    return (
        <ul className="list-group">
            {
                todos.map( (todo, key) => {
                    return (
                        <TodoItem key={key} todo={todo} />
                    )
                
                })
            }
        </ul>
    )
}
    
export default TodoList;