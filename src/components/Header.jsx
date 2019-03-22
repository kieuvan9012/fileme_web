import React, { Component } from 'react';
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
export default class Header extends Component {
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
            <header id="navbar">
                <div id="navbar-container" className="boxed">
                    <div className="navbar-header">
                        <a href="" className="navbar-brand">
                            <img src="../images/logo.png" alt="Nifty Logo" className="brand-icon" />
                            <div className="brand-title">
                                <span className="brand-text">Nifty</span>
                            </div>
                        </a>
                    </div>
                    <div className="navbar-content">
                        <ul className="nav navbar-top-links">
                            <li className="tgl-menu-btn">
                                <a className="mainnav-toggle" href="#">
                                    <i className="mdi mdi-view-list"></i>
                                </a>
                            </li>
                            <li>
                                <div className="custom-search-form">
                                    <label className="btn btn-trans" htmlFor="search-input" data-toggle="collapse" data-target="#nav-searchbox">
                                        <i className="demo-pli-magnifi-glass"></i>
                                    </label>
                                    <form>
                                        <div className="search-container collapse" id="nav-searchbox">
                                            <input id="search-input" type="text" className="form-control" placeholder="Type for search..." />
                                        </div>
                                    </form>
                                </div>
                            </li>
                        </ul>
                        <ul className="nav navbar-top-links">
                            <li className="mega-dropdown">
                                <a href="#" className="mega-dropdown-toggle">
                                    <i className="demo-pli-layout-grid"></i>
                                </a>
                                <div className="dropdown-menu mega-dropdown-menu">
                                    <div className="row">
                                        <div className="col-sm-4 col-md-3">
                                            <ul className="list-unstyled">
                                                <li className="dropdown-header"><i className="demo-pli-file icon-lg icon-fw"></i> Pages</li>
                                                <li><a href="#">Profile</a></li>
                                                <li><a href="#">Search Result</a></li>
                                                <li><a href="#">FAQ</a></li>
                                                <li><a href="#">Sreen Lock</a></li>
                                                <li><a href="#">Maintenance</a></li>
                                                <li><a href="#">Invoice</a></li>
                                                <li><a href="#" className="disabled">Disabled</a></li>                                        </ul>

