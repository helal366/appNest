import React from 'react';
import { Link, useRouteError } from 'react-router';
import error_404 from '../assets/error-404.png'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-linear-to-r from-pink-100 via-purple-100 to-blue-100 overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full opacity-30 animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full opacity-30 animate-pulse translate-x-1/2 translate-y-1/2"></div>

            <div className="text-center z-10">
                <img src={error_404} alt="Error image" className='animate-pulse' />
                <p className="mt-4 text-2xl font-semibold text-gray-700">
                    Oops! Something went wrong.
                </p>
                <p className="mt-2 text-gray-500">
                    {error?.statusText || error?.message || "Page not found."}
                </p>
                <Link
                    to="/"
                    className="mt-6 inline-block px-6 py-3 bg-purple-500 text-white font-bold rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-purple-600"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;