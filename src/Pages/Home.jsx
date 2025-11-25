import React from 'react';
import Hero from '../Components/Hero';
import Wave from "../../src/assets/wave.svg"


const Home = () => {
    return (
        <div>
            
            <div className='relative min-h-[calc(100vh-116px)] flex flex-col items-center justify-center'>
                <Hero></Hero>
                
                    <img className='absolute bottom-0 w-full' src={Wave} alt=""/>
                
            </div>
        </div>
    );
};

export default Home;