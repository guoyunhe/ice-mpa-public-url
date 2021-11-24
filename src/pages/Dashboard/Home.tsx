import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default function Home() {
  return (
    <BrowserRouter basename="/customs/dashboard.html">
      <Link to="/">Home</Link>
      <Link to="/tab1">Tab1</Link>
      <Link to="/tab2">Tab2</Link>
    </BrowserRouter>
  );
}
