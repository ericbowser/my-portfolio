import React, {useState, useEffect} from "react";

const EmailSubmit = () => {
    const [submit, setSubmit] = useState(false);
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [message, setMessage] = useState(false);
    const [home, setHome] = useState('/contact');

    useEffect(() => {
    }, [name, email, message, submit, home]);

    useEffect(() => {
        if (submit) {
            
        }
    }, [submit])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        } catch (error) {
            console.error('Failed to submit');
        }
    }
    const handleChange = (event) => {
        /*  setFormData({
              ...formData,
              [event.target.name]: event.target.value
          });*/
    };

    return (
        <div className="pt-20 text-center font-burtons">
            <form className="dark:bg-gray-800 dark:text-white shadow-md rounded">
                <h2 className="text-2xl font-bold mb-6">Email Me</h2>
                <div className="mb-4 dark:text-white">
                    <label className="block text-sm font-bold mb-2" 
                           htmlFor="name">
                        Name
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="name" 
                        type="text" 
                        placeholder="Name"/>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                           id="email"
                           type="email"
                           placeholder="Email"/>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-64 py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="message" 
                        type="text" 
                        placeholder="Email Message"/>
                </div>
                <div>
                    <button onClick={() => setSubmit(true)}
                        className="w-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            type="button">
                        Submit Email
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EmailSubmit;