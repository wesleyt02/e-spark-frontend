import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthProvider } from '../src/providers/auth';
import { ScrollCategoryProvider } from '../src/providers/scrollCategory';
import { AboutCar } from './pages/AboutCar';

import Home from './pages/Home';
import {Historico} from './pages/Historico'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <AuthProvider>
                    <ScrollCategoryProvider>
                        <Route path="/" exact component={Home} />
<<<<<<< HEAD
                        <Route path="/aboutcar" component={AboutCar} />
=======
                        <Route patch="/Historico" component={Historico}/>
>>>>>>> 3ce96463d5b6e834fd67f65ea44b0da3b34110df
                    </ScrollCategoryProvider>
                </AuthProvider>
            </Switch>
        </BrowserRouter>
    );
}