import ToDoCounter from "../components/ToDoCounter"
import ToDoSearch from "../components/ToDoSearch"
import ToDoList from "../components/ToDoList"
import ToDoItem from "../components/ToDoItem"
import CreateToDo from "../components/CreateToDo"
import React from "react"

const defaultToDo = [
    {text: "Hacer algo", completed: true},
    {text: "Hacer otra cosa", completed: false},
    {text: "Lavar la ropa", completed:false},
    {text: "Cocinar", completed:true}
  ]
  


const Main = () => {

    const [searchValue, setSearchValue ] = React.useState("");
    console.log("busqueda: " + searchValue)
  

    return(
        <div className="main_container">
            <main className="main">         
                <ToDoCounter completed ={16} total ={25} />
                <ToDoSearch 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <ToDoList >
                    {defaultToDo.map(toDo => (
                    <ToDoItem 
                        key={toDo.text} 
                        text={toDo.text}
                        completed={toDo.completed}
                    />
                    ))}               
                </ToDoList>           
                <CreateToDo />                    
            </main> 
        </div> 
        
    )
}

export default Main