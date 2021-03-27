import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import {TodosPage} from './pages/TodosPage';
import {AuthPage} from './pages/AuthPage';

export const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/todo-frontend/todos" exact>
                    <TodosPage/>
                </Route>
                <Redirect to="/todo-frontend/todos" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/todo-frontend/auth" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/todo-frontend/auth" />
        </Switch>
    )
}
