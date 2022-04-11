
export const TodoItem = ({todo}) =>{
    return (
        <div>
            <div>id: {todo.id}</div>
            {todo.tittle} - {todo.status ? "Done":"Pending"}<button>Toggle</button>
        </div>
    );
};