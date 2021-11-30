import React from 'react';
import './toggle.css';
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const clickHandler = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };
  return (
    <div className='toggle'>
      <img
        src={Sun}
        alt='Salient Technologies Light Theme'
        className='toggleIcon'
      />
      <img
        src={Moon}
        alt='Salient Technologies Dark Theme'
        className='toggleIcon'
      />
      <div
        className='togglebuttom'
        onClick={clickHandler}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
