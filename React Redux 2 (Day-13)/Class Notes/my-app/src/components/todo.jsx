
import { useDispatch, useSelector } from "react-redux"

export const Todos = () => {
    const todos = useSelector(store => store.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        
    }

    return <div>
        <input type="text" onChange={(e)=> setText(e.target.value)}/>
        <button onClick={handleAdd}>Add Todo</button>
        {
            todos.map((t)=> {
                <div>{t.title}<div/>
            })
        }
    </div>
}