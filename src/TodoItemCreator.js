
import React, {useState} from "react";
import { useSetRecoilState } from "recoil";
import {todoListState} from "./atom";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
       setTodoList((oldTodoList) => {
       const getId = oldTodoList.length ? oldTodoList[oldTodoList.length -1].id + 1 : 0;
          return [
          ...oldTodoList,
          {
              id: getId,
              text: inputValue,
              isComplete: false,
          }
      ]});
      setInputValue('');
  }

  const onChange = ({target: {value}}) => {
      setInputValue(value);
  }

  return (
    <>
     <input type="text" value={inputValue} onChange={onChange} />
     <button onClick={addItem}>Add</button>
    </>
  );
  
};

export default TodoItemCreator;
