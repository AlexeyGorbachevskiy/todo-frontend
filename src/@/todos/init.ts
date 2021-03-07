import {
    $newTodoName,
    $todos,
    $token,
    clearAddNewTodoName, getAllTodos,
    onAddNewTodo,
    onNewTodoNameChange,
    setTodos,
    setToken
} from "./model";
import {setPayload} from "../../helpers/helpers";
import {combine, sample} from "effector";
import {addNewTodoFx, getAllTodosFx} from "../../api/todo-api";


$newTodoName.on(onNewTodoNameChange, setPayload);
$token.on(setToken, setPayload);
$todos.on(setTodos, setPayload)

$newTodoName.reset(clearAddNewTodoName);

sample({
    source: $token,
    clock: getAllTodos,
    target: getAllTodosFx,
});

getAllTodosFx.done.watch((result) => {
    if (result) {
        setTodos(result.result);
    }
});

getAllTodosFx.fail.watch((error) => {
    console.log(error)
});

sample({
    source: combine($newTodoName, $token),
    clock: onAddNewTodo,
    target: addNewTodoFx,
});

addNewTodoFx.done.watch((result) => {
    console.log(result)
    if (result) {
        setTodos(result.result.allTodos);
    }
    clearAddNewTodoName();
});
addNewTodoFx.fail.watch(() => {
    clearAddNewTodoName();
});
