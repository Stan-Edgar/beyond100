import React from "react";
import icons from "./icons.js";



export default function Pricing() {
    return (
        <>
        <div className='flex flex-col items-center mt-10 mb-24 font-manrope gap-10 '>

            <h1 className='text-[3.375rem] tracking-[-0.20rem] flex flex-col text-center  leading-[1.1] font-bold'>
            <span>No Surprises,</span>
            <span>Transparent Pricing</span>
            </h1>
        
            <div className="flex gap-6 font-manrope">
                <div className="w-[380px] h-[486px] pl-[1.25rem] pt-5 bg-[linear-gradient(180deg,#141720_0%,#0E0F14_100%)] outline outline-[4px] outline-[#813FF4] outline-offset-[0px] m-1 rounded-[20px]">
                    <h2 className='text-[1.50rem] tracking-tight font-medium text-[#FFFFFFA6] ml-3'>Website Design</h2>
                    <h1 className="font-satoshi text-[3rem] text-white font-bold tracking-tight ml-3 mb-2">$1,499</h1>
                    <div className="flex justify-center w-[19.125rem] text-white text-[0.75rem] bg-[#A26CFF80] ml-3 py-1 rounded-md border border-[#813FF4]">launch your dream website in just days, not months.</div>
                    <div className="w-[20rem] border-t border-white/10 mt-4 mb-5"></div>

                    <div className="flex flex-col gap-1.5 font-manrope text-white/85 pl-3">
                    <div className="flex gap-1.5">
                        <img src={icons.fileAmnt} width="20" height="20" alt="file icon" />
                        <p>6 Pages</p>
                    </div>
                <div className="flex gap-1.5">
                    <img src={icons.customerObs} width="20" height="20" alt="customer icon" />
                    <p>Customer obsessed approach</p>
                </div>
                <div className="flex gap-1.5">
                    <img src={icons.revisions} width="20" height="20" alt="revisions icon" />
                    <p>Unlimited revisions</p>
                </div>
                <div className="flex gap-1.5">
                    <img src={icons.coin} width="20" height="20" alt="Conversion icon" />
                    <p>Conversion-driven</p>
                </div>
                <div className="flex gap-1.5">
                    <img src={icons.dev} width="20" height="20" alt="dev icon" />
                    <p>Custom development</p>
                </div>
                <div className="flex gap-1.5">
                    <img src={icons.handCollab} width="20" height="20" alt="collab icon" />
                    <p>Collaborative process</p>
                </div>
                    </div>

                    <div className="w-[21.375rem] h-[3rem] mt-[3.25rem] bg-white flex justify-center items-center rounded-xl font-satoshi text-[1.5rem] font-medium cursor-pointer"><a href="https://calendly.com/thestanedgar/15mins" target='_blank'>Book a call</a></div>
                </div>

                <div className="w-[380px] h-[486px] pl-[1.25rem] pt-5 bg-white outline outline-[4px] outline-black/10 outline-offset-4 m-1 rounded-[20px]">
                    <h2 className='text-[1.50rem] tracking-tight font-medium text-black/65 ml-3'>Enterprise</h2>
                    <h1 className="font-satoshi text-[3rem] text-black font-bold tracking-tight ml-3 mb-2">Custom Quote</h1>
                    <div className="flex justify-center w-[19.125rem] text-black/85 text-[0.75rem] bg-[#D7D7DB80] ml-3 py-1 rounded-md border border-[#D7D7DB]">Big brands with big ideas need elite design support.</div>
                    <div className="w-[20rem] border-t border-black/10 mt-4 mb-5"></div>

                    <div className="flex flex-col gap-1.5 font-manrope pl-3 text-black/85">
                        <div className="flex gap-1.5">
                            <img src={icons.multiplePages} width="20" height="20" alt="files icon" />
                            <p>Multiple site pages</p>
                        </div>
                        <div className="flex gap-1.5">
                            <img src={icons.team} width="20" height="20" alt="Team icon" />
                            <p>Team collaboration</p>
                        </div>
                        <div className="flex gap-1.5">
                            <img src={icons.priority} width="20" height="20" alt="Priority icon" />
                            <p>Priority support</p>
                        </div>
                        <div className="flex gap-1.5">
                            <img src={icons.branding} width="20" height="20" alt="Branding plus Logo icon" />
                            <p>Branding + Logo</p>
                        </div>
                        <div className="flex gap-1.5">
                            <img src={icons.quickDelivery} width="20" height="20" alt="Quick delivery icon" />
                            <p>Quick Delivery</p>
                        </div>
                        <div className="flex gap-1.5">
                            <img src={icons.projectManage} width="20" height="20" alt="Project Management icon" />
                            <p>Expert project management</p>
                    </div>
                </div>

                <div className="w-[21.375rem] h-[3rem] mt-[3.25rem] bg-black text-white flex justify-center items-center rounded-xl font-satoshi text-[1.5rem] font-medium cursor-pointer"><a href="https://calendly.com/thestanedgar/15mins" target='_blank'>Book a call</a></div>
                </div>
            </div>

        </div>
         
        

        </>
       
        
    );
}