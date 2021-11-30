import './productList.css';
import Product from '../product/product';
import { products } from '../../data';

const ProductList = () => {
  return (
    <div className='productsList'>
      <div className='productListText'>
        <h1 className='productListTitle'> Create and Inspire</h1>
        <p className='productListDescription'>
          Salient Technologies has an creative porfolion that your work has been
          waiting for. Beautiful designs stunning portifolio styles and a whole
          lot more awaits.
        </p>
      </div>
      <div className='productListList'>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
