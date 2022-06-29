import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import routes from './router';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
class App extends Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Header/>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} component={route.main} exact={route.exact} />
            )
            )}
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;

