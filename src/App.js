import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Layout/Navbar/Navbar';
import Footer from './Layout/Footer/Footer';

import Home from './pages/Home/Home';

const GetStarted = React.lazy(() => import('./pages/GetStarted/GetStarted'));
const References = React.lazy(() => import('./pages/References/References'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          path='/get-started'
          render={
            () => (
              <Suspense fallback={<center>Loading...</center>}>
                <GetStarted />
              </Suspense>
            )
          }
        />
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
