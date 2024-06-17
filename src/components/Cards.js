import React from 'react';
import Skills from "./Skills";

const Cards = () => {
    return (
        Skills.map((skill, index) => {
            return (
                <div key={`${index}${skill}`}
                     className={'sm:flex-row lg:w-1/3 md:w-1/2 dark:bg-gray-800 dark:text-white'}>
                    <div
                        className={'space-x-2 rounded-lg transition-all dark:bg-gray-900 dark:border dark:border-gray-800 shadow-xl shadow-cyan-600/20 dark:shadow-lg dark:shadow-cyan-600/30 dark:text-white-400 border-2 border-transparent hover:border-current4'}>
                        <div className={'card-header flex-wrap'}>
                            <div className={'text-center align-middle'}>
                                <div className={'m-1 text-2xl'}>
                                    {skill.icon !== null ? skill.icon : ''}
                                    <h1 className={'font-extrabold font-burtons'}>{skill.title}</h1>
                                </div>
                            </div>
                            <div style={{
                                    border: "inset",
                                    borderColor: 'blueviolet',
                                }} 
                                 className={'sm:flex-row font-medium text-xl p-10'}>
                                    {skill.description}
                            </div>
                        </div>

                        <div>

                            {/*   {skill.link.map(x => {
                                    return (
                                        <div
                                            className={'flex items-center justify-start space-x-4 border-t border-gray-200"'}>
                                            <a
                                                href={x.url}
                                                className="text-blue-500 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {x.name}
                                            </a>
                                        </div>
                                    )
                                })}*/}
                        </div>
                    </div>
                </div>
            )
        })
    );
};

export default Cards;