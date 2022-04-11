
import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import {nanoid} from "nanoid"

function Todo() {

    const [todoList, setTodoList] = useState([])

    const getData = (todo) => {
        const payload = {
            title: todo,
            status: false,
            id: nanoid(5),
        };
        setTodoList([...todoList, payload]);
    };
     
    return (
        <div>
            <TodoInput getData={getData} />
            {todoList.map((e) => (
                <TodoItem>todo{e}</TodoItem>
            ))}
        </div>
    )
}

export { Todo }