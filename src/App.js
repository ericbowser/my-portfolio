import React, {useEffect, useState} from "react";
import {AiFillGithub, AiFillLinkedin} from "../node_modules/react-icons/ai/index.mjs";
import {CgMail} from "../node_modules/react-icons/cg/index.mjs";
import me from '../public/erb.jpg';
import Footer from './components/Footer';
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import EmailSubmit from "./components/EmailSubmit";
import {Element, scroller} from 'react-scroll';
import emailSubmit from "./api/emailApi";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [showContact, setShowContact] = useState(false);
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

    const scrollToElement = () => {
        scroller.scrollTo('EmailSubmit', {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    useEffect(() => {
        scrollToElement();
    }, [showContact]);

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className={'flex dark:bg-gray-800 dark:text-white bg-yellow-50'}>
                <div className={'dark:bg-gray-800 dark:text-white'}>
                    <Nav setDarkMode={setDarkMode} darkMode={darkMode}/>
                    <div className={'flex items-center justify-center dark:bg-gray-800 dark:text-white'}>
                        <div className="flex text-center pt-56">
                            <img
                                className=" rounded-xl w-30 h-60 object-cover"
                                src={me}
                                alt="E.R.B."
                            />
                            <ul className={'mt-8 ml-10 font-burtons size-3 text-xl text-teal-600'}>
                                <li>React</li>
                                <li>.NET</li>
                                <li>C#</li>
                                <li>JavaScript</li>
                                <li>Node</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'dark:bg-gray-800 dark:text-white'}>
                        <Element name="EmailSubmit" className="element">
                            {showContact && (
                                <div className="pt-20 text-center font-burtons">
                                    <div className="pb-28 dark:bg-gray-800 dark:text-white">
                                        <h2 className="text-2xl font-bold mb-6">Email Me</h2>
                                        <Form className="mb-4 dark:text-white" onSubmit={handleSubmit}>
                                            <label className="block text-sm font-bold mb-2" htmlFor="name">
                                                Name
                                            </label>
                                            <input
                                                onChange={event => setName(event.target.value)}
                                                className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="name"
                                                type="text"
                                                placeholder="Name"/>
                                            <div className="mb-4 dark:text-white">
                                                <label className="block text-sm font-bold mb-2 mt-4" htmlFor="name">
                                                    Email
                                                </label>
                                                <input
                                                    onChange={event => setFrom(event.target.value)}
                                                    className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                                    className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                                    className="shadow appearance-none border rounded  w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-10"
                                                    id="message"
                                                    rows={10}
                                                    placeholder="Email Message"/>
                                            </div>
                                            <div className={'pt-3'}>
                                                <Button
                                                    className={'bg-green-400 text-gray-700 pointer-events-auto p-3 cursor-pointer z-50'}
                                                    type={'submit'}>
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
                            )}
                        </Element>
                        <h2 className={'mt-2 py-8 text-3xl font-medium text-teal-600 text-center font-burtons dark:text-white dark:bg-gray-800'}>
                            Eric Ryan Bowser
                        </h2>
                        <div className={'text-xl flex justify-center gap-16 p-3 cursor-pointer'}>
                            <a href={'https://github.com/ericbowser/'}>
                                <AiFillGithub size={40} color={'brown'}/>
                            </a>
                            <a href={'https://www.linkedin.com/in/eric-bowser-dev/'}>
                                <AiFillLinkedin size={40} color={'brown'}/>
                            </a>
                            <Element to={"EmailSubmit"} smooth={true} duration={500}>
                                <a onClick={() => setShowContact(true)}>
                                    <CgMail size={40} color={'brown'}/>
                                </a>
                            </Element>
                        </div>
                        <div style={{marginLeft: '6%', marginRight: '6%', marginTop: '4%'}}>
                            <h1 className={'text-2xl dark:text-white font-extrabold text-center font-burtons'}>
                                Skills
                            </h1>
                            <div
                                className={'text-black flex flex-col md:flex-row sm:flex-row flex-wrap dark:text-white dark:bg-gray-800'}>
                                <Cards/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'fixed-bottom dark:bg-gray-800 dark:text-white bg-yellow-50'}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
