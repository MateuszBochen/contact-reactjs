import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button, ListGroup, Panel} from 'react-bootstrap';
import FieldView from '../../../../components/Forms/FieldView';
import { saveStepThree } from '../../../../actions/forms';

import './style.css';

class Step3 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      type: '',
      'fields': []
    }

    this.currentInput = {};
    this.currentIndex = false;
  }

  componentWillMount() {
    this.setState({ fields: this.props.fields});
  }

  onNext = () => {
    this.props.save(this.state);
    this.props.onNext();
  }

  onPrev = () => {
    this.props.save(this.state);
    this.props.onPrev();
  }

  changeType = (type) => {
    this.setState({ type });
  }

  onSave = (inputModel) => {    
    const { fields } = this.state;
    fields.push(inputModel);   
    this.setState({ type: '', fields});
    this.currentInput = {};
    this.currentIndex = false;
  }

  onClose = () => {
    this.setState({ type: '' });
    this.currentInput = {};
    this.currentIndex = false;
  }

  showModal = (type) => {
    switch(type) {
      case 'text': {
        const ModalInput = require('../../../../components/Forms/ModalInput');
        return <ModalInput.default onSave={this.onSave} onClose={this.onClose} state={this.currentInput} onUpdate={this.onUpdateField} index={this.currentIndex} />
      }
      case 'textarea': {
        const ModalTextarea = require('../../../../components/Forms/ModalTextarea');
        return <ModalTextarea.default onSave={this.onSave} onClose={this.onClose} state={this.currentInput} onUpdate={this.onUpdateField} index={this.currentIndex} />
      }
      case 'title': {
        const ModalSubject = require('../../../../components/Forms/ModalSubject');
        return <ModalSubject.default onSave={this.onSave} onClose={this.onClose} state={this.currentInput} onUpdate={this.onUpdateField} index={this.currentIndex} />
      }
      case 'select': {
        const ModalSelect = require('../../../../components/Forms/ModalSelect');
        return <ModalSelect.default onSave={this.onSave} onClose={this.onClose} state={this.currentInput} onUpdate={this.onUpdateField} index={this.currentIndex} />
      }
      default:
        return '';
    }
  }

  onDeleteField = (index) => {
    const {fields} = this.state;
    fields.splice(index, 1);

    this.setState({
      fields
    });
  }

  onUpdateField = (index, inputModel) => {
    const { fields } = this.state;
    fields[index] = inputModel;
    this.setState({ type: '', fields});
  }

  onShowModal = (index, state) => {
    this.currentInput = state;
    this.currentIndex = index;
    console.log(this.currentInput);
    this.changeType(state.type);
  }

  render() {
    return (
      <div>
        <ButtonGroup>
          <Button onClick={() => {this.changeType('text') }} >Nowe pole tekstowe</Button>
          <Button onClick={() => {this.changeType('textarea') }} >Nowe duże pole tekstowe</Button>
          <Button onClick={() => {this.changeType('title') }} >Pole typu <i>"Tytuł widomości"</i></Button>
          <Button onClick={() => {this.changeType('select') }} >Nowa lista rozwijana</Button>
          <Button>Nowe pole wyboru</Button>
          <Button>Nowe pole opcji</Button>
        </ButtonGroup>
        <div>
          {this.showModal(this.state.type)}
        </div>
          
          <Panel collapsible defaultExpanded header="Dodane pola:">
          
            <ListGroup fill>
              { this.state.fields.map((field, index) =>
                (<FieldView field={field} key={`${field.name}+${index}`} index={index} delete={this.onDeleteField} showModal={this.onShowModal}/>)
              )}
            </ListGroup>
          </Panel>
        <div>
          <button onClick={this.onPrev}>Cofnij</button>
          <button onClick={this.onNext}>Dalej</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ forms: { stepThree: { fields }}}) => ({ fields });
const mapDispatchToProps = (dispatch) => ({
  save: (data) => {dispatch(saveStepThree(data))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Step3);