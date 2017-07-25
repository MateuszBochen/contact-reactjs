import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveStepOne } from '../../../../actions/forms';
import { Col, Form, FormGroup, InputGroup, FormControl, ControlLabel} from 'react-bootstrap';
import './style.css';

class Step1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      domain: '',
    };
  }

  componentWillMount() {
    // Set name and domain to values from reducer
    this.setState({ name: this.props.name, domain: this.props.domain });
  }

  domainOnChange = ({target: { value }}) => {
    const regex = /(http|https):\/\//;
    const domain = value.replace(regex, '');
    this.setState({
      domain
    });
  }

  onNameChange = ({target: { value }}) => {
    this.setState({
      name: value
    });
  }

  onNext = () => {
    this.props.save(this.state);
    this.props.onNext();
  }

  render() {
    return (
      <div>
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Nazwa formularza:
            </Col>
            <Col sm={10}>
              <FormControl onChange={this.onNameChange} value={this.state.name} type="text" />
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
        <button disabled >Cofnij</button>
        <button onClick={this.onNext}>Dalej</button>
      </div>
    )
  }
}

const mapStateToProps = ({ forms: { stepOne: { name, domain }}}) => ({ name, domain });
const mapDispatchToProps = (dispatch) => ({
  save: (data) => { dispatch(saveStepOne(data))}
});
export default connect(mapStateToProps, mapDispatchToProps)(Step1);
