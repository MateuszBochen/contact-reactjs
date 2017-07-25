import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveStepFour } from '../../../../actions/forms';
import { Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import './style.css';

class Step4 extends Component {
  
  componentWillMount() {

    console.log(this.props.forms);

    //this.setState({ fields: this.props.fields});
  }

  onNext = () => {
    //this.props.save(this.state);
    this.props.onNext();
  }

  onPrev = () => {
    //this.props.save(this.state);
    this.props.onPrev();
  }

  onDrop = (e) => {
    console.log('onDrop');
    console.log(e);
    console.log(e.target.id);
  }

  onDragover = (e) => {
    console.log(e);
  }

  preventDefault = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>

        <Row className="show-grid">
          <Col xs={6} >
            <Panel collapsible defaultExpanded header="Tematy maili:">
              <ul id="list1" className="list-group drop-place " onDragOver={this.preventDefault} onDrop={this.onDrop} aria-hidden="false" >
                <li className="list-group-item" >Dupa</li>
              </ul>
            </Panel>
          </Col>
          <Col xs={6} >
            <Panel collapsible defaultExpanded header="Adresy e-mail:">
            <ul className="list-group drop-place " aria-hidden="false" >
              <li className="list-group-item" draggable="true" id="dupa" >Dupa</li>
            </ul>
              
            </Panel>
          </Col>
        </Row>

        
        <div>
          <button onClick={this.onPrev}>Cofnij</button>
          <button onClick={this.onNext}>Dalej</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ forms }) => ({ forms });
const mapDispatchToProps = (dispatch) => ({
  save: (data) => {dispatch(saveStepFour(data))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Step4);