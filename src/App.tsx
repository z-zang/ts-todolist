import { ChangeEvent, useState } from 'react'
import './App.css'
import { ITask } from './Interfaces';
import TodoTask from './Components/TodoTask';


const App = () => {
  const [count, setCount] = useState(0);

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])
  // const [displayedList, setDisplayList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }


  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => task.taskName != taskNameToDelete))
  }

  // const handleTabClick = (event: ChangeEvent<HTMLInputElement>): void => {
  //   console.log('hi')
  // }

  // const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   todoList.filter()
  // }

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline,
      isCompleted: false
    }

    setTodoList([...todoList, newTask])
    setTask('')
    setDeadline(0)
  }


  return (
    <main className='app'>

      <div className='header'>
        <div className='inputContainer'>
          <input type="text" value={task} placeholder='task...' name="task" onChange={handleChange}/>
          <input type="number" value={deadline} placeholder='deadline in days' name="deadline" onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* <div className='listTabs'>
        <button onClick={handleTabClick}>All</button>
        <button onClick={handleTabClick}>Completed</button>
        <button onClick={handleTabClick}>Todo</button>
      </div> */}

      <div className='todoList'>
        {todoList.map((task: ITask, index: number) => {
          return <TodoTask key={index} task={task} completeTask={completeTask}/>
        })}
      </div>
    </main>
  )
}

export default App
