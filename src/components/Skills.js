import React from 'react';
import scrum from '../../public/scrum-gpt.png';
import skills from '../../public/skills_web.jpg';
import {RiJavascriptLine} from "react-icons/ri";
import {FaReact} from "react-icons/fa";
import {SiDotnet} from "react-icons/si";
import {SiGnubash} from "react-icons/si";
import {SiPostgresql} from "react-icons/si";
import {PiFileSql} from "react-icons/pi";
import { SiMicrostrategy } from "react-icons/si";
import { PiFileCssLight } from "react-icons/pi";

export const Skills = [
    {
      key: 'JavaScript',
        title: <p>JavaScript</p>,
        description: (
            <section>
                Proficient in JavaScript and have lots of experience using NPM and Node.js.
                Knowledgeable in server-side development with Express.js and RESTful APIs using Node as a back-end.,
            </section>
        ),
        image: scrum,
        link: [{}],
        icon: <RiJavascriptLine size={50} />
    },
    {
      key: 'React',
        title: <p>React</p>,
        description: (
            <section>
                Experienced in building single-page applications with React, classes and hooks.
                Developed, implemented, and tested React components in a component library.
                React caching libraries such as Redux and React Query.
                React Router and Next.js app routing.
            </section>
        ),
        image: skills,
        link: [
            {
                name: 'Card Game',
                url: 'https://github.com/ericbowser/CardGame'
            },
            {
                name: 'My Portfolio',
                url: 'https://github.com/ericbowser/my-portfolio'
            }
        ],
        icon: <FaReact size={50} />
    },
    {
      key: 'CSS',
        title: <p>CSS</p>,
        description: (
            <section>
                Responsive web design and grid layout systems using Bootstrap, TailwindCSS, and Styled Components.
                Custom CSS stylesheets and SASS.
            </section>
        ),
        image: skills,
        link: [{}],
        icon: <PiFileCssLight size={50} />
    },
    {
        key: 'dotnet',
        title: <p>DotNet</p>,
        description: (
            <section>
                Experienced and proficient using and bootstrapping web / service applications.
                I have worked extensively with dotnet Standard versions as well as newer dotnet core up to netcore 9.
            </section>
        ),
        image: skills,
        link: [{}],
        icon: <SiDotnet size={50} />
    },
    {
      key: 'Scripting',
        title: <p>Scripting</p>,
        description: (
            <section>
                Experienced with Bash and Git Bash shells.
                I have experience scripting automation build scripts and deploy scripts.
                Git Bash for source control to GitHub. Also, for front-end JavaScript,
                NPM package manager and build / run scripts.
            </section>
        ),
        image: skills,
        link: [{}],
        icon: <SiGnubash size={50}/>
    },
    {
      key: 'CI/CD',
        title: <p>CI / CD</p>,
        description: (
            <section>
                Continuous integration using various frameworks like TeamCity Build and Octopus Deploy.
                I have also worked with Azure Devops. I have scripted and implemented a build pipeline
                that runs automation tests, and runs a build process based on criteria.
            </section>
        ),
        image: skills,
        link: [{}],
        icon: <SiMicrostrategy size={50}/>
    },
    {
      key: 'Database',
        title: <p>Data</p>,
        description: (
            <section>
                Proficient and experienced using Microsoft Transact SQL, PostgeSQL, writing stored procedures and
                user-defined functions.
                Experienced with database design and normalization.
            </section>
        ),
        image: skills,
        link: [{}],
        icon: (
            <span className={'flex'}>
                <SiPostgresql size={50} />
                <PiFileSql size={50} />
            </span>
        )
    },
];

export default Skills;