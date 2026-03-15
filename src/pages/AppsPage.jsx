import React, { useContext, useState } from 'react';
import AppsContext from '../context/AppsContext';
import AppCard from '../components/AppCard';
import { Search } from 'lucide-react';
import NoAppFound from '../components/NoAppFound';

const AppsPage = () => {
    const [searchText, setSearchText]=useState("");
    const { apps } = useContext(AppsContext);
    const filteredApps=apps.filter(app=>app.title.toLowerCase().includes(searchText.toLocaleLowerCase()))
    return (
        <section className='padding'>
            <div className='text-center py-10'>
                <h2>Our All Applications</h2>
                <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between items-center mb-5'>
                <p className='font-bold text-md'>({apps.length}) Apps Found</p>
                <div className='relative '>
                    <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'/>
                    <input type="search" placeholder='search Apps'
                        onChange={(e)=>setSearchText(e.target.value)}
                        value={searchText}
                        className='border border-gray-400 bg-white rounded shadow py-3 pl-11 pr-4' />
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                   filteredApps.length> 0 ? (
                     filteredApps.map(app => <AppCard key={app.id} app={app} />)
                   ) : <NoAppFound/>
                }
            </div>
        </section>
    );
};

export default AppsPage;