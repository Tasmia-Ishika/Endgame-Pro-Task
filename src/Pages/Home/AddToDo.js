import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
const AddToDo = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('task.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Add More Task !</h1>
                    <p class="py-6">Complete your everyday task with perfect time management</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Task name</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Task description</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Add Upcoming task</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default AddToDo;