// AppDetailsPage.jsx
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router';
import AppsContext from '../context/AppsContext';
import { Download, Star } from 'lucide-react';
import AppDetailsStats from '../components/AppDetailsStats';
import AppDetailsTitle from '../components/AppDetailsTitle';
import Loading from '../components/Loading';
import AppDetailsRatingsChart from '../components/AppDetailsRatingsChart';

const AppDetailsPage = () => {
    const { id } = useParams();
    const { apps } = useContext(AppsContext);
    if (!apps) {
        return <Loading/>
    }
    const clickedApp = apps.find(app => app.id.toString() === id);
    if (!clickedApp) {
        return <Loading/>;
    }

    return (
        <section className="min-h-screen padding bg-gray-50 mb-40">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row gap-3 lg:gap-6 mb-10">
                {/* app image */}
                <div className="md:w-1/3">
                    <img
                        src={clickedApp.image}
                        alt={clickedApp.title}
                        className="w-full h-64 md:h-full object-cover object-top-left rounded"
                    />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    {/* app info */}
                    <div>
                        <AppDetailsTitle clickedApp={clickedApp} />
                        <AppDetailsStats clickedApp={clickedApp} />
                    </div>
                    {/* Back Button */}
                    <div className="mt-6">
                        <Link
                            to="/apps"
                            className="inline-block cursor-pointer rounded px-6 py-3 bg-green-300 transition-transform duration-300 hover:scale-105">
                            Install Now ({clickedApp.size})MB
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <AppDetailsRatingsChart clickedApp={clickedApp}/>
            </div>
        </section>
    );
};

export default AppDetailsPage;