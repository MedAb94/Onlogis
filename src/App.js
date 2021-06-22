import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import FooterApp from './components/Footer';
import Discover from './components/pages/Discover';
import Pricing from './components/pages/Pricing';
import Support from './components/pages/Support';
import WeAreCloseToYou from './components/pages/WeAreCloseToYou';
import Installation from './components/pages/Installation';
import TechnicalSupport from './components/pages/TechnicalSupport';

function App() {
  return (
    <>
        <Router>
              <Navbar/>
              <Switch>
                   <Route path="/" exact component={Home}></Route>
                   <Route path="/Discover" component={Discover}></Route>
                   <Route path="/Pricing" component={Pricing}></Route>
                   <Route path="/Support" component={Support}></Route>
                   <Route path="/Installation" component={Installation}></Route>
                   <Route path="/TechnicalSupport" component={TechnicalSupport}></Route>
                   <Route path="/We-are-close-to-you" component={WeAreCloseToYou}></Route>
              </Switch>
              <FooterApp/>
        </Router>
    </>
  );
}

export default App;
