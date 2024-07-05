import React, {useState, useEffect} from "react";
import emailSubmit from '../api/emailApi';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EmailSubmit = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [from, setFrom] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
    }, [name, from, message, subject, emailSent]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const emailParams = {
                from,
                subject,
                message
            }
            const x = await emailSubmit(emailParams);
            if (x.data === 'Email Sent!') {
                setEmailSent(true);
            } else {
                setEmailSent(false);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="pt-20 text-center font-burtons">
            <div className="pb-28 dark:bg-gray-800 dark:text-white">
                <h2 className="text-2xl font-bold mb-6">Email Me</h2>
                <Form className="mb-4 dark:text-white" onSubmit={handleSubmit}>
                    <label className="block text-sm font-bold mb-2"
                           htmlFor="name">
                        Name
                    </label>
                    <input
                        onChange={event => setName(event.target.value)}
                        className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"/>
                    <div className="mb-4 dark:text-white">
                        <label className="block text-sm font-bold mb-2"
                               htmlFor="name">
                            Email
                        </label>
                        <input
                            onChange={event => setFrom(event.target.value)}
                            className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            onChange={event => setSubject(event.target.value)}
                            className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="subject"
                            type="text"
                            placeholder="Subject"/>
                    </div>
                    <div className="dark:text-white">
                        <label className="block text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            onChange={event => setMessage(event.target.value)}
                            className="shadow appearance-none border rounded  w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-10"
                            id="message"
                            rows={10}
                            placeholder="Email Message"/>
                    </div>
                    <div className={'pt-3'}>
                        <Button className={'bg-green-400 text-gray-700 pointer-events-auto p-3 cursor-pointer z-50'} type={'submit'}>
                            Submit Email
                        </Button>
                    </div>
                </Form>
                {emailSent && (
                    <div className={'text-green-400 font-bold text-2xl'}>
                        <p>Email Sent!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EmailSubmit;