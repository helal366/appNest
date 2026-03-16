import React, { useState } from 'react';
import { useContext } from 'react';
import { AppsContext } from '../useContexts/AppsContext';
import { useApps } from '../customHooks/useApps';
import Loading from '../components/Loading';
import FetchErrorComponent from '../components/FetchErrorComponent';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import InstalledCard from '../components/InstalledCard';

const InstallationPage = () => {
    const [searchText, setSearchText]=useState("");
    const {installedIDs}=useContext(AppsContext);
    const {data: apps, isLoading, error} =useApps();
    if(isLoading) return <Loading/>
    if(error) return <FetchErrorComponent error={error}/>
    if(!apps) return <p className='text-red-600 py-10 text-center font-semibold text-lg'>App not found</p>
    const installedApps = apps.filter(ap=>installedIDs.includes(JSON.stringify(ap.id)));
    return (
        <section className='padding pb-10'>
            <div className='text-center py-10'>
                <h2>Your Installed Apps</h2>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 gap-3'>
                <p className='font-bold text-md'>({installedApps.length}) Apps Found</p>
                <div className='relative '>
                    {/* <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'/> */}
                    <input type="search" placeholder='Sort by Size'
                        onChange={(e)=>setSearchText(e.target.value)}
                        value={searchText}
                        className='border border-gray-400 bg-white rounded shadow py-3 pl-4 pr-11 ' />
                    <IoMdArrowDropdownCircle className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer'/>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                {
                    installedApps.map(app=> <InstalledCard key={app.id} app={app}/>)
                }
            </div>
        </section>
    );
};

export default InstallationPage;