import img1 from '../assets/devilgirl.png';
import img2 from '../assets/flowers.png';
import img3 from '../assets/megapersonals.png';
import img4 from '../assets/meetnow.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
        <div className='flex items-center justify-center mt-2'>
            <div className='w-1/5 text-center'>
        <img  className='w-52 relative' src={img1} alt=""/>
        <Link to={'/login'}><button className='bg-[#58c2fd] font-bold text-lg px-8 py-1 text-white rounded absolute top-[45%] left-[28%] shadow'>POST NOW</button></Link>
        <div className='text-center space-y-2'>
        <p className='mt-10 text-red-800 font-bold'>Select Location</p>
        <a className='underline text-[#fcb9e3] font-semibold text-sm' href="">change location</a>
        <div className='w-full flex justify-center items-center'>
        <img className='w-36' src={img2} alt="" />
        </div>
        </div>
            </div>
            

            <div className='w-1/3 h-[100%] text-center space-y-5'>
                <img className='w-[500px] mt-7' src={img3} alt="" />
                <img src={img4} alt="" />

                <h1 className='font-bold italic text-xl text-[#dcd1b1]'>MegaPersonals is restricted to
                persons 18 years of age or older*</h1>
                <div className=' space-y-3'>
                <button className='bg-[#c75400] w-[390px] text-white px-32 py-2 text-3xl rounded shadow-2xl'>W seek M</button>
                <button className='bg-[#ffa300] w-[390px] text-white px-32 py-2 text-3xl rounded shadow-2xl'>M seek W</button>
                <button className='bg-[#e7c660] w-[390px] text-white px-32 py-2 text-3xl rounded shadow-2xl'>M seek M</button>
                <button className='bg-[#857a30] w-[390px] text-white px-32 py-2 text-3xl rounded shadow-2xl'>W seek W</button>
                <button className='bg-[#a6a3a3] w-[390px] text-white px-32 py-2 text-3xl rounded shadow-2xl'>Trans</button>
                </div>
            </div>
        </div>
        <div className='max-w-xl mx-auto text-center mt-5'>
                <h1 className='text-normal text-[#edddc0]  italic'><span className='font-bold'>MegaPersonals</span> is a classifieds service for people wanting to <span className='text-[#21d42b] font-bold'>MEET NOW!</span> One may respond to ads via phone, by text or email.</h1>

                <div className='text-sm mt-5 text-[#046aaf]'>
                    <a href="https://megapersonals.eu/home">Home | </a>
                    <a href="https://megapersonals.eu/users/posts/list?publicDomain=megapersonals.eu">Manage Posts | </a>
                    <a href="https://megapersonals.eu/public/contact_us">Contact Us | </a>
                    <a href="https://megapersonals.eu/public/terms">Policies & Terms</a>
                </div>
            </div>
        </>
    );
};

export default Home;

