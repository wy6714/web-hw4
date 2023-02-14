import React, { useState } from 'react';
import Input from './input';


const Product = props => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredURL, setEnteredURL] = useState('');
    const [enteredDes, setEnteredDes] = useState('');


    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
    };
    const URLChangeHandler = event => {
        setEnteredURL(event.target.value);
    };
    const DesChangeHandler = event => {
        setEnteredDes(event.target.value);
    };

    const submitProductHandler = event => {
    event.preventDefault();
    props.onAddProduct(enteredTitle, enteredURL, enteredDes);
    }

    return(
       <form onSubmit={submitProductHandler}>
        <Input
          type="text"
          label="Title"
          id="Title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <Input
          type="text"
          label="URL"
          id="URL"
          value={enteredURL}
          onChange={URLChangeHandler}
        />
        <Input
          type="text"
          label="Description"
          id="Description"
          value={enteredDes}
          onChange={DesChangeHandler}
        />
        <button variant="success" className="btn btn-success" type="submit">Submit</button>
        <button onClick={() => window.location.reload(true)}>Clear</button>
       </form>
    )
};

export default Product;