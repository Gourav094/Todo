import { useDispatch, useSelector } from "react-redux"
import { removeTodo,toggleTodo } from "../utils/todoSlice"
import { useEffect, useState } from "react"

const TodoList = () => {
    const storedData = JSON.parse(localStorage.getItem('mytodo'))
    const [filter,setfilter] = useState(storedData)
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo.todos)

    useEffect(() => {
        localStorage.setItem('mytodo',JSON.stringify(todos))
        setfilter(todos)
    },[todos])
    
    const handleAll = () => {
        setfilter(todos)
    }
    const handleCompleted = () => { 
        setfilter(todos.filter((todo) => todo.completed === true))
    }
    const handleActive = () => {
        setfilter(todos.filter((todo) => todo.completed === false))
    }

    const handleTick = (id) => {
        dispatch(toggleTodo(id))
    }
    if(!filter)return
    return (
        <div className="max-w-[900px] mx-auto px-2">
            <div className='flex items-center gap-6'>
                <p className = 'text-lg font-semibold text-left'>Your todo list is :</p>
                <button className="bg-cyan-900 py-1 px-2 rounded text-sm hover:opacity-80" onClick={handleAll}>ALL</button>
                <button className="bg-cyan-900 py-1 px-2 rounded text-sm hover:opacity-80" onClick={handleCompleted}>Completed</button>
                <button className="bg-cyan-900 py-1 px-2 rounded text-sm hover:opacity-80" onClick={handleActive}>Active</button>
            </div>
            <ul className="pt-4">
                {filter.map((todo) => (
                    <li key={todo.id} className={`text-gray-300  mt-2 bg-slate-600 px-4 py-2  rounded ${todo.completed ? "line-through" : ""}`}>
                        <div className="cursor-pointer font-medium flex items-center justify-between" onClick={() => handleTick(todo.id)}>
                            <div>
                                {todo.text} 
                            </div>
                            <div>
                                <i className="fa-solid fa-check pr-4 cursor-pointer text-lg"></i>
                                <button className="py-1 font-semibold rounded" onClick={() => dispatch(removeTodo(todo.id))}>
                                    <i className="fa-solid fa-xmark text-xl pt-1 "></i>
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
