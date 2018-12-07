import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../../redux/actions';


class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
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
            email: this.state.email,
            password: this.state.password,
        };

        // call action
        this.props.createUser(post);
    }
    
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Username: </label>
                <br />
                <input type="text" name="username" onChange={this.onChange} value={this.state.username} required />
            </div>
            <br />
            <div>
                <label>Email: </label>
                <br />
                <input type="text" name="email" onChange={this.onChange} value={this.state.email} required />
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
            Already have an account?
            <Link to="login"> Login</Link>
        </p>
      </div>
    );
  };
}

SignupForm.PropTypes = {
    createUser: PropTypes.func.isRequired
};

export default connect(null, { createUser })(SignupForm);