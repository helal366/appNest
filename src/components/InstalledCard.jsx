import React from 'react';
// import download_image from '../assets/icon-downloads.png'
import { Download } from 'lucide-react';
import { RiStarSFill } from 'react-icons/ri';

const InstalledCard = ({ app }) => {
    const { image, title, downloads, ratingAvg, size } = app;
    console.log(app)
    return (
        <section className='border bg-amber-50 p-3 flex flex-col sm:flex-row sm:justify-between gap-2'>
            <div className='flex gap-5'>
                <img src={image} alt={title} className='w-16 h-16 rounded shadow-lg' />
                <div className='flex flex-col justify-between'>
                    <p className='font-bold '>{title}</p>
                    <div className='flex gap-2'>
                        <div className='flex items-center text-green-500'>
                            <Download size={16} stroke='currentColor' />
                            <p >
                                <small>{new Intl.NumberFormat("en-US", { notation: "compact" }).format(downloads)}</small>
                            </p>
                        </div>
                        <div className='flex items-center text-yellow-600'>
                            <RiStarSFill size={16} stroke='currentColor' />
                            <p >
                                <small>{new Intl.NumberFormat("en-US", { notation: "compact" }).format(ratingAvg)}</small>
                            </p>
                        </div>
                        <p className='text-gray-600'><small>{size}MB</small></p>
                    </div>
                </div>
            </div>
            <div className='bg-red sm:self-center'>
                <button className='rounded shadow bg-green-500 text-white font-semibold cursor-pointer px-3 py-1 hover:scale-103 hover:-translate-y-1 transition-all duration-200 active:scale-95'>
                    <small>Uninstall</small>
                </button>
            </div>
        </section>
    );
};

export default InstalledCard;