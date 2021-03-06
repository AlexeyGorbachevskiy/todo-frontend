import {createEvent, createStore} from "effector";
import {MouseEvent} from 'react';

const preTodos = [
    {
        id: 1,
        name: 'Tran Mau Tri Tam'
    },
    {
        id: 2,
        name: 'Tran Mau Tri Tam'
    },
]

export const $token = createStore<string | null>(null);
export const $todos = createStore<Array<Object>>(preTodos);
export const $newTodoName = createStore<string>('');

export const onNewTodoNameChange = createEvent<string>();
export const clearAddNewTodoName = createEvent();
export const setToken = createEvent<string | null>();
export const setTodos = createEvent<Array<Object>>();
export const onAddNewTodo = createEvent<MouseEvent<HTMLButtonElement>>();
