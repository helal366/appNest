import React, { useContext } from 'react';
import { AppsContext } from '../useContexts/AppsContext';

const SortDropdown = () => {
    const { sortBy, setSortBy } = useContext(AppsContext);
    return (
        <>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                className='border p-2 ml-2 rounded'>
                <option value="">Sort</option>
                <option value="size">Sort by Size</option>
                <option value="reviews">Sort by Reviews</option>
                <option value="downloads">Sort by Downloads</option>
                <option value="ratings">Sort by Ratings</option>
            </select>
        </>
    );
};

export default SortDropdown;