import React, {useEffect, useState} from "react";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {CgMail} from "react-icons/cg";
import {animateScroll as scroll} from 'react-scroll';
import Skills from "./components/Skills";
import {FiDribbble} from "react-icons/fi";
import head2 from '../public/eb-1.jpg';
import Footer from './components/Footer';
import styled from "styled-components";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import EmailSubmit from "./components/EmailSubmit";

/*export default function getServerSideProps() {
    const secretKey = process.env.SMTP_HOST; // Ensure this variable is not prefixed with NEXT_PUBLIC_
    console.log('Secret Key:', secretKey);

    return { props: { secretKeyShownInConsole: 'hidden' } };
}*/

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

/*    useEffect(() => {
    }, [darkMode]);*/
    
    const scrollTo = () => {
        scroll.scrollTo(2100);
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <Nav setDarkMode={setDarkMode} darkMode={darkMode}/>
            <div className={'dark:bg-gray-800 dark:text-white'}>
                <div className={'m-28 flex items-center justify-center dark:bg-gray-800 dark:text-white'}>
                    <div className="flex text-center mt-28">
                        {/* Profile Image */}
                        <img
                            className="mt-18 rounded-full w-64 h-72 object-cover"
                            src={head2}
                            alt="E.R.B."
                        />
                        <ul className={'mt-22 ml-10 font-burtons'}>
                            <li>React</li>
                            <li>.NET</li>
                            <li>C#</li>
                            <li>JavaScript</li>
                            <li>Node</li>
                        </ul>
                    </div>
                </div>
                <h2 className={'text-2xl font-semibold text-teal-600 text-center font-burtons dark:text-white dark:bg-gray-800'}>Eric
                    Ryan Bowser</h2>
                <div className={'text-5xl flex justify-center gap-16 p-1 cursor-pointer'}>
                    <a href={'https://github.com/ericbowser/'}>
                        <AiFillGithub/>
                    </a>
                    <a href={'https://www.linkedin.com/in/eric-bowser-dev/'}>
                        <AiFillLinkedin/>
                    </a>
                    <a onClick={(event) => {
                        scrollTo();
                    }}
                    >
                        <CgMail/>
                    </a>
                </div>
                <div>
                    <h2 className={'text-5xl text-black dark:text-white font-medium text-center font-burtons'}>Skills</h2>
                    <div className={'m-28 flex md:flex-row sm:flex-row flex-wrap dark:text-white dark:bg-gray-800'}>
                        <Cards/>
                    </div>
                </div>
            </div>
            <div>
                <EmailSubmit/>
            </div>
            <div className={'p-20 fixed-bottom dark:bg-gray-800 dark:text-white'}>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
