import React, {ChangeEvent, DragEvent, useEffect, useRef, useState} from 'react'
import styled from "styled-components";
import {COLORS} from "../constants/styles";
import '../assets/styles/components/_todo.scss';
import {Task} from "./Task";
import {Radio} from "./Radio";
import {v1} from "uuid";
import {Popup} from "./Popup";
import {$todos, onDragDropTask, onRemoveTodo, onRenameTodo} from "../@/todos/model";
import {addNewTaskFx, renameTodoFx} from "../api/todo-api";
import {Input} from "./Input";


const TodoWrapper = styled.div`
  position: relative;
  
  width: 280px;
  min-height: 50px;
  border-radius: 15px;
  background-color: ${({backgroundColor}: TodoWrapperProps) => backgroundColor || COLORS.base};
`;

export const Todo = ({id, todoName, tasks}: TodoProps) => {

    // Radio
    const name = v1();
    const all = v1();
    const progress = v1();
    const completed = v1();

    const inputRef = useRef<any>();
    const [input, setInput] = useState('');
    const [renameTodoPending, setRenameTodoPending] = useState(false);
    const [isOpenPopup, setPopupOpen] = useState(false);
    const [allowRenaming, setAllowRenaming] = useState(false);
    const [radio, setRadio] = useState<string>('All');
    const [chosenTasks, setChosenTasks] = useState<any>([]);


    useEffect(() => {
        switch (radio) {
            case 'All': {
                setChosenTasks(tasks);
                break;
            }
            case 'Progress': {
                setChosenTasks(tasks.filter((task: any) => !task.isCompleted));
                break;
            }
            case 'Completed': {
                setChosenTasks(tasks.filter((task: any) => task.isCompleted));
                break;
            }

        }
    }, [radio, tasks])


    const onRadioChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {value} = e.target;
        setRadio(value);
    }
    const onOpenClosePopup = () => {
        console.log(isOpenPopup)
        setPopupOpen(!isOpenPopup);
        document.removeEventListener('click', outsideClickListener);
    }

    const onTodoRemove = () => {
        onRemoveTodo(id);
        setPopupOpen(false);
        document.removeEventListener('click', outsideClickListener);
    }

    const [isAddTaskPending, setAddTaskPending] = useState(false);
    const onAddTask = () => {
        setAddTaskPending(true);
        setPopupOpen(false);
        document.removeEventListener('click', outsideClickListener);
    }

    const renameTodo = () => {
        setRenameTodoPending(true);
    }

    const cancelTodoAdding = () => {
        if (renameTodoPending) {
            setRenameTodoPending(false)
        }
    }

    let todoPopupItems = [{name: 'Add task', handler: onAddTask}, {
        name: 'Rename',
        handler: renameTodo
    }, {name: 'Move to'},
        {
            name: 'Remove',
            handler: onTodoRemove
        }];

    if (renameTodoPending) {
        todoPopupItems = [{name: 'Cancel', handler: cancelTodoAdding}, ...todoPopupItems]
    }

    useEffect(() => {
        document.addEventListener('click', outsideClickListener);
    }, [isOpenPopup]);

    const outsideClickListener = (e: any) => {
        const popups = document.querySelectorAll('.popup');

        if (popups && isOpenPopup) {
            let needClose = true;
            popups.forEach(popup => {
                if (popup.contains(e.target)) {
                    needClose = false;
                }
            })
            if (needClose) {
                setPopupOpen(false);
                document.removeEventListener('click', outsideClickListener);
            }

        }
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (renameTodoPending && e.target.value.trim()) {
            setAllowRenaming(true)
        }
        setInput(e.target.value)
    }

    useEffect(() => {
        if (renameTodoPending && todoName) {
            setInput(todoName);
        }
    }, [renameTodoPending])

    const onInputBlurEnter = () => {
        if (renameTodoPending && !allowRenaming) {
            inputRef.current.focus();
        } else if (renameTodoPending && allowRenaming) {
            onRenameTodo({name: input, todoId: id});
        }
    }

    addNewTaskFx.done.watch((result) => {
        if (result && result.result && result.result.allTasks.length) {
            setAddTaskPending(false);
        }
    });

    renameTodoFx.done.watch((result) => {
        if (result && result.result && result.result.allTodos.length) {
            setRenameTodoPending(false);
        }
    });

    const [isShowTaskShadow, setShowTaskShadow] = useState(false);

    const dragEnterHandler = (e: DragEvent<HTMLDivElement>) => {
        if (tasks.length) return;
        console.log('todo enter')
        setShowTaskShadow(true)
    }
    const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
        if (tasks.length) return;
        e.preventDefault();
    }
    const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
        if (tasks.length) return;
        setShowTaskShadow(false)
    }
    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        if (tasks.length) return;
        console.log('todo drop')
        e.preventDefault();
        setShowTaskShadow(false);
        const currentTodoId = e.dataTransfer.getData('currentTodoId');
        const currentTaskId = e.dataTransfer.getData('currentTaskId');

        const todos = $todos.getState();
        let currentTodoIndex = todos.findIndex(el => el.id === currentTodoId);
        const currentTask = todos[currentTodoIndex].tasks.find((el: any) => el.id === currentTaskId);

        onDragDropTask({
            currentTodoId,
            targetTodoId: id,
            currentTaskId,
            targetTaskIndex: 0,
            name: currentTask.name,
            description: currentTask.description,
            isCompleted: currentTask.isCompleted
        })
    }


    return (
        <TodoWrapper
            className="todo"
            onDragEnter={dragEnterHandler}
            onDragOver={dragOverHandler}
            onDrop={dropHandler}
        >

            <Popup className='popup' isOpen={isOpenPopup} items={todoPopupItems}/>

            <div className="todo-header">
                {
                    renameTodoPending ?
                        <Input autoFocus
                               className="todo-title__input"
                               type="text"
                               value={input}
                               onChange={onInputChange}
                               onBlur={onInputBlurEnter}
                               onEnter={onInputBlurEnter}
                               inputRef={inputRef}
                        /> :
                        <div className="todo-title">
                            {todoName}
                            {/*Tran Mau Tri Tam*/}
                        </div>
                }
                <div className="menu-icon" onClick={onOpenClosePopup}>
                    <div style={isOpenPopup ? {backgroundColor: '#fff'} : {}} className="todo-dot"/>
                    <div style={isOpenPopup ? {backgroundColor: '#fff'} : {}} className="todo-dot"/>
                    <div style={isOpenPopup ? {backgroundColor: '#fff'} : {}} className="todo-dot"/>
                </div>
            </div>

            <div className="todo-task-group">
                <label htmlFor={all} className="todo-label">
                    All
                    <Radio id={all} name={name} value="All" onChange={onRadioChange} checked={radio === "All"}
                           radioBackground={COLORS.blueMain}/>
                </label>
                <label htmlFor={progress} className="todo-label">
                    Progress
                    <Radio id={progress} name={name} value="Progress" onChange={onRadioChange}
                           checked={radio === "Progress"} radioBackground={COLORS.orange}/>
                </label>
                <label htmlFor={completed} className="todo-label">
                    Completed
                    <Radio id={completed} name={name} value="Completed" onChange={onRadioChange}
                           checked={radio === "Completed"} radioBackground={COLORS.green}/>
                </label>
            </div>

            <div className="todo-main">
                {
                    isAddTaskPending && <Task isAddTaskPending todoId={id} setAddTaskPending={setAddTaskPending}/>
                }
                {
                    isShowTaskShadow && !tasks.length &&
                    <div
                        className='task-shadow'
                        // onDragOver={(e) => dragOverHandler(e)}
                        // onDragEnter={dragEnterTaskHandler}
                        onDragLeave={dragLeaveHandler}
                        // onDrop={(e) => dropHandler(e, todoId, id)}
                    />
                }
                {
                    chosenTasks?.map((task: any) =>
                        (
                            <Task key={task.id} id={task.id} todoId={id} name={task.name}
                                  isCompleted={task.isCompleted}
                            />
                        )
                    )
                }
                {/*No tasks added*/}
            </div>

        </TodoWrapper>
    )
}


type TodoProps = {
    todoName: string
    tasks?: any
    id: string
}

type TodoWrapperProps = {
    backgroundColor?: string;
    className?: string;
}
