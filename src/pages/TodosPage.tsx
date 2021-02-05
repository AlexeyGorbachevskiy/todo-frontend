import React, {useContext} from 'react';
import {useFetch} from "../hooks/useFetch";
import {AuthContext} from "../context/AuthContext";


export function TodosPage() {
    const {token} = useContext(AuthContext)
    const {request} = useFetch();

    const submit = () => {
        (async () => {
            try {
                console.log('hi')
                const data = await request('/api/todos', 'DELETE', {
                    todoId:'a6d70cd0-63f9-11eb-9498-012484a403c4'


                }, {
                    Authorization: `Bearer ${token}`
                })
                console.log(data)
            } catch (e) {
                console.log(e)
            }
        })()
    }


    return (
        <div className="App">
            <h1>Links page</h1>
            <button onClick={submit}>Send</button>
        </div>
    );
}
