import React, { Component } from 'react';
import { Modal, Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap';

//import './style.css';
 
class ModalInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      'name': '',
      'label': '',
      'placeholder': '',
      'type': 'text',
      'niceName': 'Pole tekstowe'
    };
  }

  componentWillMount() {
    this.setState(this.props.state);
  }

  onNameChange = ({target: {value}}) => {
    this.setState({
      name: value
    });
  }

  onLabelChange = ({target: {value}}) => {
    this.setState({
      label: value
    });
  }

  onPlaceholderChange = ({target: {value}}) => {
    this.setState({
      placeholder: value
    });
  }

  onSave = () => {
    if (this.props.index !== false) {
      this.props.onUpdate(this.props.index, this.state);
    }
    else {
      this.props.onSave(this.state);
    }
  }

  onClose = () => {
    this.props.onClose();
  }

  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Pole tekstowe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>Nazwa: </InputGroup.Addon>
                <FormControl onChange={this.onNameChange} value={this.state.name} type="text" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>Label: </InputGroup.Addon>
                <FormControl onChange={this.onLabelChange} value={this.state.label} type="text" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>Placeholder: </InputGroup.Addon>
                <FormControl onChange={this.onPlaceholderChange} value={this.state.placeholder} type="text" />
              </InputGroup>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onClose} >Close</Button>
            <Button onClick={this.onSave} bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default ModalInput;
