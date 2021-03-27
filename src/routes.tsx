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
                <Redirect to="/todos" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/auth" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/auth" />
        </Switch>
    )
}
