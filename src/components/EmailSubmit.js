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
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            /*             axios.post(process.env.SMTP_HOST, {...data})
                               .then(response => {
                                   console.log(response);
                                   if (response?.status === 200) {
                                       const content = response;
                                       const res = {
                                           status: 200,
                                           data: content?.data.choices[0].message.content,
                                           thread: content.data.id
                                       }
                                   }
                               });
                               
                                   
                           } else {
                               console.error(response);
                               return null;
                           }
                       } catch (err) {
                           console.log(err);
                           throw err;
                       }*/
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
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                /*
                                setSubmitted(true);
                                setFormData({
                                    name: '',
                                    email: '',
                                    message: ''
                                });
                */
            } else {
                console.error('Failed to submit');
            }
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
        <div className={'container dark:bg-gray-800 dark:text-white text-black bg-white font-burtons'}>
            <form>
                
                <button className={'cursor-pointer'}
                        type="submit">
                    Submit Email
                </button>

            </form>
        </div>
    )
}

export default EmailSubmit;