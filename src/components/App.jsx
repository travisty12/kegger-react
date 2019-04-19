import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import KegList from './KegList';
import Denied from './Denied';
import bg from '../assets/images/Sand-bg.png';

function App(){
  const GlobalStyle = {
    backgroundImage: "url(" + bg + ")",
    height: "100%"
  };
  return (
    <div style={GlobalStyle}>
      <Header/>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/kegs' component={KegList} />
        <Route path='/denied' component={Denied} />
        <Route component={Error404} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
