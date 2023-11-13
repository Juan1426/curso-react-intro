const ToDocounter = ({total, completed}) => {
    return (
        <div className="counter_container">
            <h1 className="counter">
                Has completado <span>{completed}</span> de <span>{total}</span> tareas
            </h1>
        </div>
        
    )
}

export default ToDocounter