import React, { useState, useEffect } from "react";
import { Element } from 'react-scroll';
import head2 from './assets/eb_1.jpg';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import EmailSubmit from "./components/EmailSubmit";
import Projects from "./components/Projects";
import About from "./components/About";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Load dark mode preference from localStorage
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode) {
            setDarkMode(JSON.parse(savedDarkMode));
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Use system preference as fallback
            setDarkMode(true);
        }
    }, []);

    // Save dark mode preference to localStorage
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        // Apply or remove dark class from html element for better dark mode
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
      <div className={darkMode ? "dark" : ""}>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
              {/* Navbar */}
              <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />

              {/* About Section */}
              <Element name="about">
                  <About profileImage={head2} />
              </Element>

              {/* Skills Section */}
              <Element name="skills">
                  <section className="py-20">
                      <div className="container mx-auto px-4">
                          <div className="text-center mb-12">
                              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-burtons">
                                  Technical Skills
                              </h2>
                              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                  A comprehensive overview of my technical expertise and professional capabilities.
                              </p>
                          </div>

                          <Cards />
                      </div>
                  </section>
              </Element>

              {/* Projects Section */}
              <Element name="projects">
                  <div className="bg-gray-50 dark:bg-gray-800">
                      <Projects />
                  </div>
              </Element>

              {/* Contact Section */}
              <Element name="contact">
                  <section className="py-20">
                      <div className="container mx-auto px-4 flex flex-col items-center">
                          <div className="text-center mb-12 max-w-2xl">
                              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-burtons">
                                  Get In Touch
                              </h2>
                              <p className="text-lg text-gray-600 dark:text-gray-300">
                                  Interested in working together or have questions about my experience?
                                  Feel free to reach out through the form below.
                              </p>
                          </div>

                          <div className="w-full max-w-md">
                              <EmailSubmit />
                          </div>
                      </div>
                  </section>
              </Element>

              {/* Footer */}
              <Footer />
          </div>
      </div>
    );
}

export default App;