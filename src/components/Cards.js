import React from 'react';
import Skills from "./Skills";

const Cards = () => {
    return (
        Skills.map((skill, index) => {
            return (
                <div key={`${index}${skill}`}
                     className={'sm:flex-row lg:w-1/3 md:w-1/2 dark:bg-gray-800 dark:text-white'}>
                    <div
                        className={'rounded-md dark:bg-gray-900 dark:border dark:border-gray-800 shadow-3xl shadow-teal-600/20 dark:shadow-lg dark:shadow-teal-600/30 dark:text-white-400 border-2 border-transparent hover:border-current4'}>
                        <div className={'card-header flex-wrap bg-amber-50 dark:bg-gray-800 dark:text-white'}>
                            <div className={'text-center align-middle'}>
                                <div className={'m-1 text-xl'}>
                                    {skill.icon !== null ? skill.icon : ''}
                                    <h1 className={'font-extrabold font-burtons'}>{skill.title}</h1>
                                </div>
                            </div>
                            <div style={{
                                    border: "inset",
                                    borderColor: 'beige',
                                    boxShadow: 'teal 2px 5px 5px 2px'
                                }} 
                                 className={'sm:flex-row font-medium text-xl p-10 bg-teal-50 dark:bg-gray-800 dark:text-white'}>
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