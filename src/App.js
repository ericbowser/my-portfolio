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

    const scrollTo = () => {
        scroll.scrollMore(900);
    };

    const getCard = (skill = {}, index) => {
        return (
            <div key={`${index}${skill}`} className={'w-full md:w-1/2 lg:w-1/3 p-4'}>
                <div
                    className={'rounded-lg md:p-8 transition-all dark:bg-gray-900 dark:border dark:border-gray-800 shadow-xl shadow-cyan-500/20 dark:shadow-lg dark:shadow-cyan-500/30 dark:text-white-400 border-2 border-transparent hover:border-current4'}>
                    <div className={'font-bold'}>
                        {skill.icon !== null ? skill.icon : ''}
                        {skill.title}
                    </div>
                    <div className={'w-auto px-2 sm:p-5 md:p-5'}>
                        <div>
                            {skill.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={darkMode ? "dark" : ""}>
            <main className={'dark:bg-gray-800 dark:text-white'}>
                <div className={'dark:bg-gray-800 dark:text-white'}>
                    <nav className={'relative dark:bg-gray-800 dark:text-white p-4 m-5'}>
                        <section className={'absolute top-2 left-2 dark:bg-gray-800 dark:text-white'}>
                            <h1 className={'text-xl'}>
                                Developed By:
                                <div className={'text-teal-500 font-bold'}>
                                    E.R.B. - Eric Ryan Bowser
                                </div>
                            </h1>
                        </section>
                        <section className={'absolute top-2 right-1/2 dark:bg-gray-800 dark:text-white'}>
                            <div onClick={scrollTo}>
                                <FiDribbble className={'animate-move dark:text-white'} size={50}/>
                            </div>
                        </section>
                        <section className={'absolute top-2 right-2 dark:bg-gray-800 dark:text-white'}>
                            <ul>
                                <li>

                                </li>
                                <li>
                                    <BsFillMoonStarsFill className={'cursor-pointer 2xl'}
                                                         onClick={() => setDarkMode(!darkMode)}/>
                                </li>
                                <li>
                                    <a className={'bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'}
                                       href={'./E.R.B-Resume-2024.docx'} download>Resume
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </nav>
                    <h2 className={'text-5xl py-2 text-teal-600 font-medium text-center font-burtons'}>Eric Ryan Bowser</h2>
                    <h3 className={'text-2xl py-2 font-burtons font-bold bg-teal-800 w-75 h-50 text-center'}>Full Stack Developer</h3>
                    <div className={'flex flex-row p-2 dark:bg-gray-800 dark:text-white font-burtons'}>
                        <div className={'flex-md-row'}>
                            <h6 className={'py-3 leading-0 dark:bg-gray-800 dark:text-white text-teal-800 font-extrabold justify-evenly'}>
                                <ul className={'font-bold text-2xl float-right'}>
                                    <li>React</li>
                                    <li>.NET</li>
                                    <li>C#</li>
                                    <li>JavaScript#</li>
                                    <li>Node#</li>
                                </ul>
                            </h6>
                        </div>
                        <div
                            className={' mx-auto bg-gradient-to-b from-teal-500 rounded-2xl w-60 h-40 mt-10 overflow-hidden'}>
                            {/*
                            <img src={head2} alt={'headshot'}/>
*/}
                        </div>
                    </div>
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

                    <h2 className={'text-5xl py-10 text-black dark:text-white font-medium text-center'}>Skills</h2>
                    <div className={'flex md:flex-row sm:flex-row flex-wrap dark:text-white dark:bg-gray-800'}>
                        {Skills.map((skill, index) => {
                            return (
                                getCard(skill, index)
                            )
                        })
                        }
                    </div>
                </div>
                <div className={'mt-12'}>
                    <Footer/>
                </div>
            </main>
        </div>
    );
}

export default App;
