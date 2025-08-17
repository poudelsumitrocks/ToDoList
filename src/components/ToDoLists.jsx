import React, { useState } from "react";

export default function ToDoLists() {
  const [ToDoLists, setTodoLists] = useState([]);
  const [inputvalue, setInputValue] = useState("");

  const handlevalueTransfer = (e) => {
    setInputValue(e.target.value);
  };
  function handleAddTodoLists() {
    if(inputvalue.length>0){
    const newTodolist = [...ToDoLists];
    newTodolist.push(inputvalue);
    setTodoLists(newTodolist);
    setInputValue("");}
  }
  const handleRemoveToDoLists = (index) => {
    const newTodolist = [...ToDoLists];
    newTodolist.splice(index, 1);
    setTodoLists(newTodolist);
  };
  const handleUpdate = (index, newValue) => {
    const newTodolist = [...ToDoLists];
    newTodolist[index] = newValue;
    setTodoLists(newTodolist);
  };
  const handleClear = () => {
    setTodoLists([]);
  };
  return (
    <>
      <label htmlFor="text">Enter someThing</label>
      <input
        type="text"
        className="h-10 w-32 border m-4"
        value={inputvalue}
        onChange={handlevalueTransfer}
      />
      <div className="h-14 rounded m-6 bg-amber-200" >
        <h2>{inputvalue}</h2>
      </div>

      <button
        className="h-10 w-32 bg-blue-400 ml-2"
        onClick={handleAddTodoLists}
      >
        Add the lists
      </button>
      <button className="h-10 w-32 bg-blue-400 ml-2" onClick={handleClear}>
        Clear the lists
      </button>

      <ul>
        {ToDoLists.length > 0 &&
          ToDoLists.map((item, index) => (
            <li key={index}>
              {item}
              <button
                className="h-10 w-32 bg-amber-300"
                onClick={() => handleRemoveToDoLists(index)}
              >
                Remove
              </button>
              <button
                className="h-10 w-32 bg-amber-600"
                onClick={() => handleUpdate(index, prompt("Enter the value"))}
              >
                {" "}
                Update
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
