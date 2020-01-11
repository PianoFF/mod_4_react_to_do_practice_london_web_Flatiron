import React from 'react'

const Task = props => {
    const {task, onDelete} = props 
    
    return(
        <div className='task'>
            <div className="label">{task.category}</div>
            <div className="text">{task.text}</div>
            <button className="delete" onClick={()=>onDelete(task)}>X</button>
        </div>
    )
};


export default Task

/* 
    while receiving an object (from Tasks.js), below is recommended: 
            👇destructuring received 'props' arguments on spot
    const Task = ({category, text, onDelete}) => {
        return (
            <div className='task'>
                <div className="label">{category}</div>
                <div className="text">{text}</div>
                <button className="delete" onClick={()=>onDelete(task)}>X</button>
            </div>
        )
    }
*/