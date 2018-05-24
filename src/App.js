import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Link to="/users">Users</Link>
            <Link to="/users/profile">UsersProfile</Link>
          </header>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/users" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}



const Home = () => {
  return (
    <div>
      home
    </div>
  )
}



const UserList = () => {
  return (
    <div>
      UserList
    </div>
  )
}




class UserProfile extends Component {

  componentDidMount() {
    console.log('profile mounted')
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/users/profile/info">info</Link>
          <Switch>
            <Route path="/users/profile" exact component={UserInfo} />
            <Route path="/users/profile/info" exact component={UserInfo2} />
          </Switch>
        </div>
      </div>
    )
  }
}

const UserInfo = () => {
  return (
    <div>
      UserInfo
    </div>
  )
}


const UserInfo2 = () => {
  return (
    <div>
      UserInfo2
    </div>
  )
}



class User extends Component {
  componentDidMount() {
    console.log('mounted')
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/users" exact component={UserList} />
          <Route path="/users/profile" component={UserProfile} />
        </Switch>
      </div>
    )
  }
}
export default App;
