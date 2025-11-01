import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function PracticeApi() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL; 
  const [data, setData] = useState(null);
  const [IsDeleted, setIsDeleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network Error is Not Ok");
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        console.log("Fetch Error", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [IsDeleted, isAdded, isUpdated]);

  const handleDelete = async (id) => {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setIsDeleted(!IsDeleted);
      toast.success("User Deleted Successfully");
    }
  };
const handleUpdate = async (id, oldUser) => {

  const newName = prompt("Enter new name", oldUser.name);
  const newEmail = prompt("Enter new email", oldUser.email);
  const newAvatar = prompt("Enter new avatar URL", oldUser.avatar);

  if (!newName || !newEmail) return;

  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newName,
      email: newEmail,
      avatar: newAvatar,
    }),
   
  });

  if (response.ok) {
    const updatedUser = await response.json();
    setData((prevData) =>
      prevData.map((user) => (user.id === id ? updatedUser : user)),
    setIsUpdated(!isUpdated)
    ); 
    toast.success("User Updated Successfully");
  }
};


  const onSubmit = async (formData) => {
    console.log(formData, "formdata for new user");
    const newUser = {
      name: formData.name,
      email: formData.email,
      createdAt: new Date().toISOString(),
      avatar: formData.avatar,
    };
    const addUser = async () => {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (res.ok) {
        reset();
        setIsAdded(!isAdded);
        reset();
        toast.success("User added successfully");
      }
    };
    addUser();
  };

  return (
    <>
      <div className="m-4 p-4 ">
        <h2 className="text-2xl font-bold underline mb-2">Practice Api</h2>
        <p>
          Data Fetcing and Showing below :{" "}
          <span className=" text-xl text-blue-600 ">
            {" "}
            Total Count {data ? data.length : 0}
          </span>
        </p>
      </div>
      <div className=" p-4 mb-4 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col  p-2 border mb-4 border-gray-500 "
        >
          <h2 className="text-center font-bold">Add newData</h2>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              required
              {...register("name")}
              className="border-b pl-2  h-10 w-full outline-none "
              placeholder="Enter Your Full Name"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              required
              {...register("email")}
              className="border-b pl-2  h-10 w-full outline-none "
              placeholder="Enter Your Email"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="avatar"
              {...register("avatar")}
              className="border-b pl-2  h-10 w-full outline-none "
              placeholder="Enter Your Avatar Url"
            />
          </div>
          <div className="flex justify-center">
            <button className="h-10 w-32 bg-blue-500 text-white rounded-xl cursor-pointer">
              AddUser
            </button>
          </div>
        </form>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {loading ? (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-4 border-gray-300 border-t-blue-500 animate-spin"></div>
            ) : (
              data &&
              data.map((user) => (
                <div key={user.id} className="border p-2 rounded-lg shadow-lg">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{user.name}</h3>
                  <p className="text-gray-600 mb-4">{user.email}</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="h-8 w-24 bg-red-500 text-white rounded-lg"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => handleUpdate(user.id,user)}
                      className="h-8 w-24 bg-yellow-500 text-white rounded-lg"
                    >
                      Update
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
