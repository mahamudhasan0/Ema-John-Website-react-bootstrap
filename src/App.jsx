import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductItem from './components/ProductItem/ProductItem';

const App = () => {
   return (
      <Router>
         <Header />
         <Switch>
            <Route exact path="/">
               <Shop />
            </Route>
            <Route path="/shop">
               <Shop />
            </Route>
            <Route path="/review">
               <Review />
            </Route>
            <Route path="/inventory">
               <Inventory />
            </Route>
            <Route path="/product/:key">
               <ProductItem />
            </Route>
            <Route path="*">
               <NotFound />
            </Route>
         </Switch>
      </Router>
   );
};

export default App;
