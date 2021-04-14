import React, { useState, useRef } from "react";
import "./styles.css";
import { NavLink, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { Button, Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

const   Test = () => {
    return (
        <div className="container">
            <h2>Multiple items selector with filter</h2>
            <div className="row">
                <div className="form-group">
                    <div className="items-collection">

                        <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="info-block block-info clearfix">
                                <div data-toggle="buttons" className="btn-group bizmoduleselect">
                                    <label className="btn btn-secondary">
                                        <div className="itemcontent">
                                            <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                            <span className="fa fa-car fa-2x"></span>
                                            <h5>car</h5>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="info-block block-info clearfix">
                                <div data-toggle="buttons" className="btn-group itemcontent">
                                    <label className="btn btn-secondary">
                                        <div className="itemcontent">
                                            <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                            <span className="fa fa-truck fa-2x"></span>
                                            <h5>truck</h5>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="info-block block-info clearfix">
                                <div data-toggle="buttons" className="btn-group itemcontent">
                                    <label className="btn btn-secondary">
                                        <div className="itemcontent">
                                            <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                            <span className="fa fa-laptop fa-2x"></span>
                                            <h5>laptop</h5>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="info-block block-info clearfix">
                                <div data-toggle="buttons" className="btn-group itemcontent">
                                    <label className="btn btn-secondary">
                                        <div className="itemcontent">
                                            <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                            <span className="fa fa-cube fa-2x"></span>
                                            <h5>cube</h5>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="info-block block-info clearfix">
                                <div data-toggle="buttons" className="btn-group itemcontent">
                                    <label className="btn btn-secondary">
                                        <div className="itemcontent">
                                            <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                            <span className="fa fa-lock fa-2x"></span>
                                            <h5>secure</h5>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>                
                        <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="info-block block-info clearfix">
                                <div data-toggle="buttons" className="btn-group itemcontent">
                                    <label className="btn btn-secondary">
                                        <div className="itemcontent">
                                            <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                            <span className="fa fa-barcode fa-2x"></span>
                                            <h5>barcode</h5>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>                
                        <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="info-block block-info clearfix">
                                <div data-toggle="buttons" className="btn-group itemcontent">
                                    <label className="btn btn-secondary">
                                        <div className="itemcontent">
                                            <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                            <span className="fa fa-key fa-2x"></span>
                                            <h5>key</h5>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>                
                        <div className="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="info-block block-info clearfix">
                                <div data-toggle="buttons" className="btn-group itemcontent">
                                    <label className="btn btn-secondary">
                                        <div className="itemcontent">
                                            <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                            <span className="fa fa-keyboard-o fa-2x"></span>
                                            <h5>keyboard</h5>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>                

                    </div>
                </div>
            </div>   
        </div>
    );
};

export default Test;