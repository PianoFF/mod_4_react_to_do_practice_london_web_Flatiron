import React from 'react'
import NewTask from './NewTask'
import Task from './Task'

const Tasks = (props) => {
    const {tasks, onDelete, categories,featureToggle, addTask} = props

    return (
        <div className="tasks">
            <h5>Tasks</h5> 
            {featureToggle ?  <NewTask categories={categories} addTask={addTask}/> : undefined}

            {tasks.map((task, index) =>{
                return (
                        <Task key={index} task={task} onDelete={onDelete}/>
                    )
                })
            }
        </div>
    )
};


export default Tasks

// to pass each task down to Task.js as an object:
//<Task task={...task} onDelete={onDelete}/> [See Task.js notes]