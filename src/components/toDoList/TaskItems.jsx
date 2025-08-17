import React, { useState } from "react";

export default function TaskItems({ task, index, handleRemove, handleUpdate, handleMark }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.text);

  const saveEdit = () => {
    if (editValue.trim()) {
      handleUpdate(index, editValue);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b py-2">
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleMark(index)}
          className="mr-2 mt-1 sm:mt-0"
        />
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="border px-2 py-1 rounded flex-1 mr-0 sm:mr-2 break-words"
          />
        ) : (
          <span
            className="flex-1 break-words"
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </span>
        )}
      </div>

      <div className="flex gap-2 mt-2 sm:mt-0">
        {isEditing ? (
          <button
            className="bg-green-500 text-white px-2 py-1 rounded"
            onClick={saveEdit}
          >
            Save
          </button>
        ) : (
          <>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
          </>
        )}
      </div>
    </div>
  );
}
