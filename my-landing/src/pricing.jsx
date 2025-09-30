import React from "react";
import icons from "./icons.js";



export default function Pricing() {
    return (
        <>
        <div>

            <h1>
            <span>No Surprises,</span>
            <span>Transparent Pricing</span>
            </h1>
        
            <div>
                <div>
                    <h2>Website Design</h2>
                    <h1>$1,499</h1>
                    <div>launch your dream website in just days, not months.</div>
                    <div></div>

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