import React from "react";
import icons from "./icons.js";



export default function Pricing() {
    return (
        <>
        <div className='flex flex-col items-center mt-10 font-manrope gap-10 '>

            <h1 className='text-[3.375rem] tracking-[-0.20rem] flex flex-col text-center  leading-[1.1] font-bold'>
            <span>No Surprises,</span>
            <span>Transparent Pricing</span>
            </h1>
        
            <div className="flex gap-6">
                <div className="w-[380px] h-[460px] pl-8 pt-5 bg-[linear-gradient(180deg,#141720_0%,#0E0F14_100%)] outline outline-[4px] outline-[#813FF4] outline-offset-[0px] m-1 rounded-[20px]">
                    <h2 className='text-[1.50rem] tracking-tight font-medium text-[#FFFFFFA6]'>Website Design</h2>
                    <h1 className="font-satoshi text-[3rem] text-white font-bold tracking-tight mb-2">$1,499</h1>
                    <div className="flex justify-center w-[19.125rem] text-white text-[0.75rem] bg-[#A26CFF80] py-1 rounded-md border border-[#813FF4]">launch your dream website in just days, not months.</div>
                    <div className="w-[20rem] border-t border-white/10 mt-4"></div>

                    <div>
                    <div>
                        <img src={icons.fileAmnt} width="17" height="17" alt="file icon" />
                        <p>6 Pages</p>
                    </div>
                <div>
                    <img src={icons.customerObs} width="17" height="17" alt="customer icon" />
                    <p>Customer obsessed approach</p>
                </div>
                <div>
                    <img src={icons.revisions} width="17" height="17" alt="revisions icon" />
                    <p>Unlimited revisions</p>
                </div>
                <div>
                    <img src={icons.coin} width="17" height="17" alt="Conversion icon" />
                    <p>Conversion-driven</p>
                </div>
                <div>
                    <img src={icons.dev} width="17" height="17" alt="dev icon" />
                    <p>Custom development</p>
                </div>
                <div>
                    <img src={icons.handCollab} width="17" height="17" alt="collab icon" />
                    <p>Collaborative process</p>
                </div>
                    </div>

                    <div>Book a call</div>
           </div>


            <div>
                <h2>Enterprise</h2>
                <h1>Custom Quote</h1>
                <div>Big brands with big ideas need elite design support.</div>
                <div></div>

                <div>
                    <div>
                        <img src={icons.multiplePages} width="17" height="17" alt="files icon" />
                        <p>Multiple site pages</p>
                    </div>
                    <div>
                        <img src={icons.team} width="17" height="17" alt="Team icon" />
                        <p>Team collaboration</p>
                    </div>
                    <div>
                        <img src={icons.priority} width="17" height="17" alt="Priority icon" />
                        <p>Priority support</p>
                    </div>
                    <div>
                        <img src={icons.branding} width="17" height="17" alt="Branding plus Logo icon" />
                        <p>Branding + Logo</p>
                    </div>
                    <div>
                        <img src={icons.quickDelivery} width="17" height="17" alt="Quick delivery icon" />
                        <p>Quick Delivery</p>
                    </div>
                    <div>
                        <img src={icons.projectManage} width="17" height="17" alt="Project Management icon" />
                        <p>Expert project management</p>
                </div>
            </div>

            <div>Book a call</div>
           </div>
            </div>

        </div>
         
        

        </>
       
        
    );
}