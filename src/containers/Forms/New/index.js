import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css';


const steps = {
  1: (onPrev, onNext) => { const Step1 = require('../../../components/Forms/Step1'); return <Step1.default onPrev={onPrev} onNext={onNext}/> },
  2: (onPrev, onNext) => { const Step2 = require('../../../components/Forms/Step2'); return <Step2.default onPrev={onPrev} onNext={onNext}/> },
  3: (onPrev, onNext) => { const Step3 = require('../../../components/Forms/Step3'); return <Step3.default onPrev={onPrev} onNext={onNext}/> },
  4: (onPrev, onNext) => { const Step4 = require('../../../components/Forms/Step4'); return <Step4.default onPrev={onPrev} onNext={onNext}/> },
  5: (onPrev, onNext) => { const Step5 = require('../../../components/Forms/Step5'); return <Step5.default onPrev={onPrev} onNext={onNext}/> },
};

const navLinks = [
  { title: 'Krok 1', text: ' Domena nazwa formularza', step: 1 },
  { title: 'Krok 2', text: ' Kontaktowe adresy e-mail', step: 2 },
  { title: 'Krok 3', text: ' Budowa formularza', step: 3 },
  { title: 'Krok 4', text: ' Tematy i powiazanie adresow email', step: 4 },
  { title: 'Krok 5', text: ' Tresc wiadomosci kontaktowej', step: 5 },
];

const MenuItem = ({ title, text, isActive }) => <li className={(isActive ? 'active' : '')}><h4>{title}</h4>{text}<hr /></li>
const Menu = ({ activeStep }) =>
  (<ul className="steps-menu">
    { navLinks.map(
      ({ title, text, step }, index) =>
        (<MenuItem
          title={title}
          text={text}
          isActive={step === activeStep}
          key={`menu-item-${step}`}
        />)
    )}
  </ul>)

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
