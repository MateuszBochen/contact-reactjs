import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import MainMenu from '../../components/MainMenu';
import WorkPage from '../../components/WorkPage';
import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {

    return (
      <div className="">
        <Row className="show-grid main-row">
          <Col xs={2} className="fullHeight no-padding main-menu" >
            <MainMenu />
          </Col>
          <Col xs={10} className="fullHeight no-padding" >
            <div className="mainApp">
              <WorkPage />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
