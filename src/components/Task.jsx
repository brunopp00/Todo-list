import { useEffect, useState } from 'react';
import { Empty } from './Empty';
import { Info } from './Info';
import styles from './Task.module.css';
import { TaskItem } from './TaskItem';

export function Task({tasks, setTasks, createdTasks, setCreatedTasks, doneTasks, setDoneTasks}) {

    function handleUpdateChecked(id) {
        let newTask = tasks;
        newTask.forEach(task => {
            if(task.id === id) {
                task.check = task.check ? false : true;
            } 
        });
        setTasks(newTask);
    }

    function handleDeleteTask(id) {
        let newTaskList = tasks.filter(task => {
            return task.id !== id
        })
        setTasks(newTaskList);
        setCreatedTasks(newTaskList.length)
        updateDoneTasks(newTaskList)
    }

    function updateDoneTasks(newTaskList) {
        let filteredDoneTask = newTaskList.filter(task => task.check === true);
        let quantity = filteredDoneTask.length
        setDoneTasks(quantity);
    }

    function handleDoneTasks(operation, id) {
        handleUpdateChecked(id)
        setDoneTasks(operation === 'plus' ? doneTasks + 1 : doneTasks - 1);
    }
    
    useEffect(() => {
        let filteredDoneTask = tasks.filter(task => task.check === true);
        let quantity = filteredDoneTask.length
        setDoneTasks(quantity);
    }, [])

    return (
        <div className={styles.content}>
            <Info createdTasks={createdTasks} doneTasks={doneTasks} />
            { tasks.length === 0 ? <Empty /> : 
            <div className={styles.taskList}>
                {tasks.map(task => {
                    return <TaskItem 
                                task={task} 
                                onDoneTasks={handleDoneTasks}
                                onDeleteTask={handleDeleteTask}
                                key={task.id} 
                            />
                })}
            </div> 
            }
        </div>
    )
}