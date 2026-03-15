// AppDetailsPage.jsx
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router';
import AppsContext from '../context/AppsContext';
import { Download, Star } from 'lucide-react';
import AppDetailsStats from '../components/AppDetailsStats';
import AppDetailsTitle from './AppDetailsTitle';
import Loading from '../components/Loading';

const AppDetailsPage = () => {
    const { id } = useParams();
    const { apps } = useContext(AppsContext);

    if (!apps) {
        return <p className="text-center mt-10 text-gray-600"><Loading/></p>;
    }

    const clickedApp = apps.find(app => app.id.toString() === id);

    if (!clickedApp) {
        return (
            <section className="min-h-screen flex flex-col justify-center items-center text-red-500">
                <h1 className="text-4xl font-bold mb-4">App Not Found</h1>
                <p className="mb-6">We couldn’t find the app you’re looking for.</p>
                <Link
                    to="/apps"
                    className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-600 transition transform hover:scale-105"
                >
                    Back to Apps
                </Link>
            </section>
        );
    }

    return (
        <section className="min-h-screen padding bg-gray-50 flex justify-center">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row gap-3 lg:gap-6">
                {/* app image */}
                <div className="md:w-1/3">
                    <img
                        src={clickedApp.image}
                        alt={clickedApp.title}
                        className="w-full h-64 md:h-full object-cover rounded"
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
                            className="inline-block cursor-pointer rounded px-6 py-3 bg-green-400 transition-transform duration-300 hover:scale-105">
                            Install Now 
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDetailsPage;