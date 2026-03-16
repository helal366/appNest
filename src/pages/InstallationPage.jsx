import React from 'react';
import { useContext } from 'react';
import { AppsContext } from '../useContexts/AppsContext';
import { useApps } from '../customHooks/useApps';
import Loading from '../components/Loading';

const InstallationPage = () => {
    const {installedIDs}=useContext(AppsContext);
    const {data: apps, isLoading} =useApps();
    if(!apps || isLoading) return <Loading/>
    const installedApps = apps.filter(ap=>installedIDs.includes(ap.id));
    return (
        <section className='padding'>
            Installed Apps: {installedApps.length}
        </section>
    );
};

export default InstallationPage;