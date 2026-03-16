import React from 'react';

const AppDetailsTitle = ({ clickedApp }) => {
    return (
        <div>
            <h1 className="text-xl font-bold mb-2">{clickedApp.title}</h1>
            <p className="text-gray-700 mb-4">{clickedApp.companyName}</p>
        </div>
    );
};

export default AppDetailsTitle;