import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

const Root = () => {
    return (
        <div>
           <div className="h-16">
              <Nav></Nav>

           </div>
           <div className='min-h-[calc(100vh-116px)]'>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;