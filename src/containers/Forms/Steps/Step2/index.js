import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import NewEmailAddress from '../../../../components/Forms/NewEmailAddress';
import { saveStepTwo } from '../../../../actions/forms';

import './style.css';

class Step2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailsAdress: []
    }
  }

  componentWillMount() {
    this.setState({ emailsAdress: this.props.emailsAdress});
  }

  onNext = () => {
    this.props.save(this.state);
    this.props.onNext();
  }

  onPrev = () => {
    this.props.save(this.state);
    this.props.onPrev();
  }

  onAddNewEmail = (email) => {
    const {emailsAdress} = this.state;
    emailsAdress.push(email);
    this.setState({
      emailsAdress
    });
  }

  onDelete = (index) => {
    const {emailsAdress} = this.state;
    emailsAdress.splice(index, 1);

    this.setState({
      emailsAdress
    });
  }

  onUpdateOption = (index, value) => {
    const {emailsAdress} = this.state;
    emailsAdress[index] = value;

    this.setState({
      emailsAdress
    });
  }

  render() {
    return (
      <div>
        <h3>Dodaj Adres e-mail:</h3>
        <Form horizontal>
          <NewEmailAddress addNew={this.onAddNewEmail} />

          { this.state.emailsAdress.map((email, index) =>
            (<NewEmailAddress value={email} key={`${email}+${index}`} index={index} delete={this.onDelete} update={this.onUpdateOption} />)
          )}

        </Form>
        <button onClick={this.onPrev}>Cofnij</button>
        <button onClick={this.onNext}>Dalej</button>
      </div>
    )
  }
}

const mapStateToProps = ({ forms: { stepTwo: { emailsAdress }}}) => ({ emailsAdress });
const mapDispatchToProps = (dispatch) => ({
  save: (data) => {dispatch(saveStepTwo(data))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
