import React from 'react';

export default function Foodmenu() {
    const menu = [
        { name: "Grilled Chicken Salad", price: "$8.99" },
        { name: "Veggie Burger", price: "$7.49" },
        { name: "Pasta Alfredo", price: "$9.25" },
        { name: "Fruit Smoothie", price: "$4.50" }
    ];
    return (
        <div className="max-w-sm mx-auto mt-10 p-6 rounded-xl shadow-lg bg-white font-sans">
            <div className="text-2xl font-semibold mb-4 text-gray-800">
                Today's Food Menu
            </div>
            <ul className="list-none p-0">
                {menu.map((item, idx) => (
                    <li
                        key={item.name}
                        className={`py-3 flex justify-between ${idx !== menu.length - 1 ? 'border-b border-gray-200' : ''}`}
                    >
                        <span>{item.name}</span>
                        <span className="text-gray-500">{item.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}


