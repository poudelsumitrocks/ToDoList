import React, { useState } from "react";

export default function LocalStorage() {
`  const [data, setData] = useState("");`
  const [user, setUser] = useState("");
  const [localaction, setLocalAction] = useState("");
  const [sessionaction, setSessionAction] = useState("");

  const addLocalStorage = () => {
    localStorage.setItem("data", data);
    setLocalAction("Added");
  };
  const removeLocalStorage = () => {
    localStorage.removeItem("data");
    setData("");
    setLocalAction("Removed");
  };
  const loadLocalStorage = () => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(storedData);
    }
    setLocalAction("Load");
  };
  const updateLocalStorage = () => {
    localStorage.setItem("data", data);
    setLocalAction("Update");
  };
  const handleReset = () => {
    setLocalAction("");
    setSessionAction("");
  };

  const addSessionStorage = () => {
    sessionStorage.setItem("user", user);
    setSessionAction("Added");
  };

  const removeSessionStorage = () => {
    sessionStorage.removeItem("user");
    setUser("");
    setSessionAction("Removed");
  };

  const loadSessionStorage = () => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
    setSessionAction("Load");
  };

  const updateSessionStorage = () => {
    sessionStorage.setItem("user", user);
    setSessionAction("Update");
  };

  return (
    <div>
      <div className="flex flex-row h-screen w-full p-4 gap-4 justify-center items-center">
      
      
        <div className=" h-1/2 w-1/2 border bg-amber-100 flex items-center flex-col p-6">
          <h1 className=" text-2xl font-semibold ">Local Storage</h1>

          <div className="h-auto w-full flex flex-row gap-2 p-4">
            <input
              type="text"
              className="w-full border h-10 p-6"
              placeholder="Enter the data"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <button
              className="bg-blue-400 border p-2"
              onClick={addLocalStorage}
            >
              Add
            </button>
            <button
              className="bg-red-400 border p-2"
              onClick={removeLocalStorage}
            >
              Remove
            </button>
            <button
              className="bg-blue-400 border p-2"
              onClick={updateLocalStorage}
            >
              Update
            </button>
            <button
              className="bg-blue-400 border p-2"
              onClick={loadLocalStorage}
            >
              Load
            </button>
          </div>
          <div className=" h-full w-full  flex flex-col items-center ">
            <div className="h-full w-full border m-2 p-4">
              <p>{localaction ? `${localaction} data: ${data}` : ""}</p>
            </div>
            <button
              className={"bg-blue-500 p-2 rounded-2xl w-20 "}
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>

        
        <div className=" h-1/2 w-1/2 border bg-blue-200 flex items-center flex-col p-6">
          <h1 className=" text-2xl font-semibold"> Session Storage</h1>

          <div className="h-auto w-full flex flex-row gap-2 p-4">
            <input
              type="text"
              className="w-full border h-10 p-6"
              placeholder="Enter the user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <button
              className="bg-blue-400 border p-2"
              onClick={addSessionStorage}
            >
              Add
            </button>
            <button
              className="bg-red-400 border p-2"
              onClick={removeSessionStorage}
            >
              Remove
            </button>
            <button
              className="bg-blue-400 border p-2"
              onClick={updateSessionStorage}
            >
              Update
            </button>
            <button
              className="bg-blue-400 border p-2"
              onClick={loadSessionStorage}
            >
              Load
            </button>
          </div>
          <div className=" h-full w-full  flex flex-col items-center ">
            <div className="h-full w-full border m-2 p-4">
              <p>{sessionaction ? `${sessionaction} user: ${user}` : ""}</p>
            </div>
            <button
              className={"bg-blue-500 p-2 rounded-2xl w-20 "}
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
