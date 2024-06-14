import React, {useState} from 'react';
import {FiDribbble} from "react-icons/fi";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {animateScroll as scroll} from "react-scroll";

const Nav = ({setDarkMode = () => {}, darkMode}) => {
    const scrollTo = () => {
        scroll.scrollTo(600);
    };
    
    return (
        <nav className={'dark:bg-gray-800 dark:text-white dark:backdrop-blur-lg fixed top-0 left-0 right-0 backdrop-blur-lg bg-white/30 border-b border-gray-200 p-10'}>
            <section className={'top-2 left-2 dark:bg-gray-800 dark:text-white'}>
                <h1 className={'text-xl'}>
                    Developed By:
                    <div className={'text-teal-500 font-bold'}>
                        E.R.B. - Eric Ryan Bowser
                    </div>
                </h1>
            </section>
            <section className={'absolute top-1 right-1/2 z-50 dark:bg-gray-800 dark:text-white'}>
                <div onClick={scrollTo}>
                    <FiDribbble className={'animate-move dark:text-white'} size={50}/>
                </div>
            </section>
            <section className={'absolute top-2 right-2 m-10 dark:bg-gray-800 dark:text-white'}>
                <ul>
                    <li>
                        <BsFillMoonStarsFill className={'cursor-pointer 2xl'} onClick={() => setDarkMode(!darkMode)}/>
                    </li>
                    <li>
                        <a className={'bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'}
                           href={'./E.R.B-Resume-2024.docx'} download>Resume
                        </a>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default Nav;