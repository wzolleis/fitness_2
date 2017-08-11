/*
 Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
 http://aws.amazon.com/apache2.0/
 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and limitations under the License.
 */

import React, {Component} from 'react';
import Login from './Auth/Login';
import AppRoute from './index';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import {Button, Card, Row, Col, Navbar, NavItem} from 'react-materialize';
import './css/general.css';
import {Config, CognitoIdentityCredentials} from 'aws-sdk';
import awsmobile from './configuration/aws-exports';
import {handleSignOut} from './Auth/auth';
import App from './App';

export default class Main extends Component {

    state = {
        logOut: false
    }

    signOut = (e) => {
        e.preventDefault();
        handleSignOut();

        this.setState(() => {
            return {
                logOut: true
            }
        });
    };

    render() {
        const {logOut} = this.state;
        return (
            <div>
                {
                    !logOut && (
                        <BrowserRouter>
                            <div>
                                <Navbar className='nav-bar' brand='WebApp' right>
                                    <NavItem onClick={this.signOut}>Logout</NavItem>
                                </Navbar>
                                <App/>
                            </div>
                        </BrowserRouter>)
                }
                {
                    logOut && (<AppRoute authStatus={false}/>)
                }
            </div>
        );

    }
}
