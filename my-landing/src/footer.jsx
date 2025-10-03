import react from 'react';
import mail from "./assets/icons/mail.svg";
import phone from "./assets/icons/Phone.svg";
import Logo from './assets/Logo100.png';

export default function Footer() {
    return (
        <div className='flex w-full h-[169px] px-[5.5rem] py-10 mt-[5.5rem] font-manrope border'>
            <svg width="1440" height="169" class="absolute top-0 left-0 w-[1440px] h-[169px]">
    <rect x="0" y="0" width="1440" height="169" fill="none"
      stroke="rgba(0,0,0,0.24)" stroke-width="1"
      stroke-dasharray="134.75 134.75" />
  </svg>

            <div className='flex flex-col'>
                <img src={Logo} alt="Beyond100 Logo" />
                <p>© 2025 Beyond100.</p>
            </div>

            <div className='flex flex-col'> 
                <div>
                    <img src={mail} alt="email" />
                    <p>thestanedgar@gmail.com</p>
                </div>
                <div>
                    <img src={phone} alt="phone number" />
                    <p>501+ 605-2305</p>
                </div>
            </div>

        </div>
    );
};