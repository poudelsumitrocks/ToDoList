import React from 'react';

export default function Customermenu() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-8 text-blue-700 text-center">Customer Menu</h1>
                <div className="flex flex-col gap-6">
                    <button className="flex items-center gap-3 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-semibold">
                        <span>👤</span> Profile
                    </button>
                    <button className="flex items-center gap-3 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition font-semibold">
                        <span>📦</span> Orders
                    </button>
                    <button className="flex items-center gap-3 bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition font-semibold">
                        <span>⚙️</span> Settings
                    </button>
                    <button className="flex items-center gap-3 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition font-semibold">
                        <span>🚪</span> Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
