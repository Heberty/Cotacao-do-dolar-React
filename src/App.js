import React, { Component } from 'react';
import 'jquery-mask-plugin';
import 'jquery';
import { Container, Row, Col } from 'react-bootstrap';
import Conversor from './components/Conversor'

class App extends Component {
  render() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}
export default App;
