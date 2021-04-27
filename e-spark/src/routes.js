import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthProvider } from '../src/providers/auth';
import { ScrollCategoryProvider } from '../src/providers/scrollCategory';

import Home from './pages/Home';
import {Historico} from './pages/Historico'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <AuthProvider>
                    <ScrollCategoryProvider>
                        <Route path="/" exact component={Home} />
                        <Route patch="/Historico" component={Historico}/>
                    </ScrollCategoryProvider>
                </AuthProvider>
            </Switch>
        </BrowserRouter>
    );
}