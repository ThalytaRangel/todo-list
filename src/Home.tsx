import { useState } from 'react'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { ListHeader } from './components/List/ListHeader'
import { ItemList } from './components/List/ItemList'
import {PlusCircle} from '@phosphor-icons/react'
import styles from "./Home.module.css"
import './global.module.css'

export interface TaskType {
  id: number;
  text: string;
  isCompleted: boolean;
}


export function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState("");

  const completedTaskCounter = tasks.reduce((prevValue, currentTask) => {
    if(currentTask.isCompleted) {
      return prevValue + 1
    }
    return prevValue
  }, 0)
  

  function handleAddNewTask() {
    if(!newTask) {
      return;
    } 

    const addedTask: TaskType = {
        id: new Date().getTime(),
        text: newTask, 
        isCompleted: false,
    }   

    setTasks((state) => [...state, addedTask]);
    setNewTask("");
  }

  function handleCompletedTask(id: number) {
    const updatedTasks = [...tasks];

    updatedTasks.map((task) => 
      task.id === id ? (task.isCompleted = !task.isCompleted) : task)      

    console.log(updatedTasks)

    setTasks(updatedTasks)
  }

  function handleRemovedTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if(!confirm('Tem certeza que deseja apagar a tarefa?')) {
      return;
    }

    setTasks(filteredTasks)
  }

    return (
    <main className={styles.main}>
      <Header/>
      <section className={styles.content}>
        <div className={styles.inputWrapper}>
          <Input 
           name='task'
           value={newTask}
           onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={handleAddNewTask}>
            Criar 
            <PlusCircle size={16} color="#f2f2f2" weight='bold'/>
          </Button>        
        </div>
        <div className={styles.taskListContainer}>
          <ListHeader taskCounter={tasks.length} completedTaskCounter={completedTaskCounter}/>
          {tasks.map((task) => (
            <ItemList key={task.id} task={task} isTaskComplete={handleCompletedTask} removeTask={handleRemovedTask} />
          ))
          }           
        </div>
      </section>
    </main>      
  )
}


