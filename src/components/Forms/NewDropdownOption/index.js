import React, { Component } from 'react';
import {Col, FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap';

//import './style.css';

class NewDropdownOption extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }

    this.validationState = null;
  }

  addButton = () => {
    if(!this.props.addNew) {
      return '';
    }

    return (<InputGroup.Button>
      <Button color="secondary" onClick={this.onSave} >Dodaj</Button>
    </InputGroup.Button>);
  }

  deleteButton = () => {
    if(!this.props.delete) {
      return '';
    }

    return (<InputGroup.Button>
      <Button color="dranger" onClick={this.onDelete} >Usuń</Button>
    </InputGroup.Button>);
  }

  onChange = ({target: {value}}) => {
    this.setState({value});
  }

  onSave = () => {
    if (this.validationState === 'error') {
      return;
    }

    this.props.addNew(this.state.value);
    this.setState({value: ''});
  }

  onDelete = () => {
    this.props.delete(this.props.index);
  }

  onBlur = ({target: {value}}) => {

    if(!this.props.update) {
      return;
    }

    this.props.update(this.props.index, value);
  }

  render() {
    return (
        <FormGroup controlId="" validationState={this.validationState} >
          <Col sm={12}>
            <InputGroup >
              <InputGroup.Addon>{this.props.title}</InputGroup.Addon>
              <FormControl value={this.state.value} type="text" onChange={this.onChange} onBlur={this.onBlur} />
              {this.addButton()}
              {this.deleteButton()}
            </InputGroup>
          </Col>
        </FormGroup>
    );
  };
}

export default NewDropdownOption;