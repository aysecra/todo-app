import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { id, content } = props;

 const click = (e) =>{
  if(e.target.tagName !== "BUTTON")
    e.target.firstChild.classList.toggle("line-through");
 }

  return (
  <div className="d-flex" onClick = {click}>
    <div  className="my-auto mr-auto">{content}</div> 
    <button className = "btn btn-danger" value={id} onClick={props.removeTodo}>Sil </button>       
  </div>);
}

export default Todo;
