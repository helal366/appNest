import React from 'react';
import { Download, Star } from "lucide-react";
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const { downloads, image, ratingAvg, title, id } = app;
    return (
        <Link to={`/app_details/${id}`}>
            <div data-aos="zoom-in">
                <div className="card h-full cursor-pointer bg-white shadow-sm px-2 pt-2 rounded style1">
                    <figure className='bg-[#f1f1f1] '>
                        <img className='rounded object-cover object-top h-64'
                            src={image}
                            alt={title} />
                    </figure>
                    <div>
                        <p className='font-bold my-2 truncate text-center'>{title}</p>
                        <div className='flex justify-between gap-6 flex-wrap mb-2 font-bold'>
                            <div className='flex gap-2 text-green-500 bg-gray-200/90 rounded justify-center mb-1 items-center badge'>
                                <span><Download size={16} stroke='currentColor' /></span>
                                <span>{new Intl.NumberFormat("en-US", { notation: "compact" }).format(downloads)}</span>
                            </div>
                            <div className='flex gap-2 text-yellow-500 bg-gray-200/90 rounded justify-center mb-2 items-center badge'>
                                <span><Star size={16} stroke='currentColor' fill='currentColor' /></span>
                                <span>{ratingAvg}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;