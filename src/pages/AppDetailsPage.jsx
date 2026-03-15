import React, { useContext } from 'react';
import { useParams } from 'react-router';
import AppsContext from '../context/AppsContext';

const AppDetailsPage = () => {
    const { id } = useParams();
    const { apps } = useContext(AppsContext);
    const clickedApp = apps.find(app => app.id == id);
    if (!clickedApp) {
        return (
            <section className="padding text-center text-red-500">
                App not found!
            </section>
        );
    }
    console.log(clickedApp);
    return (
        <section className='padding'>
            App details page {id}
        </section>
    );
};

export default AppDetailsPage;