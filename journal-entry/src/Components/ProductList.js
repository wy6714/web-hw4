import React from 'react';

import ProductItem from './ProductItem';
//import './ProductList.css';

const ProductList = props => {
  let content;
  if (!props.items || props.items.length === 0) {
    content = <p>Could not find any person. Maybe create one?</p>;
  } else {
    content = (
      <ul className="Journal List">
        {props.items.map(p => (
          <ProductItem key={p.id} Title={p.title} URL={p.url} Description={p.description} />
        ))}
      </ul>
    );
  }

  return <section id="products">{content}</section>;
};

export default ProductList;