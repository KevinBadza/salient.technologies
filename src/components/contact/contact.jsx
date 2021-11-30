import './contact.css';
import emailjs from 'emailjs-com';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useState } from 'react';
import { ThemeContext } from '../../context';
import { useContext } from 'react';

const Contact = () => {
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_3mn6xw8',
        'template_itsuriw',
        e.target,
        'user_DGFKiEc29vAcRCkNO9Vfv'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setDone(true);
  };

  return (
    <div className='contactSection'>
      <div className='contactBackground'></div>
      <div className='contactWrapper'>
        <div className='contactLeft'>
          <h1 className='contactLeftTitle'>Let's Discuss your Project</h1>
          <div className='contactInfo'>
            <div className='contactInfoItem'>
              <img
                src={Phone}
                alt='Salient Technologies Phone'
                className='contactIcon'
              />
              +2784 582 9333
            </div>
            <div className='contactInfoItem'>
              <img
                src={Email}
                alt='Salient Technologies Email'
                className='contactIcon'
              />
              kevyb07@gmail.com
            </div>
            <div className='contactInfoItem'>
              <img
                src={Address}
                alt='Salient Technologies Address'
                className='contactIcon'
              />
              Alberton, Johanesburg, South Afica 1449
            </div>
          </div>
        </div>
        <div className='contactRight'>
          <p className='contactDescription'>
            What's your Story?. Get in Touch. We are always intrested in all the
            projects
          </p>
          <form onSubmit={submitHandler}>
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              Placeholder='Name'
              name='userName'
              required
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              Placeholder='Email Address'
              name='userEmail'
              required
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              Placeholder='Phone Number'
              name='userNumber'
              required
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              Placeholder='Subject'
              name='userSubject'
              required
            />
            <textarea
              style={{ backgroundColor: darkMode && '#333' }}
              name='message'
              rows='5'
              placeholder='Message'
              required
            ></textarea>
            <button type='submit'>Send Message</button>
            {done && ' Thank You. Message has been sent. We will be in Touch'}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
