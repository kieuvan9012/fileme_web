import React, { Component } from 'react';
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import Header from "./Header";
export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.__isMounted = true;
    }
    componentWillUnmount() {
        this.__isMounted = false;
    }

    render() {
        return (
            <div id="container" className="effect aside-float aside-bright mainnav-sm">
                <Header />
            </div>
        );
    }
}

