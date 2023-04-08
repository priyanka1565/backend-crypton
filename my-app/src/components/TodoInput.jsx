import React, { useState } from 'react'

const TodoInput = () => {
    const [inputText,setInputText] = useState("")
  return (
    <div className="input_container">
      <input
        type="text"
        className="input_box_todo"
        placeholder="Enter your todos"
        onChange={(e) => {
            setInputText(e.target.value);
            console.log("value",e.target.value)
        }}
      />
      <button className="add_btn">+</button>
      <div>{inputText}</div>
    </div>
  );
}

export default TodoInput