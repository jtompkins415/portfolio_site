import {useState, useEffect} from 'react';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com'
import { variableObject } from './variableObjectPrivate';

function ContactForm(){
    
    const {serviceId, templateId, publicKey} = variableObject

    const SERVICE_ID = serviceId;
    const TEMPLATE_ID = templateId;
    const PUBLIC_KEY = publicKey;


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
     });


     function handleChange(e){
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
     };

     function handleSubmit(e){
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target,PUBLIC_KEY).then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Message sent successfully!'
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'Error sending message',
                text: error.text
            })
        });
        setFormData({
            name: '',
            email: '',
            message: ''
        })
     }


    return(
        <div className='form-main-container'>
            <div className='form-title-container'>
                <h2> Let's Collaborate! </h2>
            </div>
            <div className='form-cta-container'>
                <p>Let's join forces and turn your vision into reality.</p>
                <p>Don't hesitate to reach out and share your project details with me. Whether you have a clear roadmap or just a spark of an idea, I'll listen attentively and work closely with you to deliver a tailor-made solution that meets your needs and exceeds your expectations.</p>
            </div>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name: </label>
                    <input 
                    type='text' 
                    id='name' 
                    name='name'
                    value={formData.name}
                    onChange={handleChange} 
                    required />
                    <label htmlFor='email'>Email: </label>
                    <input 
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required />
                    <label htmlFor='message'>What's Your Idea?</label>
                    <textarea 
                    id='meessage' 
                    name='message' 
                    rows={5} 
                    cols={33}
                    value={formData.message}
                    onChange={handleChange}
                    required />
                    <button>Submit</button>
                </form>
            </div>  
        </div>
        
    )
};

export default ContactForm;