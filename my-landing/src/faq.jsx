import React from 'react';
import icons from "./icons.js";

export default function Faq() {
    return (
        <>
        <div className='flex flex-col items-center bg-black py-12 text-white gap-16 font-manrope'>
            <h2 className='text-[3.375rem]  tracking-[-0.20rem] flex flex-col text-center  leading-[1.1] font-bold'>Let's answer <br /> your questions</h2>

            <div className='flex flex-col items-center text-black gap-4'>
                <div className='flex w-[38.25rem] h-[4.25rem] items-center justify-between pl-[2rem] pr-4 bg-white border-2 border-[#F0F2F9] rounded-xl text-[1.125rem]'>
                    <p>How long does it take?</p>
                    <div className='w-11 h-11 bg-[#EAEAEC] rounded-full flex items-center justify-center '>
                    <img src={icons.plus} width='16' height='16' />
                    </div>
                </div>

                <div className='flex w-[38.25rem] h-[4.25rem] items-center justify-between pl-[2rem] pr-4 bg-white border-2 border-[#F0F2F9] rounded-xl text-[1.125rem]'>
                 <p>How do I get started?</p>
                 <div className='w-11 h-11 bg-[#EAEAEC] rounded-full flex items-center justify-center '>
                    <img src={icons.plus} width='16' height='16' />
                 </div>
                </div>

                <div className='flex w-[38.25rem] h-[4.25rem] items-center justify-between pl-[2rem] pr-4 bg-white border-2 border-[#F0F2F9] rounded-xl text-[1.125rem]'>
                    <p>How does payment work?</p>
                    <div className='w-11 h-11 bg-[#EAEAEC] rounded-full flex items-center justify-center '>
                    <img src={icons.plus} width='16' height='16' />
                 </div>
                </div>

                <div className='flex w-[38.25rem] h-[4.25rem] items-center justify-between pl-[2rem] pr-4 bg-white border-2 border-[#F0F2F9] rounded-xl text-[1.125rem]'>
                    <p>Do you offer ongoing support?</p>
                    <div className='w-11 h-11 bg-[#EAEAEC] rounded-full flex items-center justify-center '>
                    <img src={icons.plus} width='16' height='16' />
                 </div>
                </div>

                <div className='flex w-[38.25rem] h-[4.25rem] items-center justify-between pl-[2rem] pr-4 bg-white border-2 border-[#F0F2F9] rounded-xl text-[1.125rem]'>
                    <p>Who do you work with?</p>
                    <div className='w-11 h-11 bg-[#EAEAEC] rounded-full flex items-center justify-center '>
                    <img src={icons.plus} width='16' height='16' />
                 </div>
                </div>

                <div className='flex w-[38.25rem] h-[4.25rem] items-center justify-between pl-[2rem] pr-4 bg-white border-2 border-[#F0F2F9] rounded-xl text-[1.125rem]'>
                    <p>What if I don't like it?</p>
                    <div className='w-11 h-11 bg-[#EAEAEC] rounded-full flex items-center justify-center '>
                    <img src={icons.plus} width='16' height='16' />
                 </div>
                </div>

                <div className='flex w-[38.25rem] h-[4.25rem] items-center justify-between pl-[2rem] pr-4 bg-white border-2 border-[#F0F2F9] rounded-xl text-[1.125rem]'>
                    <p>Do you offer refunds?</p>
                    <div className='w-11 h-11 bg-[#EAEAEC] rounded-full flex items-center justify-center '>
                    <img src={icons.plus} width='16' height='16' />
                 </div>
                </div>
            </div>
            
        </div>

        </>
    );
};