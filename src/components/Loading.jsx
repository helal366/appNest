import React from 'react';
import logo from '../assets/logo.png'

const Loading = () => {
    return (
        <section className='min-h-screen flex justify-center items-center'>
            <h2>L </h2>
            <img src={logo} alt="Logo icon" className='animate-spin w-16 h-16 mx-5'/>
            <h2> ADING...</h2>
        </section>
    );
};

export default Loading;