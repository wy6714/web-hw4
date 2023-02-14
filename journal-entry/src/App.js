import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Product from './Components/Product';
import ProductList from './Components/ProductList';


//function App() {
class App extends Component {
  
  state = {
    entries: [

    ]
  }
   
  handleSubmit = entry => {
    this.setState({ items: [...this.state.items, item]})
  }

  addProductHandler = (title, url, description) => {
    try {
      const newProduct = {
        title: title,
        url: url, // "+" to convert string to number
        description: description // "+" to convert string to number
        
      };
      this.setState({ items: [...this.state.item, item]});

      // setLoadedProducts(prevProducts => {
      //   return prevProducts.concat({
      //     ...newProduct,
      //     id: currentID
      //   });
      // });

    } catch (error) {
      alert(error.message || 'Something went wrong!');
    }
  }

  render(){
    //const { entries } = this.state;

    return(
      //<React.Fragment>
      <div className="App">
        <Header />
        <main>
          <Product onAddProduct={this.addProductHandler} />
          {/*<Product handleSubmit={this.handleSubmit}/>*/}
          <ProductList items={this.state.entries} />
        </main>
      </div>
      
    //</React.Fragment>
    )
  }
    

  
}

export default App;
