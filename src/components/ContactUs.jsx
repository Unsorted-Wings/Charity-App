import React from 'react';
import { FiSend } from 'react-icons/fi'; // Import the paper plane icon

const ContactUsPage = () => {
    return (
        <div className="pt-10 flex flex-col items-center justify-center h-80 bg-white">
            <FiSend className="text-rose-600 text-6xl mb-4" />

            <h1 className="text-4xl font-extrabold mb-6 text-rose-600">Let's Catch Up!</h1>

            <p className="text-lg text-rose-600 mb-6">
                Have questions or suggestions? Feel free to reach out to us. We value your feedback and are here to assist you.
            </p>

            <h2 className="text-2xl font-bold text-rose-600 mb-4">Send us a Message</h2>

        </div>
    );
};

export default ContactUsPage;
