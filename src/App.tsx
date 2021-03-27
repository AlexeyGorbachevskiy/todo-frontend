import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {AuthContext} from './context/AuthContext'
import {useAuth} from "./hooks/useAuth";
import {Loader} from "./components/Loader";
import {Container} from "./components/Container";
import {$authError, setToken} from "./@/todos/model";
import {useStore} from "effector-react";

function App() {
    const {token, login, logout, userId, ready} = useAuth();
    const authError = useStore($authError);
    const isAuthenticated = !!token && !authError;
    const routes = useRoutes(isAuthenticated);

    if(token){
        setToken(token);
    }

    if (!ready) {
        return (
            <Container>
                <Loader/>
            </Container>
        )
    }

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <Router>
                {routes}
            </Router>
        </AuthContext.Provider>
    )
}

export default App
