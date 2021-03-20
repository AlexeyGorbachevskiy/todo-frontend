import {createEffect} from "effector";
import {request} from "./request";


export const getAllTodosFx = createEffect(
    async (token: string | null) => {
        let result = null;
        try {
            result = await request(
                '/api/todos',
                'GET',
                null,
                {Authorization: `Bearer ${token}`});
            return result;
        } catch (e) {
            console.log(e)
            throw e;
        }
    }
);

export const addNewTodoFx = createEffect(
    async (data: Array<any>) => {
        const [name, token] = data;
        let result = null;
        try {
            result = await request(
                '/api/todos',
                'POST',
                {name},
                {Authorization: `Bearer ${token}`});
            return result;
        } catch (e) {
            console.log(e)
            throw e;
        }
    }
);

export const renameTodoFx = createEffect(
    async (data: any) => {
        const [token, eventData] = data;
        const {name, todoId} = eventData;
        console.log(token, eventData)
        let result = null;
        try {
            result = await request(
                '/api/todos',
                'PUT',
                {
                    name,
                    todoId,
                },
                {Authorization: `Bearer ${token}`});
            return result;
        } catch (e) {
            console.log(e)
            throw e;
        }
    }
);

export const removeTodoFx = createEffect(
    async (data: any) => {
        const [token, todoId] = data;
        let result = null;
        try {
            result = await request(
                '/api/todos',
                'DELETE',
                {todoId},
                {Authorization: `Bearer ${token}`});
            return result;
        } catch (e) {
            console.log(e)
            throw e;
        }
    }
);

export const addNewTaskFx = createEffect(
    async (data: any) => {
        const [token, eventData] = data;
        const {name, todoId} = eventData;
        console.log(token, eventData)
        let result = null;
        try {
            result = await request(
                '/api/tasks',
                'POST',
                {
                    name,
                    todoId
                },
                {Authorization: `Bearer ${token}`});
            return result;
        } catch (e) {
            console.log(e)
            throw e;
        }
    }
);

export const removeTaskFx = createEffect(
    async (data: any) => {
        const [token, eventData] = data;
        const {todoId, id} = eventData;
        console.log(token, eventData)
        let result = null;
        try {
            result = await request(
                '/api/tasks',
                'DELETE',
                {
                    todoId,
                    taskId: id
                },
                {Authorization: `Bearer ${token}`});
            return result;
        } catch (e) {
            console.log(e)
            throw e;
        }
    }
);

export const renameTaskFx = createEffect(
    async (data: any) => {
        const [token, eventData] = data;
        const {name, todoId, taskId, isCompleted} = eventData;
        console.log(token, eventData)
        let result = null;
        try {
            result = await request(
                '/api/tasks',
                'PUT',
                {
                    name,
                    todoId,
                    taskId,
                    isCompleted
                },
                {Authorization: `Bearer ${token}`});
            return result;
        } catch (e) {
            console.log(e)
            throw e;
        }
    }
);

export const dragDropTaskFx = createEffect(
    async (data: any) => {
        const [token, eventData] = data;
        const {
            currentTodoId,
            targetTodoId,
            currentTaskId,
            targetTaskIndex,
            name,
            description,
            isCompleted
        } = eventData;
        console.log(token, eventData)
        let result = null;
        try {
            result = await request(
                '/api/drag&Drop',
                'PUT',
                {
                    currentTodoId,
                    targetTodoId,
                    currentTaskId,
                    targetTaskIndex,
                    name,
                    description,
                    isCompleted
                },
                {Authorization: `Bearer ${token}`});
            return result;
        } catch (e) {
            console.log(e)
            throw e;
        }
    }
);
