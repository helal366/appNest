import AppCard from '../components/AppCard';
import { Search } from 'lucide-react';
import NoAppFound from '../components/NoAppFound';
import { useApps } from '../customHooks/useApps';
import Loading from '../components/Loading';
import { useState } from 'react';
import { useScrollToTop } from '../customHooks/useScrollToTop';

const AppsPage = () => {
    useScrollToTop();
    const [searchText, setSearchText]=useState("");
    const { data:apps, isLoading, error } = useApps();
        if (!apps || isLoading) {
            return <Loading/>
        }
        
        if(error) {
        return (
          <div className='text-red-500 font-bold text-center spacy-y-0 pb-40'>
            <p>Something went wrong!!!</p>
            <p>{error?.message}</p>
          </div>
        )
      }
    const filteredApps=apps.filter(app=>app.title.toLowerCase().includes(searchText.toLocaleLowerCase()))
    return (
        <section className='padding pb-10'>
            <div className='text-center py-10'>
                <h2>Our All Applications</h2>
                <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5'>
                <p className='font-bold text-md'>({apps.length}) Apps Found</p>
                <div className='relative '>
                    <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'/>
                    <input type="search" placeholder='search Apps'
                        onChange={(e)=>setSearchText(e.target.value)}
                        value={searchText}
                        className='border border-gray-400 bg-white rounded shadow py-3 pl-11 pr-4' />
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5'>
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