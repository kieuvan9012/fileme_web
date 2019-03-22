import React, { Component } from 'react';
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { md5 } from "js-md5";
export default class FileManagement extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.__isMounted = true;
    }
    UNSAFE_componentWillMount() {
        this.__isMounted = false;
    }
    login = () => {
        let _this = this;
        axios.post("http://dephoanmy.vn:9886/user/login", { username: "0971568901", password: "C4CA4238A0B923820DCC509A6F75849B" })
            .then(response => {
                console.log(_this.refs);
                if (_this.__isMounted) {
                    console.log(response);
                }
            })
            .catch((error) => {
                console.log(error);
                if (_this.__isMounted) {
                }
            });
    }
    render() {
        return (
            <div class="container pb-filemng-template">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <nav class="navbar navbar-default pb-filemng-navbar">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <button type="button" class="pull-left navbar-toggle collapsed treeview-toggle-btn" data-toggle="collapse" data-target="#treeview-toggle" aria-expanded="false">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>

                                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#options" aria-expanded="false">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="fa fa-gears"></span>
                                    </button>
                                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#pb-filemng-navigation" aria-expanded="false">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="fa fa-share"></span>
                                    </button>
                                </div>

                                <ul class="collapse navbar-collapse nav navbar-nav navbar-right" id="options">
                                    <li><a href="#"><span class="fa fa-crosshairs fa-lg"></span></a></li>
                                    <li><a href="#"><span class="fa fa-ellipsis-v fa-lg"></span></a></li>
                                    <li><a href="#"><span class="fa fa-lg fa-server"></span></a></li>
                                    <li><a href="#"><span class="fa fa-lg fa-minus"></span></a></li>
                                    <li><a href="#"><span class="fa fa-lg fa-window-maximize"></span></a></li>
                                    <li><a href="#"><span class="fa fa-lg fa-times"></span></a></li>
                                </ul>
                                <div class="collapse navbar-collapse" id="pb-filemng-navigation">
                                    <ul class="nav navbar-nav">
                                        <li><a href="#"><span class="fa fa-chevron-left fa-lg"></span></a></li>
                                        <li><a href="#"><span class="fa fa-chevron-right fa-lg"></span></a></li>
                                        <li class="pb-filemng-active"><a href="#"><span class="fa fa-file fa-lg"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div class="panel panel-default">
                            <div class="panel-body pb-filemng-panel-body">
                                <div class="row">
                                    <div class="col-sm-3 col-md-4 pb-filemng-template-treeview">
                                        <div class="collapse navbar-collapse" id="treeview-toggle">
                                            <div id="treeview">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-9 col-md-8 pb-filemng-template-body">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

