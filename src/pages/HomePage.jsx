import googlePlay from '../assets/gs.png';
import appStore from '../assets/app_store.png';
import hero from '../assets/hero.png';
import AppCard from './../components/AppCard';
import { useNavigate } from 'react-router';
import { useApps } from '../customHooks/useApps';
import Loading from '../components/Loading';
const HomePage = () => {
    const navigate = useNavigate();
    const { data:apps, isLoading, error } = useApps();
    if (!apps || isLoading) return <Loading />
    if (error) {
        return (
            <div className='text-red-500 font-bold text-center spacy-y-0 pb-40'>
                <p>Something went wrong!!!</p>
                <p>{error?.message}</p>
            </div>
        )
    }
    const eightApps = apps.sort((a, b) => b.downloads - a.downloads).slice(0, 8);
    return (
        <>
            {/* hero */}
            <section className='padding' >
                <div className='text-center font-bold pt-10'>
                    <h1 className='text-[#001931]'>We Build</h1>
                    <h1 ><span className='text_gradient'>Productive</span> <span>Apps</span></h1>
                </div>
                <p className='text-gray-600 text-center md:mx-30 mb-6 md:mb-10'>
                    At appNest, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <div className='flex justify-center gap-3 mb-6 md:mb-10'>
                    <a href='https://play.google.com/store/games?device=phone&hl=en' target='blank'
                        className="btn1 border border-gray-300 rounded hover:scale-103 hover:-translate-y-1 transition-transform duration-200">
                        <img src={googlePlay} alt="" />
                        <span>Google Play</span>
                    </a>
                    <a href='https://apps.apple.com/us/iphone/today' target='blank'
                        className="btn1 border border-gray-300 rounded hover:scale-103 hover:-translate-y-1 transition-transform duration-200">
                        <img src={appStore} alt="" />
                        <span>App Store</span>
                    </a>
                </div>
                <div className='flex justify-center' data-aos="flip-left">
                    <img src={hero} alt="" />
                </div>
            </section>
            {/* stats */}
            <section data-aos="zoom-in"
            className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-10 text-white mb-10" >
                <h2 className='text-center font-semibold mb-4'>Trusted by Millions, Built for You</h2>
                <div className='flex flex-wrap justify-center gap-10'>
                    {/* 1 */}
                    <div className='stats'>
                        <div className='stat'>
                            <div className='stat-figure flex flex-col items-center'>
                                <p><small>Total Downloads</small></p>
                                <h1 >29.6M</h1>
                                <p><small>21% more than last month</small></p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='stats'>
                        <div className='stat'>
                            <div className='stat-figure flex flex-col items-center'>
                                <p><small>Total Reviews</small></p>
                                <h1>906K</h1>
                                <p><small>46% more than last month</small></p>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className='stats'>
                        <div className='stat'>
                            <div className='stat-figure flex flex-col items-center'>
                                <p><small>Active Apps</small></p>
                                <h1>132+</h1>
                                <p><small>31 more will Launch</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* eight apps */}
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10 padding'>
                {
                    eightApps.map(app => <AppCard key={app.id} app={app} />)
                }
            </section>
            <div className='pb-20 flex justify-center'>
                <button onClick={() => navigate('/apps')}
                    className="btn1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white  hover:opacity-90 hover:scale-103 hover:-translate-y-1 transition-all duration-200">
                    Show All
                </button>
            </div>
        </>
    );
};

export default HomePage;