                                        </div>
                                        <div className="col-sm-4 col-md-3">
                                            <ul className="list-unstyled">
                                                <li className="dropdown-header"><i className="demo-pli-mail icon-lg icon-fw"></i> Mailbox</li>
                                                <li><a href="#"><span className="pull-right label label-danger">Hot</span>Indox</a></li>
                                                <li><a href="#">Read Message</a></li>
                                                <li><a href="#">Compose</a></li>
                                                <li><a href="#">Template</a></li>
                                            </ul>
                                            <p className="pad-top text-main text-sm text-uppercase text-bold"><i className="icon-lg demo-pli-calendar-4 icon-fw"></i>News</p>
                                            <p className="pad-top mar-top bord-top text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                        </div>
                                        <div className="col-sm-4 col-md-3">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#" className="media mar-btm">
                                                        <span className="badge badge-success pull-right">90%</span>
                                                        <div className="media-left">
                                                            <i className="demo-pli-data-settings icon-2x"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <p className="text-semibold text-main mar-no">Data Backup</p>
                                                            <small className="text-muted">This is the item description</small>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="media mar-btm">
                                                        <div className="media-left">
                                                            <i className="demo-pli-support icon-2x"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <p className="text-semibold text-main mar-no">Support</p>
                                                            <small className="text-muted">This is the item description</small>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="media mar-btm">
                                                        <div className="media-left">
                                                            <i className="demo-pli-computer-secure icon-2x"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <p className="text-semibold text-main mar-no">Security</p>
                                                            <small className="text-muted">This is the item description</small>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="media mar-btm">
                                                        <div className="media-left">
                                                            <i className="demo-pli-map-2 icon-2x"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <p className="text-semibold text-main mar-no">Location</p>
                                                            <small className="text-muted">This is the item description</small>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-12 col-md-3">
                                            <p className="dropdown-header"><i className="demo-pli-file-jpg icon-lg icon-fw"></i> Gallery</p>
                                            <div className="row img-gallery">
                                                <div className="col-xs-4">
                                                    <img className="img-responsive" src="./File Manager _ Nifty - Admin Template_files/img-1.jpg" alt="thumbs" />
                                                </div>
                                                <div className="col-xs-4">
                                                    <img className="img-responsive" src="./File Manager _ Nifty - Admin Template_files/img-3.jpg" alt="thumbs" />
                                                </div>
                                                <div className="col-xs-4">
                                                    <img className="img-responsive" src="./File Manager _ Nifty - Admin Template_files/img-2.jpg" alt="thumbs" />
                                                </div>
                                                <div className="col-xs-4">
                                                    <img className="img-responsive" src="./File Manager _ Nifty - Admin Template_files/img-4.jpg" alt="thumbs" />
                                                </div>
                                                <div className="col-xs-4">
                                                    <img className="img-responsive" src="./File Manager _ Nifty - Admin Template_files/img-6.jpg" alt="thumbs" />
                                                </div>
                                                <div className="col-xs-4">
                                                    <img className="img-responsive" src="./File Manager _ Nifty - Admin Template_files/img-5.jpg" alt="thumbs" />
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-block btn-primary">Browse Gallery</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                                    <i className="demo-pli-bell"></i>
                                    <span className="badge badge-header badge-danger"></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                    <div className="nano scrollable has-scrollbar" style={{height: "0px"}}>
                                        <div className="nano-content" tabIndex="0" style={{right: "-17px"}}>
                                            <ul className="head-list">
                                                <li>
                                                    <a href="#" className="media add-tooltip" data-title="Used space : 95%" data-container="body" data-placement="bottom" data-original-title="" title="">
                                                        <div className="media-left">
                                                            <i className="demo-pli-data-settings icon-2x text-main"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <p className="text-nowrap text-main text-semibold">HDD is full</p>
                                                            <div className="progress progress-sm mar-no">
                                                                <div style={{width: "95%"}} className="progress-bar progress-bar-danger">
                                                                    <span className="sr-only">95% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="media" href="#">
                                                        <div className="media-left">
                                                            <i className="demo-pli-file-edit icon-2x"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <p className="mar-no text-nowrap text-main text-semibold">Write a news article</p>
                                                            <small>Last Update 8 hours ago</small>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="media" href="#">
                                                        <span className="label label-info pull-right">New</span>
                                                        <div className="media-left">
                                                            <i className="demo-pli-speech-bubble-7 icon-2x"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <p className="mar-no text-nowrap text-main text-semibold">Comment Sorting</p>
                                                            <small>Last Update 8 hours ago</small>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="media" href="#">
                                                        <div className="media-left">
                                                            <i className="demo-pli-add-user-star icon-2x"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <p className="mar-no text-nowrap text-main text-semibold">New User Registered</p>
                                                            <small>4 minutes ago</small>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="media" href="#">
                                                        <div className="media-left">
                                                            <img className="img-circle img-sm" alt="Profile Picture" src="./File Manager _ Nifty - Admin Template_files/9.png" />
                                                        </div>
                                                        <div className="media-body">
                                                            <p className="mar-no text-nowrap text-main text-semibold">Lucy sent you a message</p>
                                                            <small>30 minutes ago</small>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="media" href="#">
                                                        <div className="media-left">
                                                            <img className="img-circle img-sm" alt="Profile Picture" src="./File Manager _ Nifty - Admin Template_files/3.png" />
                                                        </div>
                                                        <div className="media-body">
                                                            <p className="mar-no text-nowrap text-main text-semibold">Jackson sent you a message</p>
                                                            <small>40 minutes ago</small>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="nano-pane" style={{display: "none"}}><div className="nano-slider" style={{height: "20px", transform: "translate(0px, 0px)"}}></div></div></div>

                                    <div className="pad-all bord-top">
                                        <a href="#" className="btn-link text-main box-block">
                                            <i className="pci-chevron chevron-right pull-right"></i>Show All Notifications
                                    </a>
                                    </div>
                                </div>
                            </li>
                            <li id="dropdown-user" className="dropdown">
                                <a href="#" data-toggle="dropdown" className="dropdown-toggle text-right">
                                    <span className="ic-user pull-right">

                                        <i className="demo-pli-male"></i>
                                    </span>
                                </a>


                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right panel-default">
                                    <ul className="head-list">
                                        <li>
                                            <a href="#"><i className="demo-pli-male icon-lg icon-fw"></i> Profile</a>
                                        </li>
                                        <li>
                                            <a href="#"><span className="badge badge-danger pull-right">9</span><i className="demo-pli-mail icon-lg icon-fw"></i> Messages</a>
                                        </li>
                                        <li>
                                            <a href="#"><span className="label label-success pull-right">New</span><i className="demo-pli-gear icon-lg icon-fw"></i> Settings</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="demo-pli-computer-secure icon-lg icon-fw"></i> Lock screen</a>
                                        </li>
                                        <li>
                                            <a href="http://www.themeon.net/nifty/v2.9.1/pages-login.html"><i className="demo-pli-unlock icon-lg icon-fw"></i> Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="">
                                <a href="#" className="aside-toggle">
                                    <i className="demo-pli-dot-vertical"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </header>
        );
    }
}
