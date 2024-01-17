import { useEffect } from 'react';
import img1 from '../assets/megaaa.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {


    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    return (
        <div className="max-w-6xl mx-auto max-h-screen">
            <div className="flex items-center justify-center">
               <div>
               <img className='mt-5 w-80' src={img1} alt=""/>
                <h1 className='text-center text-[#b7a690] mt-5'>Is this your first time posting?</h1>
                <div className='flex justify-center items-center mt-2'>
                <button className='bg-[#0492ff] text-white px-14 py-[2px] rounded font-bold text-xl'>Start Here</button>
                </div>
                <h1 className='text-center mt-5 text-[#b7a690]'>Already have an account?</h1>

                <form className='mt-5 text-center space-y-2'>
                <input className='w-[320px] font-light px-2 h-8 border-2 outline-none border-[#888888]' type="email" name="" id="" placeholder='Email'/>
                <br />
                <input className='w-[320px] font-light px-2 h-8 border-2 outline-none border-[#888888]' type="password" name="" id="" placeholder='Password'/>
                <br />
                <div className='flex items-center justify-center'>
                <LoadCanvasTemplate />
                </div>
                <input className='w-[320px] font-light px-2 h-8 border-2 outline-none border-[#888888]' type="text" name="" id="" placeholder='recapcha'/>
                
                <br />
                <input className='bg-[#feb161] px-5 py-2  text-white font-bold' type="submit" value="SUBMIT" />
                </form>

            
               </div>
               <div>
               </div>

            </div>
        </div>
    );
};

export default Login;


//color codes

//b7a690