import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Layout/Navbar/Navbar';
import Footer from './Layout/Footer/Footer';

import Home from './pages/Home/Home';
import GetStarted from './pages/GetStarted/GetStarted';

const References = React.lazy(() => import('./pages/References/References'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/get-started' component={GetStarted} />
        <Route
          path='/references'
          render={
            () => (
              <Suspense fallback={<center>Loading...</center>}>
                <References />
              </Suspense>
            )
          }
        />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
