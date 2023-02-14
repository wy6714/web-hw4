import React from 'react';

//import './ProductItem.css';

const ProductItem = props => {
  return (
    <li className="product-item">
      <h2>Title{props.title}</h2>
      <p>URL: {props.url}</p>
      <p>Description: {props.description}</p>
    </li>
  );
};

export default ProductItem;
