import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Category from './components/Category';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/category" component={ Category } />
          <Route exact path="/" component={ Home } />
        </Switch>
        
      </BrowserRouter>
    );
  }
}

export default App;
