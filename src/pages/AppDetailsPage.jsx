import { useParams, Link } from 'react-router';
import AppDetailsStats from '../components/AppDetailsStats';
import AppDetailsTitle from '../components/AppDetailsTitle';
import Loading from '../components/Loading';
import AppDetailsRatingsChart from '../components/AppDetailsRatingsChart';
import { useSingleApp } from '../customHooks/useApps';

const AppDetailsPage = () => {
    const { id } = useParams();
    const { data:app, isLoading, error } = useSingleApp(id);
    if (!app || isLoading) {
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

    return (
        <section className="min-h-screen padding bg-gray-50 pt-10 pb-40">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row gap-3 lg:gap-6 mb-20">
                {/* app image */}
                <div className="md:w-1/3">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-64 md:h-full object-cover object-top-left rounded"
                    />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    {/* app info */}
                    <div>
                        <AppDetailsTitle clickedApp={app} />
                        <AppDetailsStats clickedApp={app} />
                    </div>
                    {/* Back Button */}
                    <div className="mt-6">
                        <Link
                            to="/apps"
                            className="inline-block cursor-pointer rounded px-6 py-3 bg-green-300 transition-transform duration-300 hover:scale-105">
                            Install Now ({app.size})MB
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <AppDetailsRatingsChart clickedApp={app}/>
            </div>
        </section>
    );
};

export default AppDetailsPage;