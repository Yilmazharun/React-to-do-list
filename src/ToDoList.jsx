import React, { useState } from 'react'

function ToDoList (){

    const [tasks, setTasks] = useState(["Eat breakfast", "take a shower", "go to work", "go to bed"]);
    const [newTasks, setNewTasks] = useState("");
    
    function handleInputChange(event){
        setNewTasks(event.target.value);

    }

    function addTask(){
        setTasks([...tasks, newTasks]);
        setNewTasks("");

    }

    function deleteTask(index){
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){
        if(index > 0){
            const temp = tasks[index];
            tasks[index] = tasks[index - 1];
            tasks[index - 1] = temp;
            setTasks([...tasks]);
        }
    }


    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const temp = tasks[index];
            tasks[index] = tasks[index + 1];
            tasks[index + 1] = temp;
            setTasks([...tasks]);
        }
    }

  return (
    <div className='to-do-list'>
        <h1>To-Do-List</h1>
        <div>
            <input 
            type="text" 
            placeholder="Add a task"
            value={newTasks}
            onChange={handleInputChange}
            
            />
            <button  className='add-button'onClick={addTask}>Add</button>

        </div>
        <ol>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span className='text'>{task}</span>
                   
                    <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                    <button className='move-button'onClick={() => moveTaskUp(index)}>👆🏼</button>
                    <button className='move-button'onClick={() => moveTaskDown(index)}>👇🏼</button>
                </li>
            ))}
        </ol>
    </div>);
} 

export default ToDoList;
