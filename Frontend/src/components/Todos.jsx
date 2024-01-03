
function Todo({todos}){

    return(
        <div>
            {todos?.map(function(todo){
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={function(todo){
                        todo.completed=true
                    }}>{todo.completed==true ? "Completed": "Mark as Done"}</button>
                </div>
            })}
        </div>
    )
}
export default Todo;