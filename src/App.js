import React, {useEffect, useState} from "react";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {CgMail} from "react-icons/cg";
import me from '../public/erb.jpg';
import Footer from './components/Footer';
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import EmailSubmit from "./components/EmailSubmit";
import {Link, Element, scroller} from 'react-scroll';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [showContact, setShowContact] = useState(false);
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
                        <div className="flex text-center" style={{paddingTop: '150px'}}>
                            {/* Profile Image */}
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
                    <h2 className={'mt-2 py-8 text-3xl font-medium  text-teal-600 text-center font-burtons dark:text-white dark:bg-gray-800'}>Eric
                        Ryan Bowser</h2>
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
                    <div style={{marginLeft: '15%', marginRight: '15%', marginTop: '8%'}}>
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
            <div className={'dark:bg-gray-800 dark:text-white bg-yellow-50'} style={{paddingTop: '150px'}}>
                {showContact && (
                    <Element name="EmailSubmit" className="element">
                        <EmailSubmit/>
                    </Element>
                )}
            </div>
            <div className={'fixed-bottom p-12 dark:bg-gray-800 dark:text-white bg-yellow-50'}>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
