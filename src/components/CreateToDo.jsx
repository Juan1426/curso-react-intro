import {AiOutlinePlus} from "react-icons/ai"

function CreateToDo() {
    return (
        <button className="create_btn"
            onClick={
                (event)=>{
                    console.log("coso")
                    console.log(event)
                    console.log(event.target)
                    }
                }>            
                <AiOutlinePlus/>
        </button>
    )
}

export default CreateToDo 