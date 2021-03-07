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
