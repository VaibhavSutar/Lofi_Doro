import React,{useState} from "react";
import firebase from 'firebase/compat/app'; // Import Firebase
import 'firebase/firestore'; // Import Firestore
import "./todo.css"
function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            addTodoItem(inputText)
            console.log("console:"+inputText);
            setInputText("")
        }
    }
    const addTodoItem = (text) => {
      const userEmail = 'user@example.com'; // Replace with your method of obtaining the user's email
  
      // Firebase: Add the to-do item to a document with the user's email as the ID
      firebase.firestore().collection('todos').doc(userEmail).collection('items').add({
        text: text,
      })
      .then(() => {
        console.log('To-do item added to Firebase');
      })
      .catch((error) => {
        console.error('Error adding to-do item to Firebase: ', error);
      });
  
      // Local Storage: Store the to-do item
      const currentItems = JSON.parse(localStorage.getItem(userEmail)) || [];
      currentItems.push(text);
      localStorage.setItem(userEmail, JSON.stringify(currentItems));
  
      // Notify the parent component that a new to-do item has been added
      props.addList(text);
    }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>+</button>      
    </div>
  );
}

export default TodoInput;