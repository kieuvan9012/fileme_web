import React, { Component } from 'react';
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import md5 from "js-md5";
import { LogonResponse, LogonModel } from "../models"
export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.__isMounted = true;
    }
    UNSAFE_componentWillMount() {
        this.__isMounted = false;
    }
    tranform2Model = (rawData) => {
        let ArrayData = [];
        if (rawData !== null && rawData.length > 0) {
            ArrayData = rawData.map((item, index) => {
                return Object.assign(new LogonModel(), {
                    id: item.id,
                    address: item.address,
                    aliasname: item.aliasname,
                    avatar: item.avatar,
                    cover: item.cover,
                    create_date: item.create_date,
                    district_id: item.district_id,
                    district_name: item.district_name,
                    gender: item.gender,
                    id: item.id,
                    info_success: item.info_success,
                    password: item.password,
                    phone: item.phone,
                    province_id: item.province_id,
                    province_name: item.province_name,
                    university_id: item.university_id,
                    university_name: item.university_name,
                    username: item.username
                });
            });
        }
        console.log(ArrayData);
        return ArrayData;
    }
    login = () => {
        let _this = this;
        axios.post("http://dephoanmy.vn:9886/user/login", { username: "0971568901", password: md5("1") })
            .then(response => {
                console.log(_this.refs);
                let rltResult = new LogonResponse();

                rltResult.data = _this.tranform2Model(response.data.data);
                console.log(rltResult);
                if (rltResult.data.length > 0)
                    window.location.href = "./MainPage";
                //_this.setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                if (_this.__isMounted) {
                }
            });
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card >
                            <Card.Body>
                                <Card.Title className="text-center">Sign In</Card.Title>
                                <Form>
                                    <div className="form-label-group">
                                        <input type="text" ref="inputEmail" className="form-control" placeholder="User Name" />
                                    </div>
                                    <div className="form-label-group">
                                        <input type="password" ref="inputPassword" className="form-control" placeholder="Password" />
                                    </div>
                                    {/* <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                    </div> */}
                                    <Button variant="primary" size="lg" className="btn-block text-uppercase" onClick={() => { this.login() }}>Sign in</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

