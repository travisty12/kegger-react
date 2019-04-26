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
      loginEnabled: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const newState = {...this.state};
    newState.loginEnabled = true;
    this.setState({loginEnabled: newState.loginEnabled});
    console.log(this.state);
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
          <Route exact path='/' component={Landing} />
          <Route path='/kegs' render={() => <KegList loginEnabled={this.state.loginEnabled} />} />
          <Route path='/denied' component={Denied} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
