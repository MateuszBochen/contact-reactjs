import React, { Component } from 'react';
import { ListGroupItem, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
//import './style.css';

class FieldView extends Component {


    render(){
        return (
          <ListGroupItem>
            {this.props.field.niceName}
            <ButtonGroup className="pull-right" >
              <Button onClick={() => { this.props.showModal(this.props.index, this.props.field); } } bsSize="xsmall"><Glyphicon glyph="edit" /></Button>
              <Button onClick={() => { this.props.delete(this.props.index); } } bsSize="xsmall"><Glyphicon glyph="trash" /></Button>
            </ButtonGroup>
          </ListGroupItem>
        );
    }
}

export default FieldView;
