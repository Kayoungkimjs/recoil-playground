import React from 'react';
import {useRecoilValue} from 'recoil';
import TodoItemCreator from './TodoItemCreator'
import {filteredTodoListState } from "./atom";
import TodoItem from './TodoItem'
import TodoListFilters from './TodoListFilters';
import { todoListState } from './atom';
import TodoListStats from './TodoListStats';

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);

    return( 
        <>
        <TodoListStats />
        <TodoListFilters />
        <TodoItemCreator />
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
             ))}
        </>

    )
}

export default TodoList;
