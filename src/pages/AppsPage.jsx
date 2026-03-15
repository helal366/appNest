import React, { useContext } from 'react';
import AppsContext from '../context/AppsContext';
import AppCard from '../components/AppCard';
import { Search } from 'lucide-react';

const AppsPage = () => {
    const { apps } = useContext(AppsContext);
    console.log(apps)
    return (
        <section className='padding'>
            <div className='text-center py-10'>
                <h2>Our All Applications</h2>
                <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between items-center mb-5'>
                <p className='font-bold text-md'>(132) Apps Found</p>
                <div className='relative '>
                    <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'/>
                    <input type="search" name="" id="" placeholder='search Apps'
                        className='border border-gray-400 bg-white rounded shadow py-3 pl-11 pr-4' />
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    apps.map(app => <AppCard key={app.id} app={app} />)
                }
            </div>
        </section>
    );
};

export default AppsPage;