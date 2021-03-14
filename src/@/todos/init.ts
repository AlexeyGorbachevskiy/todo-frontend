import {
    $authError,
    $newTodoName,
    $todos,
    $token,
    clearAddNewTodoName, getAllTodos, onAddNewTask,
    onAddNewTodo,
    onNewTodoNameChange, onRemoveTask, onRemoveTodo, onRenameTask, onRenameTodo, setAuthError,
    setTodos,
    setToken
} from "./model";
import {setPayload} from "../../helpers/helpers";
import {combine, sample} from "effector";
import {
    addNewTaskFx,
    addNewTodoFx,
    getAllTodosFx,
    removeTaskFx,
    removeTodoFx,
    renameTaskFx,
    renameTodoFx
} from "../../api/todo-api";
import {storageName} from "../../hooks/useAuth";


$newTodoName.on(onNewTodoNameChange, setPayload);
$token.on(setToken, setPayload);
$todos.on(setTodos, setPayload);
$authError.on(setAuthError, setPayload);

$newTodoName.reset(clearAddNewTodoName);

sample({
    source: $token,
    clock: getAllTodos,
    target: getAllTodosFx,
});

getAllTodosFx.done.watch((result) => {
    if (result) {
        setTodos(result.result.reverse().map((todo:any)=>({...todo,tasks: todo.tasks.reverse() })));
        setAuthError(null);
    }
});

getAllTodosFx.fail.watch((error) => {
    if(error.error.message==='No authorization'){
        setAuthError(error.error.message);
        localStorage.removeItem(storageName);
    }
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
        setTodos(result.result.allTodos.reverse().map((todo:any)=>({...todo,tasks: todo.tasks.reverse() })));
    }
    clearAddNewTodoName();
});
addNewTodoFx.fail.watch(() => {
    clearAddNewTodoName();
});

sample({
    source: $token,
    clock: onRenameTodo,
    fn:(token, clock)=>([token, clock]),
    target: renameTodoFx,
});

renameTodoFx.done.watch((result) => {
    if (result && result.result && result.result.allTodos.length) {
        getAllTodos();
    }
});
renameTodoFx.fail.watch((error) => {
    console.log(error)
});

sample({
    source: $token,
    clock: onRemoveTodo,
    fn:(token, todoId)=>([token, todoId]),
    target: removeTodoFx,
});

removeTodoFx.done.watch((result) => {
    console.log(result.result.remainingTodos)
    if (result) {
        setTodos(result.result.remainingTodos.reverse().map((todo:any)=>({...todo,tasks: todo.tasks.reverse() })));
    }
});
removeTodoFx.fail.watch((error) => {
    console.log(error)
});


sample({
    source: $token,
    clock: onAddNewTask,
    fn:(token, clock)=>([token, clock]),
    target: addNewTaskFx,
});

addNewTaskFx.done.watch((result) => {
    if (result && result.result && result.result.allTasks.length) {
        getAllTodos();
    }
});
addNewTaskFx.fail.watch((error) => {
    console.log(error)
});

sample({
    source: $token,
    clock: onRemoveTask,
    fn:(token, clock)=>([token, clock]),
    target: removeTaskFx,
});

removeTaskFx.done.watch((result) => {
    console.log(result.result)
    if (result && result.result && result.result.remainingTasks) {
        getAllTodos();
    }
});
removeTaskFx.fail.watch((error) => {
    console.log(error)
});


sample({
    source: $token,
    clock: onRenameTask,
    fn:(token, clock)=>([token, clock]),
    target: renameTaskFx,
});

renameTaskFx.done.watch((result) => {
    if (result && result.result && result.result.allTasks.length) {
        getAllTodos();
    }
});
renameTaskFx.fail.watch((error) => {
    console.log(error)
});
