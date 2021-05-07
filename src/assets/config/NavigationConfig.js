import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

export const NavigationConfig = () => {
    return (
        <Switch>
            <Route path="/dashboard-clients" exact>
                <p>Detalles generales</p>
            </Route>
            <Route path="/view-clients" exact>
                <p>Ver tus clientes</p>
            </Route>
            <Route path="/add-clients" exact>
                <p>Añade tus clientes</p>
            </Route>
            <Route path="/" exact>
                <p>Inicio</p>
            </Route>
        </Switch>
    )
}
