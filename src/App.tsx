import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import 'react-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { GuestPage } from './pages/GuestPage';
import { SummaryPage } from './pages/SummaryPage';
import { DeliveryPage } from './pages/DeliveryPage';
import { MenuPage } from './pages/menu-page/MenuPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/guests">Guests</Link>
        <Link to="/summary">Summary</Link>
        <Link to="/delivery">Delivery</Link>
        <Link to="/menu">Menu</Link>
      </nav>

      <Switch>
        <Route path="/delivery" component={DeliveryPage} />
        <Route path="/guests" component={GuestPage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/summary" component={SummaryPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
