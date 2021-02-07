import React, {useContext} from 'react';
import {useFetch} from "../hooks/useFetch";
import {AuthContext} from "../context/AuthContext";
import {Container} from "../components/Container";
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

export function TodosPage() {
    const auth = useContext(AuthContext);
    const {request} = useFetch();
    const history = useHistory();

    const logoutHandler = (event: any) => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    }

    const submit = () => {
        (async () => {
            try {
                console.log('hi')
                const data = await request('/api/todos', 'DELETE', {
                    todoId: 'a6d70cd0-63f9-11eb-9498-012484a403c4'

                }, {
                    Authorization: `Bearer ${auth.token}`
                })
                console.log(data)
            } catch (e) {
                console.log(e)
            }
        })();
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

                <div className="todos-wrapper">
                    <div className="todos-creator">
                        <div className="todos-creator__label">Todo List</div>
                        <div className="todos-creator__create">
                            <Input className="input"/>
                            <p className="todos-creator__label">+ Create Todo</p>
                        </div>
                    </div>

                    <div className="todos">
                        <Todo/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
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

        </Container>
    );
}
