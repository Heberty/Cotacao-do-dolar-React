import React, { Component } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

export default class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0
        }

        this.converter = this.converter.bind(this);
    }

    converter() {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;

        let url = `https://free.currconv.com/api/v7/convert?apiKey=sample-key-do-not-use&q=${de_para}&compact=y`;

        fetch(url)
        .then(res => {

            return res.json();
        })

        .then(json => {
            let cotacao = json[de_para].val;
            let moedaB_valor = ( parseFloat(this.state.moedaA_valor) * cotacao ).toFixed(2);

            this.setState({moedaB_valor});
            console.log(cotacao);
            
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="conversor">
                            <h2>{ this.props.moedaA } para { this.props.moedaB }</h2>
                            <h3>{ this.setState.cotacao }</h3>
                            <Form className="row">
                                <Form.Group className="col-6">
                                    <Form.Control onChange={(event)=>this.setState({moedaA_valor:event.target.value})}></Form.Control>
                                </Form.Group>
                                <Form.Group className="col-6">
                                    <Button onClick={this.converter}>Converter</Button>
                                </Form.Group>
                            </Form>
                            <h2>{ this.state.moedaB_valor }</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
} 