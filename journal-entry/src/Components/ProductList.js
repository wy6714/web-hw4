import React from 'react';

import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = props => {
  let content;
  if (!props.items || props.items.length === 0) {
    content = <p>Start to Add Your Journal...</p>;
  } else {
    content = (
      <ul className="Journal List">
        {props.items.map(p => (
          <ProductItem key={p.id} title={p.title} url={p.url} description={p.description} />
        ))}
      </ul>
    );
  }

  return <section id="products">{content}</section>;
};

export default ProductList;