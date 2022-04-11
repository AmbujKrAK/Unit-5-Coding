
import { useState } from "react";
import { TodoInput } from "./todoInput";

function Todo() {
    const [todolist, settodoList] = useState(["Learning","Developing","Inspire"])
    
    const getData = (todo) =>{
        console.log("Receiving",todo);
        settodoList([...todolist, todo])
    };

    return (
        <div>
            <TodoInput getData={getData}/>
            {todolist.map((e)=>(
                <div>{e}</div>
            ))}
        </div>
    )
}

export { Todo };