import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header'
import Shop from '../component/Shop/Shop'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;