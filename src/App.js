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

/*export default function getServerSideProps() {
    const secretKey = process.env.SMTP_HOST; // Ensure this variable is not prefixed with NEXT_PUBLIC_
    console.log('Secret Key:', secretKey);

    return { props: { secretKeyShownInConsole: 'hidden' } };
}*/

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [page, setPage] = useState('/');

    useEffect(() => {
    }, [page]);


    return (
        <div className={darkMode ? "dark" : ""}>
            <main className={'dark:bg-gray-800 dark:text-white'}>
                <div className={'dark:bg-gray-800 dark:text-white'}>
                    <Nav/>
                    <div className={'m-32 flex items-center justify-center dark:bg-gray-800 dark:text-white'}>
                        <div className="flex text-center">
                            {/* Profile Image */}
                            <img
                                className="mx-auto rounded-full w-64 h-72 object-cover"
                                src={head2}
                                alt="E.R.B."
                            />
                            <ul className={'mt-2 ml-10 font-burtons'}>
                                <li>React</li>
                                <li>.NET</li>
                                <li>C#</li>
                                <li>JavaScript</li>
                                <li>Node</li>
                            </ul>
                        </div>
                    </div>
                    <h2 className={'mt-4 text-2xl font-semibold py-2 text-teal-600 text-center font-burtons dark:text-white dark:bg-gray-800'}>Eric
                        Ryan Bowser</h2>
                    <div className={'text-5xl flex justify-center gap-16 p-3 cursor-pointer'}>
                        <a href={'https://github.com/ericbowser/'}>
                            <AiFillGithub/>
                        </a>
                        <a href={'https://www.linkedin.com/in/eric-bowser-dev/'}>
                            <AiFillLinkedin/>
                        </a>
                        <a href="/contact"
                           onClick={(event) => {
                               setPage('/contact');
                           }}
                        >
                            <CgMail/>
                        </a>
                    </div>
                    <Cards/>
                </div>
                <div className={'mt-12'}>
                    <Footer/>
                </div>
            </main>
        </div>
    );
}

export default App;
