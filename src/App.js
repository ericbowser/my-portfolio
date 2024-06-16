import React, {useEffect, useState} from "react";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {CgMail} from "react-icons/cg";
import {animateScroll as scroll} from 'react-scroll';
import head2 from '../public/skills_web.jpg';
import Footer from './components/Footer';
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import EmailSubmit from "./components/EmailSubmit";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [page, setPage] = useState('/');

    useEffect(() => {
    }, [page, showContact]);

    const scrollToPoint = (to = 0) => {
        scroll.scrollTo(to);
        setShowContact(true);
    }

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className={'flex dark:bg-gray-800 dark:text-white'}>
                <div className={'dark:bg-gray-800 dark:text-white'}>
                    <Nav setDarkMode={setDarkMode} darkMode={darkMode}/>
                    <div className={'flex items-center justify-center dark:bg-gray-800 dark:text-white'}>
                        <div className="flex text-center" style={{paddingTop: '230px'}}>
                            {/* Profile Image */}
                            <img
                                className=" rounded-2xl w-80 h-96 object-cover bg-cover bg-center bg-no-repeat"
                                src={head2}
                                alt="E.R.B."
                            />
                            <ul className={'mt-8 ml-10 font-burtons size-3 text-xl'}>
                                <li>React</li>
                                <li>.NET</li>
                                <li>C#</li>
                                <li>JavaScript</li>
                                <li>Node</li>
                            </ul>
                        </div>
                    </div>
                    <h2 className={'mt-8 text-2xl font-semibold py-2 text-teal-600 text-center font-burtons dark:text-white dark:bg-gray-800'}>Eric
                        Ryan Bowser</h2>
                    <div className={'text-5xl flex justify-center gap-16 p-3 cursor-pointer'}>
                        <a href={'https://github.com/ericbowser/'}>
                            <AiFillGithub/>
                        </a>
                        <a href={'https://www.linkedin.com/in/eric-bowser-dev/'}>
                            <AiFillLinkedin/>
                        </a>
                        <a onClick={() => scrollToPoint(2600)}>
                            <CgMail/>
                        </a>
                    </div>
                    <div style={{marginLeft: '12%', marginRight: '12%', marginTop: '10%'}}>
                        <h1 className={'text-5xl dark:text-white font-extrabold text-center font-burtons'}>
                            Skills
                        </h1>
                        <div 
                            className={'text-black flex flex-col md:flex-row sm:flex-row flex-wrap dark:text-white dark:bg-gray-800'}>
                            <Cards/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'dark:bg-gray-800 dark:text-white'} style={{paddingTop: '150px'}}>
                {showContact && (
                    <EmailSubmit/>
                )}
            </div>
            <div className={'fixed-bottom p-12 dark:bg-gray-800 dark:text-white'}>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
