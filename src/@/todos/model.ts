import {createEvent, createStore} from "effector";
import {MouseEvent} from 'react';


export const $token = createStore<string | null>(null);
export const $todos = createStore<Array<any>>([]);
export const $newTodoName = createStore<string>('');
export const $authError = createStore<string | null>('');
export const $authMessage = createStore<string | null>('');
export const $isLoaderVisible = createStore<boolean>(false);
export const $isRequestPending = createStore<boolean>(false);


export const clearAddNewTodoName = createEvent();

export const getAllTodos = createEvent()

export const setToken = createEvent<string | null>();
export const setAuthError = createEvent<string | null>();
export const setAuthMessage = createEvent<string | null>();
export const setTodos = createEvent<Array<Object>>();
export const setLoaderVisible = createEvent<boolean>();
export const setRequestPending = createEvent<boolean>();

export const onNewTodoNameChange = createEvent<string>();
export const onAddNewTodo = createEvent<MouseEvent<HTMLButtonElement>>();
export const onRemoveTodo = createEvent<string>();
export const onRenameTodo = createEvent<{}>();
export const onAddNewTask = createEvent<{}>();
export const onRemoveTask = createEvent<{}>();
export const onRenameTask = createEvent<{}>();
export const onDragDropTask = createEvent<{}>();
