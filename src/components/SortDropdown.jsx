import React, { useContext } from 'react';
import { AppsContext } from '../useContexts/AppsContext';

const SortDropdown = () => {
    const { sortBy, setSortBy, sortOrder, setSortOrder } = useContext(AppsContext);
    return (
        <>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                className='border p-2 ml-2 rounded cursor-pointer'>
                <option value="">Sort</option>
                <option value="size">Sort by Size</option>
                <option value="reviews">Sort by Reviews</option>
                <option value="downloads">Sort by Downloads</option>
                <option value="ratings">Sort by Ratings</option>
            </select>
            <button className='border rounded px-3 py-1.5 bg-gray-100 transition duration-200 cursor-pointer'
                    onClick={()=>setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
                {sortOrder === "asc" ? "↑ Asc" : "↓ Desc"}
            </button>
        </>
    );
};

export default SortDropdown;