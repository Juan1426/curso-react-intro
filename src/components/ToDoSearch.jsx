import React from "react";

const ToDoSearch = ({searchValue, setSearchValue}) => {

    return(
        <div className="searcher_container">
            <input 
                placeholder="Things to do..." 
                className="searcher" 
                id="searcher"
                value={searchValue}
                onChange={(e)=>{
                    setSearchValue(e.target.value);
                }}
            />
        </div>
        
    )
}

export default ToDoSearch