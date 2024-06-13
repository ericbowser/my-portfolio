import React, {useState, useEffect} from "react";
import Nav from "./Nav";

const EmailSubmit = ({darkMode = ''}) => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [home, setHome] = useState('/contact');

    useEffect(() => {
    }, [name, message, status, home]);

    // Prepare the payload
    const emailData = {
        name,
        subject,
        message,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)

        // Prepare the payload
        const emailData = {
            name,
            subject,
            message,
        };

        // Send the email
        /*   try {
               const response = await fetch('/api/send-email', {
                   method: 'POST',
                   headers: {
                       'Content-Type': 'application/json',
                   },
                   body: JSON.stringify(emailData),
               });
   
               if (response.ok) {
                   setStatus('Email sent successfully!');
                   setName('');
                   setSubject('');
                   setMessage('');
               } else {
                   setStatus('Failed to send email.');
               }
           } catch (error) {
               setStatus('An error occurred.');
           }*/
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <div
                className="dark:bg-gray-800 dark:text-white container-sm max-w-md mx-auto my-10 bg-white p-8 rounded-md shadow-cyan-500/20 dark:shadow-cyan-500/30">
                <Nav/>
                <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                    {/*     {status && (
                    <div className="mt-4">
                        <p>{status}</p>
                    </div>
                )}*/}
                </form>
            </div>
        </div>
    );
    /*
            <div className={'container dark:bg-gray-800 dark:text-white text-black bg-white font-burtons'}>
                <form>
                    
                    <button className={'cursor-pointer'}
                            type="submit">
                        Submit Email
                    </button>
    
                </form>
            </div>
        )
    */
}

export default EmailSubmit;