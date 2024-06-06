import React from 'react';
import scrum from '../../public/scrum-gpt.png';
import skills from '../../public/skills_web.jpg';
import {RiJavascriptLine} from "react-icons/ri";
import {FaReact} from "react-icons/fa";
import {PiFileCssBold} from "react-icons/pi";
import {SiDotnet} from "react-icons/si";
import {SiGnubash} from "react-icons/si";
import {TbFileTypeSql} from "react-icons/tb";

export const Skills = [
    {
        title: "JavaScript",
        description: (
            <section className={'pt-3'}>
                Proficient in JavaScript and have lots of experience using NPM and Node.js.
                Knowledgeable in server-side development with Express.js and RESTful APIs using Node as a back-end.,
            </section>
        ),
        image: scrum,
        icon: <RiJavascriptLine size={20} className={'font-extrabold'}/>
    },
    {
        title: "React",
        description: (
            <section className={'pt-3'}>
                Experienced in building single-page applications with React, classes and hooks.
                I have worked with, developed, implemented, tested and deployed components into
                a components library to be used internally.
            </section>
        ),
        image: skills,
        icon: <FaReact size={20} className={'font-extrabold'}/>
    },
    {
        title: "CSS",
        description: (
            <section className={'pt-3'}>
                Familiar with responsive design and grid layout systems using Bootstrap.
                Also familiar with React-Bootstrap components and Styled-Components.
            </section>
        ),
        image: random,
        icon: <PiFileCssBold size={20} className={'font-extrabold'}/>
    },
    {
        title: "DotNet",
        description: (
            <section className={'pt-3'}>
                Experienced and proficient using and bootstrapping web / service applications.
                I have worked extensively with dotnet Standard versions as well as newer dotnet core up to netcore 9.
            </section>
        ),
        image: random,
        icon: <SiDotnet size={20} className={'font-extrabold'}/>
    },
    {
        title: "Scripting",
        description: (
            <section className={'pt-3'}>
                Experienced with Bash and Git Bash shells.
                I have experience scripting automation build scripts and deploy scripts.
                Git Bash for source control to GitHub. Also, for front-end JavaScript,
                NPM package manager and build / run scripts.
            </section>
        ),
        image: skills,
        icon: <SiGnubash size={20}/>
    },
    {
        title: "CI / CD",
        description: (
            <section className={'pt-3'}>
                Continuous integration using various frameworks like TeamCity Build and Octopus Deploy.
                I have also worked with Azure Devops. I have scripted and implemented a build pipeline
                that runs automation tests, and runs a build process based on criteria.
            </section>
        ),
        image: skills,
        icon: null
    },
    {
        title: "Data",
        description: (
            <section className={'pt-3'}>
                Proficient and experienced using Microsoft Transact SQL, PostgeSQL, writing stored procedures and
                user-defined functions.
                Experienced with database design and normalization.
            </section>
        ),
        image: skills,
        icon: <TbFileTypeSql size={20} className={'font-extrabold'}/>
    },
];

export default Skills;