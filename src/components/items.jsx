import {useState} from 'react';
import { CiEdit } from "react-icons/ci";
import { IoTrash } from "react-icons/io5";




export default function items({item, onUpdate, onDelete}) {
const [isEdit, setIsEdit] = useState(false);

function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleChange(e) {
        e.preventDefault();
        const value = e.target.value;
        setNewValue(value);
    }

    function handleClickUpdate() {
        onUpdate(item.id, newValue);
        setIsEdit(false);
    }
    return (
        <form onSubmit={handleClickUpdate}>
            <input type="text" onChange={handleChange} value={newValue} />
            <button onSubmit={handleClickUpdate}>Modifier</button>
        </form>
    )
}

    function TodoElement() {
        return (
            <>
            <div key={item.id} className="title">{item.title}</div>
            <div className="settings">
                <button onClick={() => setIsEdit(true)}><CiEdit /></button>
                <button onClick={(e) => onDelete(item.id)}><IoTrash />
                </button>
            </div>
            
            
            </>
        )
    }


    return (
        <>
        
        <div className="todo">
            {isEdit ?
            <li className='cardTodo'>
                <FormEdit />
            </li>
            :
            <li className='cardTodo'>
                <TodoElement />
            </li>
            }
        </div>
        
        </>

    )
}