import React from 'react';
import { useContext } from 'react';
import { AppsContext } from '../useContexts/AppsContext';
import { useApps } from '../customHooks/useApps';
import Loading from '../components/Loading';
import FetchErrorComponent from '../components/FetchErrorComponent';

const InstallationPage = () => {
    const {installedIDs}=useContext(AppsContext);
    const {data: apps, isLoading, error} =useApps();
    if(!apps || isLoading) return <Loading/>
    if(error) return <FetchErrorComponent error={error}/>
    const installedApps = apps.filter(ap=>installedIDs.includes(ap.id));
    return (
        <section className='padding py-10'>
            Installed Apps: {installedApps.length}
            <div></div>
        </section>
    );
};

export default InstallationPage;