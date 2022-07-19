import ProductItem from './ProductItem';
import classes from './Products.module.css';

const BOOK_PRODUCTS = [
  {
  id:"p1",
  price:50,
  title:'your book',
  description:'my first book'
},
{
  
    id:"p2",
    price:50,
    title:'my book',
    description:'my second book'
  
}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {BOOK_PRODUCTS.map((product)=>(
        <ProductItem
        key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;
