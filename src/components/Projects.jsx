import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi';

// Project data showcasing full-stack development, React, .NET, and cloud expertise
const projectsData = [
    {
        id: 'cloudprepper',
        title: 'CloudPrepper - Cloud Certification Study Platform',
        description: 'A comprehensive full-stack application for preparing for cloud certifications (CompTIA Cloud+, AWS). Built with React frontend and Node.js backend.',
        featuredImage: '/path/to/image.jpg',
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
        links: {
            frontend: 'https://github.com/ericbowser/CloudPrepper',
            backend: 'https://github.com/ericbowser/cloud_prepper_api',
            live: null
        },
        details: 'CloudPrepper is a full-stack cloud certification study platform designed to help developers prepare for CompTIA Cloud+ and AWS Solutions Architect certifications. The application demonstrates modern web development practices with a React TypeScript frontend and Node.js/Express backend.',
        highlights: [
            'Built responsive React frontend with TypeScript for type safety',
            'Implemented flashcard system with spaced repetition algorithm',
            'Created RESTful API with Node.js/Express for progress tracking and analytics',
            'Designed PostgreSQL database schema for efficient data storage',
            'Containerized application using Docker for consistent deployment',
            'Developed practice exam engine with real-time progress monitoring'
        ]
    },
    {
        id: 'ai-assistant',
        title: 'AI Assistant Tools',
        description: 'Personal AI toolkit integrating with various AI models including OpenAI, Google Gemini, and Anthropic Claude.',
        featuredImage: '/path/to/image.jpg',
        technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'API Integration'],
        links: {
            github: 'https://github.com/ericbowser/Assist',
            frontend: 'https://github.com/ericbowser/AssistFront',
            live: null
        },
        details: 'A comprehensive AI assistant toolkit featuring a Node.js backend that integrates with popular AI models (OpenAI, Google Gemini, Claude) and a React frontend for a seamless user experience. The application demonstrates API integration patterns and real-time streaming of responses.',
        highlights: [
            'Integrated multiple AI APIs with a unified interface',
            'Implemented real-time streaming responses from AI models',
            'Applied prompt engineering techniques for optimal AI interactions',
            'Built responsive React frontend with TypeScript',
            'Created scalable Node.js/Express backend with error handling',
            'Developed secure API key management system'
        ]
    },
    {
        id: 'pet-id-tags',
        title: 'Pet ID Tags - Full-Stack Application',
        description: 'A complete full-stack solution for creating and managing smart pet ID tags with QR code functionality, user authentication, and containerized deployment.',
        featuredImage: '/path/to/image.jpg',
        technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'JWT'],
        links: {
            frontend: 'https://github.com/ericbowser/LaserTags',
            backend: 'https://github.com/ericbowser/backendlaser',
            live: null
        },
        details: 'An end-to-end full-stack solution for pet owners to create customized ID tags with QR codes that link to pet profiles containing contact information. The system includes secure user authentication, profile management, and QR code generation with database persistence.',
        highlights: [
            'Designed PostgreSQL database schema with optimal indexing',
            'Implemented JWT-based user authentication and authorization',
            'Built RESTful APIs with Node.js/Express backend',
            'Developed responsive React frontend with modern UI patterns',
            'Created Docker containers for consistent development and production deployment',
            'Implemented QR code generation and secure profile management'
        ]
    },
    {
        id: 'portfolio-website',
        title: 'Portfolio Website',
        description: 'A responsive portfolio website showcasing skills and projects with dark mode support, responsive design, and modern interactive UI components.',
        featuredImage: '/path/to/image.jpg',
        technologies: ['React', 'Tailwind CSS', 'Vite', 'Responsive Design'],
        links: {
            github: 'https://github.com/ericbowser/my-portfolio',
            live: 'https://erb-think.com'
        },
        details: 'A personal portfolio website built with React and Tailwind CSS, featuring dark mode support, responsive design, and interactive UI components that showcase skills, projects, and professional experience.',
        highlights: [
            'Implemented dark mode with persistent user preferences',
            'Created fully responsive layouts with Tailwind CSS',
            'Built custom animations and interactive elements',
            'Optimized performance with Vite bundling',
            'Integrated contact form with email functionality'
        ]
    }
];

const ProjectCard = ({ project }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
          {/* Project Image */}
          <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              {project.featuredImage ? (
                <img
                  src={project.featuredImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                    <span className="text-gray-500 dark:text-gray-400">No image available</span>
                </div>
              )}

              {/* Technology Tags */}
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-teal-500/80 text-white rounded-full">
                {tech}
              </span>
                      ))}
                  </div>
              </div>
          </div>

          {/* Project Info */}
          <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-3 mb-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                    >
                        <FiGithub className="mr-1" />
                        Repository
                    </a>
                  )}

                  {project.links.frontend && (
                    <a
                      href={project.links.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                    >
                        <FiGithub className="mr-1" />
                        Frontend
                    </a>
                  )}

                  {project.links.backend && (
                    <a
                      href={project.links.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                    >
                        <FiGithub className="mr-1" />
                        Backend
                    </a>
                  )}

                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-teal-500 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
                    >
                        <FiExternalLink className="mr-1" />
                        Live Demo
                    </a>
                  )}
              </div>

              {/* Toggle Details Button */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="inline-flex items-center text-sm font-medium text-teal-500 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
              >
                  {showDetails ? 'Hide Details' : 'Show Details'}
                  <FiChevronRight className={`ml-1 transform transition-transform ${showDetails ? 'rotate-90' : ''}`} />
              </button>

              {/* Expanded Details */}
              {showDetails && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {project.details}
                    </p>

                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mt-3">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Highlights:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                              {project.highlights.map((highlight, index) => (
                                <li key={index} className="text-gray-600 dark:text-gray-300">
                                    {highlight}
                                </li>
                              ))}
                          </ul>
                      </div>
                    )}
                </div>
              )}
          </div>
      </div>
    );
};

const Projects = () => {
    return (
      <section id="projects" className="py-10">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-burtons">
                      Featured Projects
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                      A selection of my recent work showcasing expertise in React frontend development, Node.js/Express backend architecture,
                      full-stack applications, and cloud-native solutions. Each project demonstrates modern development practices and scalable design patterns.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
          </div>
      </section>
    );
};

export default Projects;