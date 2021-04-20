import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthProvider } from '../src/providers/auth'

import Home from './pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <AuthProvider>
                    <Route path="/" exact component={Home} />
                </AuthProvider>
            </Switch>
        </BrowserRouter>
    );
}