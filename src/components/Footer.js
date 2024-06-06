import React from 'react';

const Footer = () => {
    return (
        <div className="dark:text-white my-12">
            <div className={'text-center'}>
                <h1 className="text-2xl font-bold">E.R.B. - Eric Ryan Bowser</h1>
                <p className="mt-2">&copy; {new Date().getFullYear()} E.R.B. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;