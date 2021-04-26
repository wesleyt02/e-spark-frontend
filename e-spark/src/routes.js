import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthProvider } from '../src/providers/auth';
import { ScrollCategoryProvider } from '../src/providers/scrollCategory';
import { AboutCar } from './pages/AboutCar';

import Home from './pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <AuthProvider>
                    <ScrollCategoryProvider>
                        <Route path="/" exact component={Home} />
                        <Route path="/aboutcar" component={AboutCar} />
                    </ScrollCategoryProvider>
                </AuthProvider>
            </Switch>
        </BrowserRouter>
    );
}