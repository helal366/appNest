import React from 'react';

const AppsPage = () => {
    return (
        <section className='padding'>
            <div className='text-center py-10'>
                <h2>Our All Applications</h2>
                <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold text-md'>(132) Apps Found</p>
                <input type="search" name="" id="" 
                className='border border-gray-500 bg-white rounded shadow py-1 px-2'/>
            </div>
        </section>
    );
};

export default AppsPage;