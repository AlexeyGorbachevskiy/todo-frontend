import React, {MouseEvent, useContext, useEffect} from 'react';
import {AuthContext} from "../context/AuthContext";
import {Container as NativeContainer} from "../components/Container";
import {COLORS} from "../constants/styles";
import {useHistory} from "react-router-dom";
import '../assets/styles/components/_todos-page.scss';
import {Header} from "../components/Header";
import logo from "../assets/images/logo.png";
import grid from "../assets/images/grid.png";
import logout from "../assets/images/logout.svg";
import facebook from "../assets/images/facebook.png";
import vk from "../assets/images/vk.png";
import telegram from "../assets/images/telegram.png";
import {Todo} from "../components/Todo";
import {Input} from "../components/Input";
import '../assets/styles/components/_input.scss';
import {getInputValue} from "../helpers/helpers";
import {
    $isLoaderVisible,
    $isRequestPending,
    $newTodoName,
    $todos,
    getAllTodos,
    onAddNewTodo,
    onNewTodoNameChange,
    setToken
} from "../@/todos/model";
import {useStore} from "effector-react";
import '../@/todos/init';
import styled from "styled-components";
import {Loader} from "../components/Loader";
import {Linear} from "../components/Linear";
import {Button as NativeButton} from "../components/Button";

const Container = styled(NativeContainer)`
  color: #ffffff;
  display: block;
  height: unset;
  min-height: calc(100vh - 120px);
`;
const Button = styled(NativeButton)`
    width: 140px;  
    height: 40px;
    background: #2b2bc6;
    border-radius: 5px;
    
    ${({disabled}) => !disabled &&
    `&:hover{
    opacity: 0.7;
    }`
}
`;

export function TodosPage() {
    const auth = useContext(AuthContext);
    const history = useHistory();
    const isLoaderVisible = useStore($isLoaderVisible);
    const isRequestPending = useStore($isRequestPending);
    const todos = useStore($todos);
    const newTodoName = useStore($newTodoName);
    const handleNewTodoNameChange = onNewTodoNameChange.prepend(getInputValue);

    if (auth && auth.token) {
        setToken(auth.token)
    }


    useEffect(() => {
        getAllTodos();
    }, []);

    const logoutHandler = (event: any) => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    }

    const addNewTodo = (e: MouseEvent<HTMLButtonElement>) => {
        if(newTodoName.trim().length){
            onAddNewTodo(e)
        }
    }

    return (
        <Container className="container" backgroundColor={COLORS.darkMain}>
            <div className="todos-page-content">
                <Header className="header">
                    <div className="logo">
                        <img className="logo-icon" src={logo} alt="Logo"/>
                        <a rel="noreferrer" target={"_blank"}
                           className="logo-text" href="https://alexeygorbachevskiy.github.io/Portfolio">Portfolio</a>
                    </div>
                    <div className="menu">
                        <img className="grid-icon" src={grid} alt="Grid icon"/>
                        <span className="page-header">Todo List</span>
                    </div>
                    <div className="user">
                        <img className="logout-icon" src={logout} alt="Logout icon"/>
                        <a className="logout-link" href="/" onClick={logoutHandler}>Logout</a>
                    </div>
                </Header>
                {
                    isRequestPending &&
                    <Linear/>
                }

                <div className="todos-wrapper">
                    <div className="todos-creator">
                        {/*<div className="todos-creator__label">Cards</div>*/}
                        <div className="todos-creator__create">
                            <Input className="input" value={newTodoName} onChange={handleNewTodoNameChange}/>
                            <Button disabled={isRequestPending || isLoaderVisible} className="todos-creator__label"
                                    onClick={addNewTodo}>+ Create Todo</Button>
                        </div>
                    </div>

                    <div className="todos">
                        {
                            todos.map((todo) => {
                                return (
                                    <Todo key={todo.id} id={todo.id} tasks={todo.tasks} todoName={todo.name}/>
                                )
                            })
                        }
                    </div>

                </div>

                <Header className="footer">
                    <div className="links">
                        <img className="link" src={facebook} alt="Facebook icon"/>
                        <img className="link vk" src={vk} alt="VK icon"/>
                        <img className="link" src={telegram} alt="Telegram icon"/>
                    </div>
                    <div className="rights">
                        © 2021 - All Rights Lecensed
                    </div>
                    <div className="rights">
                        For commercial inquiries
                    </div>
                </Header>
            </div>

            {
                isLoaderVisible &&
                <Loader/>
            }
            {
                !isLoaderVisible && !todos.length &&
                    <div className="no-todos">
                        You don't have any todos now.
                    </div>
            }
        </Container>
    );
}
