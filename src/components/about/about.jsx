import React from 'react';
import './about.css';
import AboutSalientImg from '../../img/About. Salient Technologies.jpg';
import SalientAward from '../../img/Awards Salient Technologies.png';

const About = () => {
  return (
    <div className='aboutSalient'>
      <div className='aboutLeft'>
        <div className='aboutCard bg'></div>
        <div className='aboutCard'>
          <img
            src={AboutSalientImg}
            alt='About Salient Technologies'
            className='aboutImage'
          />{' '}
        </div>
      </div>
      <div className='aboutRight'>
        <h1 className='aboutTitle'>About Us</h1>
        <p className='aboutMain'>
          We Design, Build, Deploy and Manage Custom services and softwares of
          our clients so that they can focus on their core businesses.
        </p>
        <p className='aboutDescription'>
          Custom Softwares are a great indicator for artistry and engineering.
          We continuosly strive to deliver the very best of software and
          hardware solutions using the latest of technologies to suit each
          client's unique business needs.
        </p>
        <div className='aboutAward'>
          <img
            src={SalientAward}
            alt='Salient Technologies Award'
            className='awardImage'
          />
          <div className='awardText'>
            <h4 className='awardTitle'>International Design Awards</h4>
            <p className='awardDescription'>Online Best Design Awards 2019 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
