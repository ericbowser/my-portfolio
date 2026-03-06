import React, { useState, useEffect, useRef } from "react";
import { Element } from 'react-scroll';
import head2 from './assets/eb_1.jpg';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Cards from "./components/Cards";
import EmailSubmit from "./components/EmailSubmit";
import Projects from "./components/Projects";
import About from "./components/About";

const App = () => {
    const [darkMode, setDarkMode] = useState(true); // default dark for new aesthetic
    const [currentView, setCurrentView] = useState('landing');

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode !== null) {
            setDarkMode(JSON.parse(savedDarkMode));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Apply bg color to body
        document.body.style.background = darkMode ? '#080c14' : '#f0f4f8';
    }, [darkMode]);

    const handleNavigate = (section) => {
        setCurrentView(section);
        setTimeout(() => {
            const refs = {
                about: aboutRef,
                skills: skillsRef,
                projects: projectsRef,
                contact: contactRef,
            };
            if (refs[section]?.current) {
                refs[section].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    const handleBackToLanding = () => {
        setCurrentView('landing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const bgStyle = {
        minHeight: '100vh',
        background: darkMode ? '#080c14' : '#f0f4f8',
        color: darkMode ? '#f1f5f9' : '#0f172a',
    };

    if (currentView === 'landing') {
        return (
            <div style={bgStyle}>
                <Navbar setDarkMode={setDarkMode} darkMode={darkMode} showBackButton={false} />
                <Landing onNavigate={handleNavigate} darkMode={darkMode} />
                <Footer darkMode={darkMode} onNavigate={handleNavigate} />
            </div>
        );
    }

    return (
        <div style={bgStyle}>
            <Navbar
                setDarkMode={setDarkMode}
                darkMode={darkMode}
                showBackButton={true}
                onBackToLanding={handleBackToLanding}
            />

            {currentView === 'about' && (
                <div ref={aboutRef}>
                    <Element name="about">
                        <About profileImage={head2} darkMode={darkMode} onNavigate={handleNavigate} />
                    </Element>
                </div>
            )}

            {currentView === 'skills' && (
                <div ref={skillsRef} style={{ paddingTop: 64 }}>
                    <Element name="skills">
                        <section style={{ padding: '60px 24px', minHeight: '100vh' }}>
                            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                                <div style={{ textAlign: 'center', marginBottom: 48 }}>
                                    <p style={{
                                        color: '#a855f7', fontFamily: 'monospace', fontSize: '0.75rem',
                                        letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10,
                                    }}>
                                        // the toolkit
                                    </p>
                                    <h2 style={{
                                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
                                        color: darkMode ? '#f1f5f9' : '#0f172a', letterSpacing: '-0.02em', marginBottom: 12,
                                    }}>
                                        Technical Skills
                                    </h2>
                                    <p style={{ color: darkMode ? '#64748b' : '#94a3b8', maxWidth: 480, margin: '0 auto' }}>
                                        A decade of expertise across the full stack — backend, frontend, cloud, and DevOps.
                                    </p>
                                </div>
                                <Cards darkMode={darkMode} />
                            </div>
                        </section>
                    </Element>
                </div>
            )}

            {currentView === 'projects' && (
                <div ref={projectsRef} style={{ paddingTop: 64 }}>
                    <Element name="projects">
                        <Projects darkMode={darkMode} />
                    </Element>
                </div>
            )}

            {currentView === 'contact' && (
                <div ref={contactRef} style={{ paddingTop: 64 }}>
                    <Element name="contact">
                        <section style={{ padding: '60px 24px', minHeight: '100vh' }}>
                            <div style={{ maxWidth: 600, margin: '0 auto' }}>
                                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                                    <p style={{
                                        color: '#f59e0b', fontFamily: 'monospace', fontSize: '0.75rem',
                                        letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10,
                                    }}>
                                        // let's connect
                                    </p>
                                    <h2 style={{
                                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
                                        color: darkMode ? '#f1f5f9' : '#0f172a', letterSpacing: '-0.02em', marginBottom: 12,
                                    }}>
                                        Get In Touch
                                    </h2>
                                    <p style={{ color: darkMode ? '#64748b' : '#94a3b8', lineHeight: 1.7 }}>
                                        Actively seeking senior full-stack, cloud engineering, or .NET modernization roles.
                                        Reach out — I'd love to connect.
                                    </p>
                                </div>
                                <EmailSubmit darkMode={darkMode} />
                            </div>
                        </section>
                    </Element>
                </div>
            )}

            <Footer darkMode={darkMode} onNavigate={handleNavigate} />
        </div>
    );
};

export default App;
