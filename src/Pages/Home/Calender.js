import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Footer from '../Shared/Footer';

const Calender = () => {
    return (
            <div>
                <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <img className="max-w-sm rounded-lg shadow-2xl" src="https://img.freepik.com/free-vector/young-businessman-planning-work-schedule-flat-vector-illustration-tiny-man-standing-giant-calendar-full-tasks-goals-events-planning-business-schedule-concept-banner-design_179970-6409.jpg?w=2000" />
                    </div>
                    <div>
                        <DayPicker />
                    </div>
                </div>
            </div>
            <Footer></Footer>
            </div>
    );
};

export default Calender;