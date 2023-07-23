import {useState, useEffect} from 'react';
import { Button } from '@mui/material';

function ContactForm(){
    
    const SERVICE_ID = process.env.SERVICE_ID;
    const TEMPLATE_ID = process.env.TEMPLATE_ID;
    const PUBLIC_KEY = process.env.PUBLIC_KEY;


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
     });


     function handleChange(e){
        const [name, value] = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
     };


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
                <form>
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
                    <Button variant='contained'>Submit</Button>
                </form>
            </div>  
        </div>
        
    )
};

export default ContactForm;