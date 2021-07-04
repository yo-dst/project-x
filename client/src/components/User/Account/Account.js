import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { delUser } from "../../../actions/user";
import { logout } from "../../../api/index";

const Account = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleLogout = async () => {
        try {
            await logout();
            dispatch(delUser());
        } catch (err) {
            console.log(err);
        }
    };

    if (user.isLoading) {
        return (
            <h1>Loading...</h1>
        );
    }
    else if (!user.user) {
        return (
            <Redirect to="/login" />
        );
    }
    else if (user.user) {
        return (
            <div>
                <h2>Account</h2>
                <p>
                    Firstname: {user.user.firstname} <br/>
                    Lastname: {user.user.lastname} <br/>
                    Email: {user.user.email} <br/>
                    Password: {user.user.password}
                </p>
                <Button variant="primary" onClick={handleLogout}>Déconnexion</Button>
            </div>
        );
    }
};

export default Account;