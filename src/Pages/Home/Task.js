import React, { useEffect, useState } from 'react';
import DoTask from './DoTask';
import Tasks from './Tasks';

const Task = () => {
    // const {id, name, description} =;
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('task.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);
    return (
        <div className='container'>
            <div className="row">
                <h1 className='text-center text-4xl font-bold mt-12 mb-9'>To-Do Tasks</h1>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                    {
                        tasks.map(task => <Tasks
                            key={task.id}
                            task={task}
                        ></Tasks>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Task;