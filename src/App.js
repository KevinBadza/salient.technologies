import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/about';
import ProductList from './components/productList/productList';
import Contact from './components/contact/contact';
import Toggle from './components/toggle/toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        color: darkMode && 'white',
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
