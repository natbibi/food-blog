import React from 'react'
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';
import { Header, Footer } from './layout'

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Pages.Home />
        </Route>
        <Route path="/contact">
          <Pages.Contact />
        </Route>
        <Route path="/eatout">
          <Pages.EatOut />
        </Route>
        <Route path="/eatin">
          <Pages.EatIn />
        </Route>
        <Route>
          <Pages.NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );

};

export default App;