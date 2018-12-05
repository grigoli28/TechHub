import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const Index = () => (
  <>
    <h1>Index Page</h1>
    <p>Lorem Ipsum Dolor Sit Amet</p>
  </>
);

// match, history, location
const Product = ({ match }) => (
  <>
    <h2>Category {match.params.category.toUpperCase()}</h2>
  </>
);

const Products = ({match}) => (
  <>
    <h1>Products Page</h1>
    <p>Lorem Ipsum Dolor Sit Amet</p>

    <ul>
      <li>
        <Link to={`${match.url}/mobiles`}>Mobile Phones</Link>
      </li>
      <li>
        <Link to={`${match.url}/laptops`}>Laptops</Link>
      </li>
      <li>
        <Link to={`${match.url}/cameras`}>Cameras</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:category`} component={Product}/>
    <Route path={`${match.url}`} exact render={() => <p>Select Category</p>}/>
  </>
);

const Portfolio = () => (
  <>
    <h1>Portfolio Page</h1>
    <p>Lorem Ipsum Dolor Sit Amet</p>
  </>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Index</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" component={Index} exact />
          <Route path="/products" component={Products}/>
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;
