import React, { Component } from 'react';
import { If, Then, Else } from 'react-if';
import { Row, Col } from 'react-bootstrap';
import Step1 from '../../../components/Forms/Step1';
import Step2 from '../../../components/Forms/Step2';
import Step3 from '../../../components/Forms/Step3';
import Step4 from '../../../components/Forms/Step4';
import Step5 from '../../../components/Forms/Step5';
import './style.css';

class FormsNew extends Component {
  // static propTypes = {}
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }
  

  next = () =>
  {
    let step = (this.state.step+1 > 5 ? 5 : this.state.step+1);

    this.setState({
      step: step
    });
  }

  back = () =>
  {
    let step = (this.state.step-1 > 0 ? this.state.step-1 : 1);

    this.setState({
      step: step
    });
  }

  render() {
    return (
      <Row>
          <Col xs={2} >
            <ul className="steps-menu">
              <li className={(this.state.step == 1 ? 'active' : '')} ><h4>Krok 1</h4> Domena nazwa formularza<hr /></li>
              <li className={(this.state.step == 2 ? 'active' : '')} ><h4>Krok 2</h4> Kontaktowe adresy e-mail<hr /></li>
              <li className={(this.state.step == 3 ? 'active' : '')} ><h4>Krok 3</h4> Budowa formularza<hr /></li>
              <li className={(this.state.step == 4 ? 'active' : '')} ><h4>Krok 4</h4> Tematy i powiazanie adresow email<hr /></li>
              <li className={(this.state.step == 5 ? 'active' : '')} ><h4>Krok 5</h4> Tresc wiadomosci kontaktowej <hr /></li>
            </ul>
          </Col>
          <Col xs={10}>
            <If condition={this.state.step == 1}><Then><Step1 /></Then> </If>
            <If condition={this.state.step == 2}><Then><Step2 /></Then> </If>
            <If condition={this.state.step == 3}><Then><Step3 /></Then> </If>
            <If condition={this.state.step == 4}><Then><Step4 /></Then> </If>
            <If condition={this.state.step == 5}><Then><Step5 /></Then> </If>
            
            <a onClick={this.back}>Cofnij</a>
            <a onClick={this.next}>Dalej</a>
          </Col>
      </Row>
    );
  }   
}
export default FormsNew;