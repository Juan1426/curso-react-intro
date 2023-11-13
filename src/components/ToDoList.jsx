const ToDoList = ({children}) =>{
    return (
        <div className="list_container">
            <ul className="list">
                {children}
            </ul>
        </div>
        
    )
}

export default ToDoList