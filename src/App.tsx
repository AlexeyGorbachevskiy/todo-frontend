import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {AuthContext} from './context/AuthContext'
import {useAuth} from "./hooks/useAuth";
import {Loader} from "./components/Loader";
import {Container} from "./components/Container";
import {setToken} from "./@/todos/model";

function App() {
    const {token, login, logout, userId, ready} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    if(token){
        setToken(token)
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
