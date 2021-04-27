function App(){
    // acts as place holder within todo list
    const [todos, setTodos] = React.useState([
        {
            text: 'Check emails/social accounts',
            isComplete: false,
        },
        {
            text: 'Journal',
            isComplete: false,
        },
        {
            text: 'Make breakfast',
            isComplete: false,
        },
        {
            text: 'Excercise',
            isComplete: false,
        }
    ]);
     
    const addTodo = text => {
        const newTodos = [...todos, {text, isCompleted:false}];
        setTodos(newTodos);
    }
   
    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }
    return (<>
    
            {/* jsx being rendered onto the page. */}
            {/* code after {todo.text} imported from bootstrap*/}
            <div className='app'>
                <div className='todo-List'>
                    {todos.map((todo,i) => ( 
                    <Todo index={i} key={i} todo={todo} remove={removeTodo}/>))}
                    <TodoForm addTodo={addTodo}/>  
                </div>
            </div>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);