import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {AuthContext} from './context/AuthContext'
import {useAuth} from "./hooks/useAuth";
import {Navbar} from "./components/Navbar";
import {Container} from "./components/Container";

function App() {
    const {token, login, logout, userId, ready} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    if (!ready) {
        // return <Loader />
    }

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <Router>
                { isAuthenticated && <Navbar /> }
                <Container>
                    {routes}
                </Container>
            </Router>
        </AuthContext.Provider>
    )
}

export default App
