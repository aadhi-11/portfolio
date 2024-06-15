import React, { useState } from 'react'
import Styles from './Contact.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
const Contact = () => {
  const [open,setOpen]=useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      emailjs.send(
        'service_ipjey0g', // Replace with your EmailJS service ID
        'template_lgccxu3', // Replace with your EmailJS template ID
        formData,
        'ztP8wO9bKQVUcOyA7' // Replace with your EmailJS user ID
      ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setOpen(true);
        setFormData({ name: '', email: '', message: '' });
      }).catch((error) => {
        console.log('FAILED...', error);
      });

    }catch(err){

    }

    
  };

  return (
    <div className={Styles.container} >
      <div className='title' >Contact Me</div>
      <div className={Styles.inner} >
        <div className={Styles.left} >
          <Link to={'https://github.com/aadhi-11'} style={{ textDecoration: 'none', color: 'white' }} >
            <div className={Styles.social} >
              <GitHubIcon />:
              aadhi-11
            </div>
          </Link>
          <Link to={'https://www.linkedin.com/in/adithyadas-u-s-889a9220a/'} style={{ textDecoration: 'none', color: 'white' }}  >
            <div className={Styles.social} >
              <LinkedInIcon />:
              Adithyadas U S
            </div>
          </Link>

          <div className={Styles.social} >
            <EmailIcon />:
            dazadithyadas@gmail.com
          </div>

          <a href="https://wa.me/918590089407" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
            <div className={Styles.social}>
              <WhatsAppIcon />
              +918590089407
            </div>
          </a>
        </div>
        <div className={Styles.right} >
          <form className={Styles.rightfrom} onSubmit={handleSubmit}>
            <div className={Styles.each} >
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={Styles.each} >
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={Styles.each} >
              <label>Message:</label>
              <input
                name="message"
                type='text'
                value={formData.message}
                onChange={handleChange}
                required
            />
            </div>
            <button className={Styles.btn} type="submit">Send</button>
          </form>
        </div>

      </div>
      <Snackbar
  open={open}
  autoHideDuration={4000}
  onClose={handleClose}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
>
  <Alert
    onClose={handleClose}
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >
    Message received successfully!
  </Alert>
</Snackbar>


    </div>
  )
}

export default Contact