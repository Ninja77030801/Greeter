import * as React from 'react';
import './style.css';

export default class Greeter extends React.Component {
  render() {
    var greetings = [
      'Hello there',
      'Howdy',
      'Welcome',
      'Pleased to meet you',
    ];
    var greeting =
      greetings[Math.floor(Math.random() * greetings.length)];
    return (
      <div className="greeter">
        <h2>
          {greeting}, {this.props.name}!
        </h2>
      </div>
    );
  }
}