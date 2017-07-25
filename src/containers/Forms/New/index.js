import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css';

import Menu from '../../../components/Forms/CreateFormMenu';

const steps = {
  1: (onPrev, onNext) => { const Step1 = require('../Steps/Step1'); return <Step1.default onPrev={onPrev} onNext={onNext}/> },
  2: (onPrev, onNext) => { const Step2 = require('../Steps/Step2'); return <Step2.default onPrev={onPrev} onNext={onNext}/> },
  3: (onPrev, onNext) => { const Step3 = require('../Steps/Step3'); return <Step3.default onPrev={onPrev} onNext={onNext}/> },
  4: (onPrev, onNext) => { const Step4 = require('../Steps/Step4'); return <Step4.default onPrev={onPrev} onNext={onNext}/> },
  5: (onPrev, onNext) => { const Step5 = require('../Steps/Step5'); return <Step5.default onPrev={onPrev} onNext={onNext}/> },
};

class FormsNew extends Component {
  // static propTypes = {}
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  navigate = (step) => {
    this.setState({ step });
  }


  render() {
    const { step } = this.state;
    return (
      <Row>
          <Col xs={2} >
            <Menu activeStep={this.state.step}/>
          </Col>
          <Col xs={10}>
            {steps[step](() => { this.navigate(step - 1)}, () => { this.navigate(step + 1)}  )}
          </Col>
      </Row>
    );
  }
}
export default FormsNew;
