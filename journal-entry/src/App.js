import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header';
import Product from './Components/Product';
import ProductList from './Components/ProductList';


function App() {
  
  
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [currentID, setCurrentID] = useState([1]);
  const [isLoading, setIsLoading] = useState(false);

  const addProductHandler = (title, url, description) => {
    const newProduct = {
      title: title,
      url: url,
      description: description,
      id: currentID  
    };

    setLoadedProducts(prevProducts => {
      return prevProducts.concat({
        ...newProduct,
      });
    });

    setCurrentID(prevID => {
        return currentID + 1;
    });
  }

  return (
  
    <React.Fragment>
      <Header />
      <main>
        <Product onAddProduct={addProductHandler} />
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && <ProductList items={loadedProducts} />}
      </main>
    </React.Fragment>
  );
    

  
}

export default App;