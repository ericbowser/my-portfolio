const Footer = () => {
    return (
        <footer className="bg-white text-black dark:text-white dark:bg-gray-800 py-8 mt-10">
            <div className={'text-center'}>
                <h1 className="text-2xl font-bold">E.R.B. - Eric Ryan Bowser</h1>
                <p className="mt-2">&copy; {new Date().getFullYear()} E.R.B. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;