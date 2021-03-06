import {
    $newTodoName,
    $todos,
    $token,
    clearAddNewTodoName,
    onAddNewTodo,
    onNewTodoNameChange,
    setTodos,
    setToken
} from "./model";
import {setPayload} from "../../helpers/helpers";
import {combine, sample} from "effector";
import {addNewTodoFx} from "../../api/todo-api";


$newTodoName.on(onNewTodoNameChange, setPayload);
$token.on(setToken, setPayload);
$todos.on(setTodos, setPayload)

$newTodoName.reset(clearAddNewTodoName);

sample({
    source: combine($newTodoName, $token),
    clock: onAddNewTodo,
    target: addNewTodoFx,
});

addNewTodoFx.done.watch((result) => {
    if (result) {
        setTodos(result.result);
    }
    clearAddNewTodoName();
});
addNewTodoFx.fail.watch(() => {
    clearAddNewTodoName();
});
