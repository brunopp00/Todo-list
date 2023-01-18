import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';
import { useState } from 'react';

export function App() {
  const data = [
    {id: 1, check: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus delectus aspernatur molestiae distinctio corporis itaque, officiis quaerat recusandae. Sit a, maiores at obcaecati quod blanditiis eveniet assumenda quas quidem doloremque.'},
    {id: 2, check: true, text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquid commodi aperiam nemo. Qui mollitia molestiae inventore recusandae excepturi necessitatibus fugiat numquam, ut nobis optio ullam ipsam, eos ex quaerat?'}
  ];
  const [tasks, setTasks] = useState(data);
  const [inputValue, setInputValue] = useState('');
  const [createdTasks, setCreatedTasks] = useState(tasks.length);
  const [doneTasks, setDoneTasks] = useState(0);

  function handleCreateNewTask() {
    if(inputValue !== '') {
      let taskId = Math.floor(Date.now() * Math.random()).toString(36);
      let newTask = {id: taskId, check: false, text: inputValue}
      setTasks([...tasks, newTask]);
      setInputValue('');
      setCreatedTasks(createdTasks + 1)
    } else {
      alert('Preencha o texto da tarefa!');
    }

  }

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <NewTask 
          newTask={handleCreateNewTask} 
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Task 
          tasks={tasks} 
          setTasks={setTasks}
          createdTasks={createdTasks}
          setCreatedTasks={setCreatedTasks}
          doneTasks={doneTasks}
          setDoneTasks={setDoneTasks}
        />
      </div>
    </div>
  )
}
