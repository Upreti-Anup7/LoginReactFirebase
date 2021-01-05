import React from 'react';
import './App.css';
import Header from './Header';
import Line from './Line'
import Navigation from './Navigation'
import Body from './Body'
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Registration from './Registration'

function App() {
  return (
    <Router>
      <div className="app">
          <Header />
          <Line />
          <Navigation />    
          <Switch>
            <Route path="/registration"> 
              <Registration />
            </Route>
            <Route path="/">
                <Body />
                <Line />
                <Footer />
            </Route>
            
        </Switch>        
      </div>
    </Router>
    
  );
}

export default App;
