import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> 2f2e6adceb13a9998452df8e5ff65400daace06e
import './App.css';
import Header from './component/Header';
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home';
import Tutorials from './screens/Tutorials';
import Contact from './screens/Contact';
import Services from './screens/Services';
import About from './screens/About';
import Footer from './component/Footer';
import { Layout } from 'antd';



import Header from './component/Header';
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home';
import Tutorials from './screens/Tutorials';
import Contact from './screens/Contact';
import Services from './screens/Services';
import About from './screens/About';
import Footer from './component/Footer';
import { Layout } from 'antd';



function App() {
  return (
    <div className='App'>
<<<<<<< HEAD
      <Header />
      <div className='column screen-container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/tutorials' component={Tutorials} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/services/:id' component={Services} />
        </Switch>
=======

        <Header />
      
      <div className='column'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/tutorials' component={Tutorials} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/services/:id' component={Services} />
          </Switch>
      
       
>>>>>>> 2f2e6adceb13a9998452df8e5ff65400daace06e
      </div>
      <Footer />
    </div>
  );
}

export default App;
