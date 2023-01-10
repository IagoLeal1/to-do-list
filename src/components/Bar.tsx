import styles from './Bar.module.css';
import { PlusCircle } from "phosphor-react"

export function Bar() {
return (
  <div>
    <form className={styles.barForm}>
        <input
          placeholder="Adicione uma nova tarefa"
        />

        <button type="submit"> Criar 
        <PlusCircle size={24} />
        </button>
    </form>
  </div>
  )
}

