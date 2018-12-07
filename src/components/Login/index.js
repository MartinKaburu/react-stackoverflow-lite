import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signinUser } from '../../redux/actions';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            username: this.state.username,
            password: this.state.password,
        };

        // call action
        this.props.signinUser(post);
    }
    
  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Username: </label>
                <br />
                <input type="text" name="username" onChange={this.onChange} value={this.state.username} required />
            </div>
            <br />
            <div>
                <label>Password: </label>
                <br />
                <input type="password" onChange={this.onChange} value={this.state.password} required />
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
        <p>
            Don't have an account?
            <Link to="signup"> Sign Up</Link>
        </p>
      </div>
    );
  };
}

LoginForm.PropTypes = {
    signinUser: PropTypes.func.isRequired
};

export default connect(null, { signinUser })(LoginForm);