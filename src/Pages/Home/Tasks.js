import React from 'react';

const Tasks = ({ task }) => {
    const { _id, name, description, } = task;
    return (
        <div>
            <div class="card w-100 bg-base-100 shadow-xl rounded-lg mt-4">
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl">{name}</h2>
                    <p className='font-serif text-xl'>{description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-primary">Done</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;