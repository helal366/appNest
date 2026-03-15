import { SearchX } from 'lucide-react';
import React from 'react';

const NoAppFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center col-span-full">

            <div className="bg-gray-100 p-6 rounded-full mb-6 animate-bounce">
                <SearchX size={48} className="text-gray-400" />
            </div>

            <h3 className="text-2xl font-bold text-gray-700 mb-2 animate-pulse">
                No Apps Found
            </h3>

            <p className="text-gray-500 max-w-md">
                We couldn't find any apps matching your search.
                Try searching with a different keyword.
            </p>

        </div>
    );
};

export default NoAppFound;