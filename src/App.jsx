import {useDispatch} from "react-redux";
import { addTodo } from "./utils/todoSlice";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [input,setinput] = useState("")
  const dispatch = useDispatch();

  const addTodohandler = (e) => {
      e.preventDefault()
      input !== "" && dispatch(addTodo(input))
      setinput('')
  }

  return (
    <div className="bg-neutral-800 min-w-screen min-h-screen">
    <form className=" text-white text-center" 
      onSubmit={addTodohandler}
    >
      <p className="font-semibold text-3xl py-8 border-b border-gray-500">Welcome to Todo app</p>
      <div className="py-10">
        <input
          className="py-3 px-6 rounded-sm bg-slate-800 text-white md:w-96 outline-none"
          placeholder="What to do ?..."
          value = {input}
          onChange={(e) => setinput(e.target.value)}
          maxLength={110}
        />
        <button className="py-3 px-3 rounded bg-sky-950 mx-6  "onClick={addTodohandler}>ADD</button>
      </div>
      <div>
        <TodoList />
      </div>
    </form>
    </div>
  );
}

export default App;
