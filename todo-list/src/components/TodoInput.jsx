import React, { useState } from "react";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");

  const handleEnterKey = (e) =>{
    if(e.keyCode === 13){
        props.addList(inputText) 
        setInputText('');
    }
  }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        value={inputText}
        placeholder="Enter your tasks.."
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleEnterKey}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
