import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { Inicio } from '../views/Inicio';

export const NavigationConfig = () => {
    return (
        <Switch>
            <Route path="/dashboard-clients" exact>
                <p>HOLAAAAA</p>
            </Route>
            <Route path="/view-clients" exact>
                <p>Ver tus clientes</p>
            </Route>
            <Route path="/add-clients" exact>
                <p>Añade tus clientes</p>
            </Route>
            <Route path="/" exact>
                <Inicio />
            </Route>
        </Switch>
    )
}
