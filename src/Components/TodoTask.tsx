import { ITask } from '../Interfaces'

interface Props {
    task: ITask,
    completeTask(taskNameToDelete:string): void
}

const TodoTask = ({task, completeTask}: Props) => {
  return (
    <div className='todoTask'>
        <span className='todoTaskName'>
            {task.taskName}
        </span>
        <span className='todoDeadline'>
            {task.deadline}
        </span>
        <button onClick={() => completeTask(task.taskName)}>
            X
        </button>
        {/* <div className='todoCompleted'>
            <input type="checkbox" defaultChecked={task.isCompleted} onChange={handleCheckboxChange}/>
        </div> */}
    </div>
  )
}

export default TodoTask