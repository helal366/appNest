import { useContext } from 'react';
import { AppsContext } from '../useContexts/AppsContext';
import { useApps } from '../customHooks/useApps';
import Loading from '../components/Loading';
import FetchErrorComponent from '../components/FetchErrorComponent';
import InstalledCard from '../components/InstalledCard';
import SortDropdown from '../components/SortDropdown';

const InstallationPage = () => {
    const { installedIDs,sortBy,sortOrder } = useContext(AppsContext);
    const { data: apps, isLoading, error } = useApps();
    if (isLoading) return <Loading />
    if (error) return <FetchErrorComponent error={error} />
    if (!apps) return <p className='text-red-600 py-10 text-center font-semibold text-lg'>App not found</p>
    const installedApps = apps.filter(ap => installedIDs.includes(JSON.stringify(ap.id)));
    const sortedApps = [...installedApps].sort((a,b)=>{
        if(!sortBy) return 0;
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        if(sortOrder === "asc") return aValue - bValue;
        return bValue -aValue;
    })
    return (
        <section className='padding pb-10'>
            {/* heading */}
            <div className='text-center py-10'>
                <h2>Your Installed Apps</h2>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 gap-3'>
                <p className='font-bold text-md'>({installedApps.length}) Apps Found</p>
                <div className='relative '>
                    <SortDropdown />
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                {
                    sortedApps.map(app => <InstalledCard key={app.id} app={app} />)
                }
            </div>
        </section>
    );
};

export default InstallationPage;