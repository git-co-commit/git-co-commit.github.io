import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Layout/Navbar/Navbar';
import Footer from './Layout/Footer/Footer';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
