import React, { Component } from 'react';

import './style.css';

class Step2 extends Component {
  onNext = () => {
    // this.props.saveStepOne(this.state);
    this.props.onNext();
  }

  onPrev = () => {
    this.props.onPrev();
  }

  render() {
    return (
      <div>
        Krok 2
        <button onClick={this.onPrev}>Cofnij</button>
        <button onClick={this.onNext}>Dalej</button>
      </div>
    )
  }
}
export default Step2;
