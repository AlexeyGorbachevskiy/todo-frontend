import {createEvent, createStore} from "effector";
import {MouseEvent} from 'react';


export const $token = createStore<string | null>(null);
export const $todos = createStore<Array<any>>([]);
export const $newTodoName = createStore<string>('');
export const $authError = createStore<string | null>('');

export const onNewTodoNameChange = createEvent<string>();
export const clearAddNewTodoName = createEvent();
export const setToken = createEvent<string | null>();
export const setAuthError = createEvent<string | null>();
export const setTodos = createEvent<Array<Object>>();
export const onAddNewTodo = createEvent<MouseEvent<HTMLButtonElement>>();
export const getAllTodos = createEvent();
export const onRemoveTodo = createEvent<string>();
export const onAddNewTask = createEvent<{}>();
export const onRemoveTask = createEvent<{}>();
