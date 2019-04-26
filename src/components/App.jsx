import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import KegList from './KegList';
import Denied from './Denied';
import bg from '../assets/images/Sand-bg.svg';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loginEnabled: false,
      accessGranted: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleAccess = this.handleAccess.bind(this);
  }

  handleLogin() {
    if(location.hash == '#/kegs') {
      const newState = {...this.state};
      newState.loginEnabled = !this.state.loginEnabled;
      this.setState({loginEnabled: newState.loginEnabled});
    }
  }

  handleAccess() {
    const newState = {...this.state};
    newState.accessGranted = true;
    this.setState({accessGranted: newState.accessGranted});
  }

  render() {
    const GlobalStyle = {
      backgroundImage: 'url(' + bg + ')',
      height: '100%'
    };
    return (
      <div style={GlobalStyle}>
        <Header onLogin={this.handleLogin} />
        <Switch>
          <Route exact path='/' render={() => <Landing onAccess={this.handleAccess} />} />
          <Route path='/kegs' render={() => <KegList accessGranted={this.state.accessGranted} loginEnabled={this.state.loginEnabled} />} />
          <Route path='/denied' component={Denied} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
