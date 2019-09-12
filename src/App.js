import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import FlashCards from './components/FlashCards';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import { Container, } from 'semantic-ui-react';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/flash-cards" component={FlashCards}/>
        <Route component={NoMatch}/>
      </Switch>
    </Container>
  </>
);

export default App;
