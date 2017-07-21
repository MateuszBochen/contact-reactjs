import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, InputGroup, FormControl, ControlLabel} from 'react-bootstrap';
import './style.css';

class Step1 extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      domain: '',
    };
  }

  domainOnChange = (e) => {
    let value = e.target.value;
    const regex = /(http|https):\/\//;
    value = value.replace(regex, '');
    this.setState({
      domain: value
    });
  }  

  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Nazwa formularza:
          </Col>
          <Col sm={10}>
            <FormControl type="text" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Nazwa domeny:
          </Col>
          <Col sm={10}>
            <InputGroup>
              <InputGroup.Addon>http://</InputGroup.Addon>
              <FormControl type="text" onChange={this.domainOnChange} value={this.state.domain} />
            </InputGroup>
          </Col>
        </FormGroup>
        
      </Form>
    )
  }
}
export default Step1;