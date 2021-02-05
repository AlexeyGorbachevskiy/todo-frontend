import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import {TodosPage} from './pages/TodosPage';
import {AuthPage} from './pages/AuthPage';

export const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/todos" exact>
                    <TodosPage/>
                </Route>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}
