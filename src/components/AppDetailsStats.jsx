import React from 'react';
import reviews_image from '../assets/icon-review.png'
import download_image from '../assets/icon-downloads.png'
import rating_image from '../assets/icon-ratings.png'

const AppDetailsStats = ({ clickedApp }) => {
    const { downloads, reviews, ratingAvg } = clickedApp;
    // console.log(clickedApp)
    return (
        <section className="bg-linear-to-br from-gray-300 to-gray-100 py-10 mb-10">
            <div className='flex flex-wrap justify-center gap-10'>
                {/* 1 */}
                <div className='stats'>
                    <div className='stat'>
                        <div className='stat-figure flex flex-col items-center'>
                           <div>
                                <img src={download_image} alt="Download icon" />
                            </div>
                            <p><small>Downloads</small></p>
                            <h2 >
                                {new Intl.NumberFormat("en-US", { notation: "compact" }).format(downloads)}
                            </h2>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className='stats'>
                    <div className='stat'>
                        <div className='stat-figure flex flex-col items-center'>
                            <div>
                                <img src={rating_image} alt="Rating icon" />
                            </div>
                            <p><small>Average Ratings</small></p>
                            <h2>
                                {ratingAvg}
                            </h2>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className='stats'>
                    <div className='stat'>
                        <div className='stat-figure flex flex-col items-center'>
                            <div>
                                <img src={reviews_image} alt="Review icon" />
                            </div>
                            <p><small>Reviews</small></p>
                            <h2>
                                {new Intl.NumberFormat("en-US", { notation: "compact" }).format(reviews)}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default AppDetailsStats;