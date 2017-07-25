import React, { Component } from 'react';
import { Modal, Button, FormGroup, InputGroup, FormControl, Form} from 'react-bootstrap';
import NewDropdownOption from '../NewDropdownOption'
//import './style.css';
 
class ModalSelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
      'name': '',
      'label': '',
      'options': [],
      'placeholder': '',
      'type': 'title',
      'niceName': 'Lista rozwijana'
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

  onAddNewOption = (value) => {
    const { options } = this.state;
    options.push(value);

    this.setState({
      options
    });
  }

  onDeleteOption = (index) => {
    const {options} = this.state;
    options.splice(index, 1);

    this.setState({
      options
    });
  }

  onUpdateOption = (index, value) => {
    const {options} = this.state;
    options[index] = value;

    this.setState({
      options
    });
  }

  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Lista rozwijana</Modal.Title>
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
            <h5>Dodaj opcje do wyboru:</h5>
            <Form horizontal>
              <NewDropdownOption addNew={this.onAddNewOption} title="Opcja:" />

              { this.state.options.map((subject, index) =>
                (<NewDropdownOption value={subject} key={`${subject}+${index}`} index={index} delete={this.onDeleteOption} title="Opcja:" update={this.onUpdateOption} />)
              )}
            </Form>
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

export default ModalSelect;
