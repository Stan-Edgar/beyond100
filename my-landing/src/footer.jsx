import react from 'react';
import mail from "./assets/icons/mail.svg";
import phone from "./assets/icons/Phone.svg";
import Logo from './assets/foologo.svg';

export default function Footer() {
    return (
        <div className='flex w-full h-[169px] px-[5.5rem] py-10 mt-[5.5rem] justify-between font-manrope border-t-2 border-dashed border-black/25'>
                <div className='flex flex-col gap-4'>
                <img src={Logo} alt="Beyond100 Logo" width='100' height='100'/>
                <p>© 2025 Beyond100.</p>
            </div>

            <div className='flex flex-col gap-4'> 
                <div className='flex gap-2'>
                    <img src={mail} alt="email" />
                    <p>thestanedgar@gmail.com</p>
                </div>
                <div className='flex gap-2'>
                    <img src={phone} alt="phone number" />
                    <p>501+ 605-2305</p>
                </div>
            </div>

        </div>
    );
};