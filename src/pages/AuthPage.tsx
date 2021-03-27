import React, {useContext, useState} from 'react'
import {useFetch} from "../hooks/useFetch";
import {AuthContext} from "../context/AuthContext";
import {Input} from "../components/Input";
import {Container as NativeContainer} from "../components/Container";
import '../assets/styles/components/_auth-page.scss';
import '../assets/styles/components/_input.scss';
import '../assets/styles/components/_button.scss';
import {Button} from "../components/Button";
import logo from "../assets/images/logo.jpg";
import left from "../assets/images/left.png";
import right from "../assets/images/right.png";
import styled from "styled-components";
import {$authError, $authMessage, setAuthError, setAuthMessage} from "../@/todos/model";
import {useStore} from "effector-react";
import {Loader} from "../components/Loader";

const Container = styled(NativeContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const {loading, request} = useFetch();
    const [form, setForm] = useState({
        email: '', password: ''
    });
    const authMessage = useStore($authMessage);
    const authError = useStore($authError);
    const [isEmailError, setEmailError] = useState(false);
    const [isPasswordError, setPasswordError] = useState(false);


    const changeHandler = (event: any) => {
        setAuthError(null);
        setAuthMessage(null);
        if (event.target.name === 'email') {
            setEmailError(!event.target.value.trim().length)
        }
        if (event.target.name === 'password') {
            setPasswordError(!event.target.value.trim().length)
        }

        setForm({...form, [event.target.name]: event.target.value})
    }

    const checkForEmpty = () => {
        if (!form.email.trim().length && !form.password.trim().length) {
            setEmailError(true);
            setPasswordError(true);
            return true;
        }
        if (!form.email.trim().length) {
            setEmailError(true);
            return true;
        }
        if (!form.password.trim().length) {
            setPasswordError(true);
            return true;
        }
        return false;
    }

    const registerHandler = async () => {
        try {
            setEmailError(false);
            setPasswordError(false);
            setAuthError(null);
            setAuthMessage(null);
            if (checkForEmpty()) {
                return;
            }

            const data = await request('/api/auth/register', 'POST', {...form})
            setAuthMessage(data.message);
        } catch (e) {
            setAuthError(e.message);
        }
    }

    const loginHandler = async () => {
        try {
            setEmailError(false);
            setPasswordError(false);
            setAuthError(null);
            setAuthMessage(null);
            if (checkForEmpty()) {
                return;
            }
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
            setAuthError(e.message);
        }
    }

    return (
        <Container className="container">
            <div className="auth-page-content">
                <div className="logo-wrapper">
                    ToDo App
                    <img className="logo" src={logo} alt="Logo"/>
                </div>
                <div className="login-form" style={loading ? {opacity: 0.5} : {}}>
                    <h1 className="login-header">Sign In to App</h1>
                    <div className="inputs-wrapper">

                        <Input
                            placeholder="Type email"
                            id="email"
                            type="text"
                            name="email"
                            className="input"
                            value={form.email}
                            onChange={changeHandler}
                            style={isEmailError ? {borderColor: 'red'} : {}}
                        />
                        {
                            isEmailError &&
                            <span className="input-error">
                                Email field is required
                            </span>
                        }

                        <Input
                            placeholder="Type password"
                            id="password"
                            type="password"
                            name="password"
                            className="input"
                            value={form.password}
                            onChange={changeHandler}
                            style={isPasswordError ? {borderColor: 'red'} : {}}
                        />
                        {
                            isPasswordError &&
                            <span className="input-error">
                            Password field is required
                        </span>
                        }

                        {
                            authMessage &&
                            <div className="message-container">
                                {authMessage}
                            </div>
                        }
                        {
                            authError &&
                            <div className="error-container">
                                {authError}
                            </div>
                        }


                    </div>
                    <div className="buttons-wrapper">
                        <Button
                            className="button"
                            disabled={loading || isEmailError || isPasswordError}
                            onClick={loginHandler}
                        >
                            Sign In
                        </Button>
                        <Button
                            className="button"
                            onClick={registerHandler}
                            disabled={loading || isEmailError || isPasswordError}
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
                <img className="left" src={left} alt="Left image"/>
                <img className="right" src={right} alt="Right image"/>
            </div>

            {
                loading &&
                <Loader style={{position: 'absolute'}}/>
            }
        </Container>
    )
}
