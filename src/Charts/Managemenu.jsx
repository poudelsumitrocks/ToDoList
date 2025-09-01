import React from 'react';

export default function Managemenu() {
    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Management Menu</h2>
            <ul className="space-y-4">
                <li>
                    <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Add User
                    </button>
                </li>
                <li>
                    <button className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition">
                        Edit User
                    </button>
                </li>
                <li>
                    <button className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition">
                        Delete User
                    </button>
                </li>
            </ul>
        </div>
    );
}
