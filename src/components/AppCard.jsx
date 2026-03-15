import React from 'react';
import { Download, Star } from "lucide-react";

const AppCard = ({app}) => {
    const {downloads, image, ratingAvg, title, description}=app;
    // const formatDownloads = 
    return (
        <div className="card bg-white shadow-sm p-5 rounded hover:scale-102 cursor-pointer">
            <figure className='bg-[#f1f1f1] p-4'>
                <img 
                    src={image}
                    alt="App image" />
            </figure>
            <div>
                <p className='font-bold my-2 truncate'>{title}: {description}</p>
                <div className='flex justify-between gap-6 flex-wrap mb-5 font-bold'>
                    <div className='flex gap-2 text-green-500 bg-[#f1f1f1] rounded p-3 justify-center mb-3 items-center'>
                        <span><Download size={16} stroke='currentColor'/></span>
                        <span>{new Intl.NumberFormat("en-US", {notation: "compact"}).format(downloads)}</span>
                    </div>
                    <div className='flex gap-2 text-yellow-500 bg-[#f1f1f1] rounded p-3 justify-center mb-3 items-center'>
                        <span><Star size={16} stroke='currentColor' fill='currentColor'/></span>
                        <span>{ratingAvg}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;