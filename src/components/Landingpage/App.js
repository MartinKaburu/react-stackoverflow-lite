import React, {Component} from 'react';
import './style.sass'

class App extends Component {
  render() {
    return (
<div className="my-page">
  <link rel="stylesheet" href="./style.css"/>
  <div className="left">
    <form action="index.html" method="get" className="form signup animated bounceInLeft">
        <h1>Sign Up</h1>
        <hr/>
        <div className="field-wrap">
          <label>
            First Name
          </label>
          <input type="text" required autocomplete="off" />
        </div>
        <div className="field-wrap">
          <label>
            Last Name
          </label>
          <input type="text"required autocomplete="off"/>
        </div>
        <div className="field-wrap">
          <label>
            Email
          </label>
          <input type="email" required autocomplete="on"/>
        </div>
        <div className="field-wrap">
          <label>
            Password
          </label>
          <input type="password" required autocomplete="off"/>
        </div>
      <div className="field-wrap">
        <button type="submit" className="button" value="Submit"></button>
      </div>
    </form>
  </div>
  <div className="right">
    <form action="index.html" method="get" className="form login animated bounceInRight">
        <h1>Log In</h1>
        <hr/>
        <div className="field-wrap">
          <label>
            Email
          </label>
          <input type="email" required autocomplete="on"/>
        </div>
        <div className="field-wrap">
          <label>
            Password
          </label>
          <input type="password" required autocomplete="off"/>
        </div>
        <div className="field-wrap">
          <label>
            <input id="rememberme" name="rememberme" value="remember" type="checkbox" /> &nbsp;Remember me
          </label>
        </div>
        <div className="field-wrap">
          <a href="#">Forgot password?</a>
        <button type="submit" className="button" value="Submit"/>
      </div>
    </form>
  </div>
</div>
    );
  }
}

export default App;
