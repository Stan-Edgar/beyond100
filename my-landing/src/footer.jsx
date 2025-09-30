import react from 'react';
import mail from "./assets/icons/mail.svg";
import phone from "./assets/icons/Phone.svg";

export default function Footer() {
    return (
        <div>

            <div>
                <img src="" alt="Beyond100 Logo" />
                <p>© 2025 Beyond100.</p>
            </div>

            <div>
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