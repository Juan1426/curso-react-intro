import {ImCheckmark} from "react-icons/im"
import {ImCancelCircle} from "react-icons/im"
const ToDoItem = (props) =>{
    return (
        <li className="list-item">
            <span className={`icon item-check ${props.completed && "item-check--active" }`}>
                <ImCheckmark/>
            </span>
            <p className={`list-p ${props.completed && "list-p--completed"}`}>
                {props.text}
            </p>
            <span className={`icon list_item--cancel`}>
                < ImCancelCircle/>
            </span>          
        </li>
    )
}

export default ToDoItem