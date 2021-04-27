function TodoForm({addTodo}){
    // serves as an initial state for my text input, starting empty. 
    const [value, setValue] = React.useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
//         // returning if value is empty does nothing
        if(!value) return; 
        addTodo(value);
        setValue(''); 
    }
    
    return (
//         {/* these is the form for my text input to be rendered. */}
        <form onSubmit={handleSubmit}> 
             <input 
            type="text"
            className="input"
            value={value}
            placeholder="Add Todo.."
            onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}