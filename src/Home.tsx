import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { ListHeader } from './components/List/ListHeader'
import { ItemList } from './components/List/ItemList'
import {PlusCircle} from '@phosphor-icons/react'
import styles from "./Home.module.css"
import './global.module.css'

export function Home() {
    return (
    <main className={styles.main}>
      <Header/>
      <section className={styles.content}>
        <div className={styles.inputWrapper}>
          <Input />
          <Button>
            Criar 
            <PlusCircle size={16} color="#f2f2f2" weight='bold'/>
          </Button>        
        </div>
        <div className={styles.taskListContainer}>
          <ListHeader/>
          <ItemList isCompleted={false}/>
          <ItemList isCompleted={false}/>
          <ItemList isCompleted/>
          <ItemList isCompleted/>     
        </div>
      </section>
    </main>      
  )
}


