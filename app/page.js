'use client';
import {useEffect, useState} from "react";
import Head from "next/head";
import {useRouter} from 'next/navigation';
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {CgMail} from "react-icons/cg";
import {Link, Element, animateScroll as scroll} from 'react-scroll';
import Image from 'next/image';
import head from '../public/head-50.jpg';
import {encrypt} from "encrypt-js-vault";
import skills from '../public/skills_web.jpg';
import scrum from '../public/scrum-gpt.png';
import random from '../public/random3.jpg';
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

/*export default function getServerSideProps() {
    const secretKey = process.env.SMTP_HOST; // Ensure this variable is not prefixed with NEXT_PUBLIC_
    console.log('Secret Key:', secretKey);

    return { props: { secretKeyShownInConsole: 'hidden' } };
}*/

const Portfolio = () => {
    const router = useRouter();
    const [darkMode, setDarkMode] = useState(false);
/*
    const originalText = process.env.SMTP_PASS;
    const encryptedText = encrypt(originalText);
    console.log('Encrypted Text:', encryptedText);
*/
    
    const scrollToBottom = () => {
        const element = document.getElementById('')
        scroll.scrollToBottom(100, 50);
    };
    
    const changeRouterToContact = () => {
        router.push('/contact');
    };
    
    return (
        <div className={darkMode ? "dark" : ""}>
           
            <Head>
                <title>E.R.B.</title>
                <meta name={'My Portfolio Site'} content={'Next App Creation'}/>
                <link rel={'icon'} href={'/favicon.ico'}/>
            </Head>
            <main className={'bg-white dark:bg-gray-800 dark:text-white px-10'}>
                <section className={'min-h-screen'}>
                    <nav className={'py-10 mb-12 flex justify-between'}>
                        <section className={'font-burtons'}>
                            <h1 className={'text-xl'}>Developed By</h1>
                            <h3 className={'text-cyan-500'}>E.R.B.</h3>
                        </section>
                        <ul className={'flex items-center'}>
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
                    </nav>
                    <div className={'text-center p-10 dark:bg-gray-800'}>
                        <h2 className={'text-5xl py-2 text-teal-600 font-medium'}>Eric Ryan Bowser</h2>
                        <h3 className={'text-2xl py-2'}>Full Stack Developer</h3>
                        <p className={'text-md py-5 leading-0 text-gray-800 dark:text-white'}>
                            Full stack developer with emphasis in React.js on the frontend and C# .NET on the
                            backend.
                        </p>
                    </div>
                    <div className={'text-5xl flex justify-center gap-16 p-3 cursor-pointer'}>
                        <a href={'https://github.com/ericbowser/'}>
                            <AiFillGithub/>
                        </a>
                        <a href={'https://www.linkedin.com/in/eric-bowser-dev/'}>
                            <AiFillLinkedin/>
                        </a>
                        <button onClick={changeRouterToContact}>
                            <CgMail/>
                        </button>
                    </div>

                    <div
                        className={'relative mx-auto bg-gradient-to-b from-teal-500 rounded-2xl w-40 h-40 mt-10 overflow-hidden'}>
                        <Image src={head2} objectFit={'cover'} layout='fill' alt={'headshot'}/>
                    </div>

                    <h2 className={'text-5xl py-10 text-teal-600 font-medium my-10  text-center'}>Skills</h2>
                    <section className={'flex justify-evenly text-wrap text-center'}>

                        <Card
                            style={{width: '18rem'}}
                            className={'rounded-lg p-4 md:p-8 transition-all bg-white dark:bg-gray-900 dark:border dark:border-gray-800 shadow-xl shadow-cyan-500/20 dark:shadow-lg dark:shadow-cyan-500/30 text-cyan-500 dark:text-white-400 border-2 border-transparent hover:border-current4'}>
                            <Card.Title>JavaScript</Card.Title>
                            <div
                                className={'relative mx-auto bg-gradient-to-b from-teal-500 w-60 h-40 mt-10 overflow-hidden'}>
                                <Image src={skills} objectFit={'cover'} layout='fill' alt={'headshot'}/>
                            </div>

                            <Card.Body>
                                <Card.Text
                                    className={'text-justify align-middle py-5'}>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card
                            className={'rounded-lg p-4 md:p-8 transition-all bg-white dark:bg-gray-900 dark:border dark:border-gray-800 shadow-xl shadow-cyan-500/20 dark:shadow-lg dark:shadow-cyan-500/30 text-cyan-500 dark:text-white-400 border-2 border-transparent hover:border-current'}>
                            <Card.Title>C# .NET</Card.Title>
                            <div
                                className={'relative mx-auto bg-gradient-to-b from-teal-500 w-60 h-40 mt-10 overflow-hidden'}>
                                <Image src={random} objectFit={'cover'} layout='fill' alt={'headshot'}/>
                            </div>

                            <Card.Body>
                                <Card.Text
                                    className={'text-justify align-middle py-5'}>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card
                            style={{width: '18rem'}}
                            className={'rounded-lg p-4 md:p-8 transition-all bg-white dark:bg-gray-900 dark:border dark:border-gray-800 shadow-xl shadow-cyan-500/20 dark:shadow-lg dark:shadow-cyan-500/30 text-cyan-500 dark:text-white-400 border-2 border-transparent hover:border-current'}>
                            <Card.Title>Scrum</Card.Title>
                            <div
                                className={'relative mx-auto bg-gradient-to-b from-teal-500 w-60 h-40 mt-10 overflow-hidden'}>
                                <Image src={scrum} objectFit={'cover'} layout='fill' alt={'headshot'}/>
                            </div>

                            <Card.Body>
                                <Card.Text
                                    className={'text-justify align-middle py-5'}>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* <img className={''}
                            src={random2} 
                            alt={'skills-random'}/>*/}
                    </section>
                    <footer id="footerSection"
                            className="mt-8 p-4 text-black text-center dark:bg-gray-800 dark:text-white">
                        <h2>E.R.B. Eric Ryan Bowser</h2>
                        <p>ericryanbowser@gmail.com</p>
                    </footer>
                </section>
            </main>
        </div>
    );
}

export default Portfolio;
