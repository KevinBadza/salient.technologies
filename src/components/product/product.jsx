import './product.css';

const product = ({ img, link }) => {
  return (
    <div className='ourProduct'>
      <div className='productBrowser'>
        <div className='productCircle'></div>
        <div className='productCircle'></div>
        <div className='productCircle'></div>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt='' className='productImage' />
      </a>
    </div>
  );
};

export default product;
