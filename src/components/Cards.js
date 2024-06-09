import React from 'react';
import Skills from "./Skills";

const Cards = () => {
    return (
        <div>
            <h2 className={'text-5xl pt-20 text-black dark:text-white font-medium text-center font-burtons'}>Skills</h2>
            <div className={'flex md:flex-row sm:flex-row flex-wrap dark:text-white dark:bg-gray-800'}>
                {Skills.map((skill, index) => {
                    return (
                        <div key={`${index}${skill}`}
                             className={'w-full md:w-1/2 lg:w-1/3 p-4 dark:bg-gray-800 dark:text-white'}>
                            <div
                                className={'rounded-lg md:p-8 transition-all dark:bg-gray-900 dark:border dark:border-gray-800 shadow-xl shadow-cyan-500/20 dark:shadow-lg dark:shadow-cyan-500/30 dark:text-white-400 border-2 border-transparent hover:border-current4'}>
                                <div className={'font-bold'}>
                                    {skill.icon !== null ? skill.icon : ''}
                                    {skill.title}
                                </div>
                                <div className={'w-auto px-2 sm:p-5 md:p-5'}>
                                    {skill.description}
                                    <div className={'pt-10'}>

                                        {skill.link.map(x => {
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
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

export default Cards;