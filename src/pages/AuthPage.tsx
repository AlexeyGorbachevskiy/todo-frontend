import React, {useContext, useEffect, useState} from 'react'
import {useMessage} from "../hooks/useMessage";
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
import {setAuthError} from "../@/todos/model";

const Container = styled(NativeContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const {loading, request, error, clearError} = useFetch();
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError]);

    const changeHandler = (event: any) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            setAuthError(null);
            auth.login(data.token, data.userId)
        } catch (e) {
            setAuthError(e.error.message);
        }
    }

    return (
        <Container className="container">
            <div className="auth-page-content">
                <div className="logo-wrapper">
                    ToDo App
                    <img className="logo" src={logo} alt="Logo"/>
                </div>
                <div className="login-form">
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
                        />

                        <Input
                            placeholder="Type password"
                            id="password"
                            type="password"
                            name="password"
                            className="input"
                            value={form.password}
                            onChange={changeHandler}
                        />

                    </div>
                    <div className="buttons-wrapper">
                        <Button
                            className="button"
                            style={{marginRight: 10}}
                            disabled={loading}
                            onClick={loginHandler}
                        >
                            Sign In
                        </Button>
                        <Button
                            className="button"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
                <img className="left" src={left} alt="Left image"/>
                <img className="right" src={right} alt="Right image"/>
            </div>


        </Container>
    )
}
