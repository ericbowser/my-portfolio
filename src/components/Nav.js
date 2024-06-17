import React from 'react';
import {BsFillMoonStarsFill} from "react-icons/bs";
import {animateScroll as scroll} from "react-scroll";
import {FaRaspberryPi} from "react-icons/fa6";
import pi from '../../public/pi.png';

const Nav = ({ setDarkMode = () => { }, darkMode, classes = '' }) => {
    const scrollTo = () => {
        scroll.scrollTo(600);
    };

    return (
        <nav
            className={'dark:bg-gray-800 dark:text-white dark:backdrop-blur-lg fixed top-0 left-0 right-0 backdrop-blur-lg bg-white/30 border-b border-gray-200 p-10'}>
            <div className={'top-2 left-2 dark:bg-gray-800 dark:text-white'}>
                <h1 className={'text-xl'}>
                    Developed By:
                    <div className={'text-teal-500 font-bold'}>
                        E.R.B. - Eric Ryan Bowser
                    </div>
                </h1>
            </div>
            <div className={'dark:bg-gray-800 dark:text-white text-center'}>
                <div onClick={scrollTo}>
                    <img src={pi}
                         alt={'raspi overlay'}
                         className={'animate-move z-40 blur-sm'}
                         width={'38px'}
                         height={'auto'}
                    />
                    <FaRaspberryPi size={45} className={'animate-move z-40'}/>
                </div>
            </div>
            <section className={'absolute top-2 right-2 m-10 dark:bg-gray-800 dark:text-white'}>
                <ul>
                    <li>
                        <BsFillMoonStarsFill className={'cursor-pointer 2xl'} size={30}
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
    );
};

export default Nav;