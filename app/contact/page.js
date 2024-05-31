'use client';
import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FloatingLabel} from "react-bootstrap"; // Import Bootstrap CSS
import {useRouter} from 'next/navigation';

const EmailSubmit = () => {
    const router = useRouter();
    const [submit, setSubmit] = useState(false);
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [message, setMessage] = useState(false);

    useEffect(() => {
    }, [name, email, message, submit]);
    
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
    
    const changeRouterToContact = () => {
        router.push('/');
    };

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
        <section className={'flex flex-col bg-gray-800 text-white min-h-screen font-burtons'}>
                <a className={'flex-col start-2 pl-20 pt-20 text-center'}
                   onClick={changeRouterToContact}>
                    <span className={'text-white cursor-pointer hover:bg-red-500 hover:text-white transition-color'}>
                        Back
                    </span>
                </a>


            <div className={'p-20 container-sm items-center'}>
                <h2 className={'items-center text-justify'}>Email Form</h2>
                <Form className={'pt-10 bg-gray-800'}>
                    <Form.Group 
                        className="mb-3" 
                        controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            className={'cursor-pointer'}
                            type="name" 
                            placeholder="Enter name"/>
                        <Form.Label 
                            className={'pt-5'}>
                                Email address
                        </Form.Label>
                        <Form.Control 
                            className={'cursor-pointer'}
                            type="email" 
                            placeholder="Enter email"/>
                        <Form.Label className={'pt-10'}>Message</Form.Label>
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Message"
                            aria-placeholder={'Message'}
                            className="mb-3 p-10 bg-white cursor-pointer"
                            style={{height: '100px'}}
                        />
                    </Form.Group>

                    <Button className={'cursor-pointer'}
                        variant="primary" 
                        type="submit">
                            Submit Email
                    </Button>
                </Form>
            </div>
        </section>
    )
}

export default EmailSubmit;