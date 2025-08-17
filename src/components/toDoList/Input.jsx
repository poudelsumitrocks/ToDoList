import React, { useState } from "react";
import Buttons from "./Buttons";
import TaskItems from "./TaskItems";

export default function Input() {
  const [toDolist, setTodolist] = useState([]);
  const [inputValue, setInputvalue] = useState("");
  const [isDarkmode, setIsDarkmode] = useState(false);


  const handleTransfer = (e) => setInputvalue(e.target.value);

  function handleAdd() {
    if (inputValue.trim().length > 0) {
      setTodolist([...toDolist, { text: inputValue, completed: false }]);
      setInputvalue("");
    }
  }

  const handleRemove = (index) => {
    const newTodolist = [...toDolist];
    newTodolist.splice(index, 1);
    setTodolist(newTodolist);
  };

  const handleUpdate = (index, newValue) => {
    const newTodolist = [...toDolist];
    newTodolist[index].text = newValue;
    setTodolist(newTodolist);
  };

  const handleClear = () => setTodolist([]);

  const handleMark = (index) => {
    const newTodolist = toDolist.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setTodolist(newTodolist);
  };

  return (
    <div className="w-full max-w-[350px] mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">

      <h1 className="text-center text-2xl font-bold mb-4">TO-DO LIST</h1>

 
      <div className="flex flex-col sm:flex-row mb-4">
        <input
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={handleTransfer}
          className="border border-gray-300 rounded-l px-3 py-2 flex-1  mb-2 sm:mb-0 sm:mr-2"
        />
        <Buttons
          handleAdd={handleAdd}
          handleClear={handleClear}
          showClear={false} 
          toggleDarkMode={() => setIsDarkmode(!isDarkmode)}
        />
      </div>

    
      {toDolist.map((task, index) => (
        <TaskItems
          key={index}
          task={task}
          index={index}
          handleRemove={handleRemove}
          handleUpdate={handleUpdate}
          handleMark={handleMark}
        />
      ))}

      {toDolist.length > 0 && (
        <div className="mt-4">
          <Buttons handleAdd={handleAdd} handleClear={handleClear} showClear={true} />
        </div>
      )}
    </div>
  );
}
