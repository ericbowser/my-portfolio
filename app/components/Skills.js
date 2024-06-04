import React from 'react';
import random from '../../public/random3.jpg'
import scrum from '../../public/scrum-gpt.png';
import skills from '../../public/skills_web.jpg';
import { RiJavascriptLine } from "react-icons/ri";
import {FaReact} from "react-icons/fa";
import { PiFileCssBold } from "react-icons/pi";
import { SiDotnet } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";

export const Skills = [
    {
        title: "JavaScript",
        description: "Proficient in JavaScript and have lots of experience using NPM and Node.js. Knowledgeable in server-side development with Express.js and RESTful APIs using Node as a back-end.",
        image: scrum,
        icon: <RiJavascriptLine size={20}/>
    },
    {
        title: "React",
        description: "Experienced in building single-page applications with React, classes and hooks. I have worked with, developed, implemented, tested and deployed components into a components library to be used internally.",
        image: skills,
        icon:  <FaReact size={20} />
    },
    {
        title: "CSS",
        description: "Familiar with responsive design and grid layout systems using Bootstrap. Also familiar with React-Bootstrap components and Styled-Components.",
        image: random,
        icon: <PiFileCssBold size={20} />
    },
    {
        title: "DotNet",
        description: "Experienced and proficient using and bootstrapping web / service applications. I have worked extensively with dotnet Standard versions as well as newer dotnet core up to netcore 8.",
        image: random,
        icon: <SiDotnet size={20} />
    },
    {
        title: "Scripting",
        description: "Experienced with Bash and Git Bash shells. I have experience scripting automation build scripts and deploy scripts. Git Bash for source control to GitHub. Also, for front-end JavaScript, NPM package manager and build / run scripts.",
        image: skills,
        icon: <SiGnubash size={20}/>
    },
    {
        title: "CI / CD",
        description: "Continuous integration using various frameworks like TeamCity Build and Octopus Deploy. I have also worked with Azure Devops. I have scripted and implemented a build pipeline that runs automation tests, and runs a build process based on criteria.",
        image: skills,
        icon: null
    },
    {
        title: "Data",
        description: "Proficient and experienced using Microsoft Transact SQL, PostgeSQL, writing stored procedures and user-defined functions. Experienced with database design and normalization",
        image: skills,
        icon: <TbFileTypeSql size={20}/>
    },
];

/*
export const SkillsListView = () => {
    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
            <div className="row">
                {skills.map((skill, index) => (
                    <div key={index} className="col-md-4 col-lg-3 mb-4">
                        <div className="card bg-white shadow-lg hover:shadow-xl transition duration-200">
                            <div className="card-body">
                                <h5 className="card-title text-xl font-semibold">{skill.title}</h5>
                                <p className="card-text text-gray-700">{skill.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
*/

export default Skills;