import AddTodo from "./Components/AddTodo"
import Todos from "./Components/Todos"

function App() {

  return (
    <>
    <div className="flex justify-center">
    <div className="w-1/2">
      <div className="flex justify-center"><AddTodo/></div>
      <Todos/>
    </div>
    </div>
    </>
  )
}

export default App
