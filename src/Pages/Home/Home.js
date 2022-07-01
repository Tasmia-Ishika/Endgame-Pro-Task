import React from 'react';
import Footer from '../Shared/Footer';
import AddToDo from './AddToDo';
import Banner from './Banner';
import Task from './Task';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Task></Task>
            <AddToDo></AddToDo>
            <Footer></Footer>
        </div>
    );
};

export default Home;