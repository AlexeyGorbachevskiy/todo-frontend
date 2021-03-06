import {createEffect} from "effector";
import {request} from "./request";


export const addNewTodoFx = createEffect(
    async (data: any) => {
        const [todoName, token] = data;
        let result = null;
        try {
            result = await request(
                '/api/todos',
                'POST',
                {todoName},
                {Authorization: `Bearer ${token}`});
            return result;
        } catch (e) {
            console.log(e)
            throw e;
        }
    }
);
