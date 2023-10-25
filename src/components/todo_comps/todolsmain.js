import {useState, useEffect} from "react";
import TodoInput from './todoInput';
import "./todo.css"
import Todolist from './TodoList';
import firebase from "firebase/app";
import firestore from "firestore";
function Todomain() {
  // todo list Functions
  const [listTodo, setListTodo] = useState(() => {
    const storedList = localStorage.getItem("todoList");
    return storedList ? JSON.parse(storedList) : [];
  });
  const addList = (inputText) => {
    if (inputText !== '') {
      const updatedList = [...listTodo, inputText];
      setListTodo(updatedList);
      localStorage.setItem("todoList", JSON.stringify(updatedList)); // Update local storage
    }
  }
  const deleteListItem = (index) => {
    const updatedList = [...listTodo];
    updatedList.splice(index, 1);
    setListTodo(updatedList);
    localStorage.setItem("todoList", JSON.stringify(updatedList)); // Update local storage
  }
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(listTodo));
  }, [listTodo]);
  // timer funtions

  return (
      <div className="maintd">
      <p>Todo List</p>
      <TodoInput addList={addList}/>
      {listTodo.map((listItem,i)=>{
        console.log(listItem);
        return (
          <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
        <main></main>
      </div>
  );
}

export default Todomain;