import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

export default function Home() {
  return (
    <BrowserRouter basename="/home">
      Home Subpage
      <Link to="/tab1">Tab1</Link>
      <Link to="/tab2">Tab2</Link>
      <Switch>
        <Route path="/tab1" component={Tab1} />
        <Route path="/tab2" component={Tab2} />
      </Switch>
    </BrowserRouter>
  );
}
