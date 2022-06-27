import { Route, Switch } from 'react-router'

import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/Footer';
import ItemListContainer from './components/ItemLIstContainer/ItemListContainer';
import Navbar from './components/navbar/Navbar';
import React from "react";
import SolanaCollections from './components/solanaCollections/solanaCollections';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Switch>
        <Route exact path='/'>
          <SolanaCollections/>
          <ItemListContainer/>

        </Route>
        <Route exact path='/footer' >
        </Route>
    </Switch>
    <Footer/>

   </BrowserRouter>
  );
}

export default App;
