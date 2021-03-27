import {
    $authError,
    $authMessage, $isLoaderVisible,
    $isRequestPending,
    $newTodoName,
    $todos,
    $token,
    clearAddNewTodoName,
    getAllTodos,
    onAddNewTask,
    onAddNewTodo,
    onDragDropTask,
    onNewTodoNameChange,
    onRemoveTask,
    onRemoveTodo,
    onRenameTask,
    onRenameTodo,
    setAuthError,
    setAuthMessage, setLoaderVisible,
    setRequestPending,
    setTodos,
    setToken
} from "./model";
import {setPayload} from "../../helpers/helpers";
import {combine, sample} from "effector";
import {
    addNewTaskFx,
    addNewTodoFx, dragDropTaskFx,
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
$authMessage.on(setAuthMessage, setPayload);
$isLoaderVisible.on(setLoaderVisible, setPayload);
$isRequestPending.on(setRequestPending, setPayload);

$newTodoName.reset(clearAddNewTodoName);

sample({
    source: $token,
    clock: getAllTodos,
    target: getAllTodosFx,
});

getAllTodosFx.pending.watch((pending) => {
    if (pending) {
        setLoaderVisible(true);
    }

});

getAllTodosFx.done.watch((result) => {
    if (result) {
        setTodos(result.result.reverse().map((todo: any) => ({...todo, tasks: todo.tasks.reverse()})));
        setAuthError(null);
        setLoaderVisible(false);
    }
});

getAllTodosFx.fail.watch((error) => {
    if (error.error.message === 'No authorization') {
        setAuthError(error.error.message);
        localStorage.removeItem(storageName);
        setLoaderVisible(false);
    }
});


sample({
    source: combine($newTodoName, $token),
    clock: onAddNewTodo,
    target: addNewTodoFx,
});

addNewTodoFx.pending.watch((pending) => {
    if (pending) {
        setRequestPending(true);
    }
});

addNewTodoFx.done.watch((result) => {
    if (result) {
        setTodos(result.result.allTodos.reverse().map((todo: any) => ({...todo, tasks: todo.tasks.reverse()})));
        setRequestPending(false);
    }
    clearAddNewTodoName();
});
addNewTodoFx.fail.watch(() => {
    setRequestPending(false);
    clearAddNewTodoName();
});

sample({
    source: $token,
    clock: onRenameTodo,
    fn: (token, clock) => ([token, clock]),
    target: renameTodoFx,
});

renameTodoFx.pending.watch((pending) => {
    if (pending) {
        setRequestPending(true);
    }
});

renameTodoFx.done.watch((result) => {
    if (result && result.result && result.result.allTodos.length) {
        getAllTodos();
        setRequestPending(false);
    }
});
renameTodoFx.fail.watch((error) => {
    setRequestPending(false);
});

sample({
    source: $token,
    clock: onRemoveTodo,
    fn: (token, todoId) => ([token, todoId]),
    target: removeTodoFx,
});

removeTodoFx.pending.watch((pending) => {
    if (pending) {
        setRequestPending(true);
    }
});

removeTodoFx.done.watch((result) => {
    if (result) {
        setTodos(result.result.remainingTodos.reverse().map((todo: any) => ({...todo, tasks: todo.tasks.reverse()})));
        setRequestPending(false);
    }
});
removeTodoFx.fail.watch((error) => {
    setRequestPending(false);
});


sample({
    source: $token,
    clock: onAddNewTask,
    fn: (token, clock) => ([token, clock]),
    target: addNewTaskFx,
});

addNewTaskFx.pending.watch((pending) => {
    if (pending) {
        setRequestPending(true);
    }
});

addNewTaskFx.done.watch((result) => {
    if (result && result.result && result.result.allTasks.length) {
        getAllTodos();
        setRequestPending(false);
    }
});
addNewTaskFx.fail.watch((error) => {
    setRequestPending(false);
});

sample({
    source: $token,
    clock: onRemoveTask,
    fn: (token, clock) => ([token, clock]),
    target: removeTaskFx,
});

removeTaskFx.pending.watch((pending) => {
    if (pending) {
        setRequestPending(true);
    }
});

removeTaskFx.done.watch((result) => {
    if (result && result.result && result.result.remainingTasks) {
        getAllTodos();
        setRequestPending(false);
    }
});
removeTaskFx.fail.watch((error) => {
    setRequestPending(false);
});


sample({
    source: $token,
    clock: onRenameTask,
    fn: (token, clock) => ([token, clock]),
    target: renameTaskFx,
});

renameTaskFx.pending.watch((pending) => {
    if (pending) {
        setRequestPending(true);
    }
});

renameTaskFx.done.watch((result) => {
    if (result && result.result && result.result.allTasks.length) {
        getAllTodos();
        setRequestPending(false);
    }
});
renameTaskFx.fail.watch((error) => {
    setRequestPending(false);
});

sample({
    source: $token,
    clock: onDragDropTask,
    fn: (token, clock) => ([token, clock]),
    target: dragDropTaskFx,
});

dragDropTaskFx.pending.watch((pending) => {
    if (pending) {
        setRequestPending(true);
    }
});

dragDropTaskFx.done.watch((result) => {
    if (result && result.result && result.result.allTodos.length) {
        setTodos(result.result.allTodos.reverse().map((todo: any) => ({...todo, tasks: todo.tasks.reverse()})));
        setRequestPending(false);
    }
});
dragDropTaskFx.fail.watch((error) => {
    setRequestPending(false);
});
