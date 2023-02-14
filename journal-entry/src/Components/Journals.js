import React, { useState } from 'react';

const NewProduct = props => {
    const [enteredTitle, setEnteredTitle] = useState('');


    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
      };
}