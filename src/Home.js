import React, {Component} from 'react';
import marvel from './marvel.mp4';
import './App.sass';

class Home extends Component {
  myHandler = () => {
    this.props.history.push('/smart');
  }
  render () {
      return (
        <div>
            <div>
              <p> This is my stupid component, click on the video to see a smarter one.</p>
            </div>
            <div>
              <video className='videoTag' autoPlay loop muted onClick={this.myHandler}>
                  <source src={marvel} type='video/mp4' />
              </video>
          </div>
        </div>
    );
    }
};

export default Home;
