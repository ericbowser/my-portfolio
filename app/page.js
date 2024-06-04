'use client';
import {useState} from "react";
import Head from "next/head";
import {useRouter} from 'next/navigation';
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {CgMail} from "react-icons/cg";
import {animateScroll as scroll} from 'react-scroll';
import Image from 'next/image';
import Skills from "./components/Skills";
import {FiDribbble} from "react-icons/fi";
import head2 from '../public/head2.jpg';
import Footer from './components/Footer';

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

    const scrollTo = () => {
        scroll.scrollMore(900);
    };

    const changeRouterToContact = () => {
        router.push('/contact');
    };

    const getCard = (skill = {}) => {
        return (
            <div className={'w-full md:w-1/2 lg:w-1/3 p-4'}>
                <div className={'rounded-lg md:p-8 transition-all dark:bg-gray-900 dark:border dark:border-gray-800 shadow-xl shadow-cyan-500/20 dark:shadow-lg dark:shadow-cyan-500/30 dark:text-white-400 border-2 border-transparent hover:border-current4'}>
                    <div className={'bg-grey-100 dark:bg-gray-800 text-teal-950 dark:text-white'}>
                        <span className={'flex p-5 gap-5 text-center font-burtons'}>
                            {skill.icon !== null ? skill.icon : ''}
                            {skill.title}
                        </span>
                    </div>
                    <div className={'w-auto p-2'} style={{height: '200px'}}>
                        <div className={'pt-2'}>
                            {skill.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={darkMode ? "dark" : "mt-5"}>
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
                            <li className={'px-96'}>
                                Skills
                                <button onClick={scrollTo}>
                                    <FiDribbble size={40}/>
                                </button>
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
                    </nav>
                    <div className={'text-center p-10 dark:bg-gray-800'}>
                        <h2 className={'text-5xl py-2 text-teal-600 font-medium'}>Eric Ryan Bowser</h2>
                        <h3 className={'text-2xl py-2'}>Full Stack Developer</h3>
                        <p className={'text-md py-5 leading-0 text-gray-800 dark:text-white'}>
                            Full stack developer with JavaScript, React.js, Node.js and Next.js libraries.
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
                        className={'relative mx-auto bg-gradient-to-b from-teal-500 rounded-2xl w-60 h-80 mt-10 overflow-hidden'}>
                        <Image src={head2} objectFit={'cover'} layout='fill' alt={'headshot'}/>
                    </div>
                    <h2 className={'text-5xl py-10 text-black dark:text-white font-medium text-center'}>Skills</h2>

                </section>
                <section className={'flex flex-col md:flex-row flex-wrap dark:text-white dark:bg-gray-800 '}>
                    {Skills.map((skill, index) => {
                        return (
                            getCard(skill)
                        )
                    })
                    }
                </section>
                <section>
                    <Footer/>
                </section>
            </main>
        </div>
    );
}

export default Portfolio;
