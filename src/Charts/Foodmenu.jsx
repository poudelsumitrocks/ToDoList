import React from "react";
import { useOutletContext } from "react-router";

export default function Foodmenu() {
  const { name } = useOutletContext();

  const menu = [
    { name: "Grilled Chicken Salad", price: "$8.99" },
    { name: "Veggie Burger", price: "$7.49" },
    { name: "Pasta Alfredo", price: "$9.25" },
    { name: "Fruit Smoothie", price: "$4.50" },
  ];
  return (
    // <div className="max-w-sm mx-auto mt-10 p-6 rounded-xl shadow-lg bg-white font-sans">
    //     <div className="text-2xl font-semibold mb-4 text-gray-800">
    //         Today's Food Menu {name}
    //     </div>
    //     <ul className="list-none p-0">
    //         {menu.map((item, idx) => (
    //             <li
    //                 key={item.name}
    //                 className={`py-3 flex justify-between ${idx !== menu.length - 1 ? 'border-b border-gray-200' : ''}`}
    //             >
    //                 <span>{item.name}</span>
    //                 <span className="text-gray-500">{item.price}</span>
    //             </li>
    //         ))}
    //     </ul>
    // </div>

    // traingle
    // <div className='size-96 bg-blue-600 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]'>
    // </div>

    // pantagone
    // <div className="m-10 size-96 bg-blue-600 [clip-path:polygon(50%_0%,100%_20%,100%_100%,0%_100%,0%_20%)]">
    // </div>

    // Star
    // <div className="m-10 size-96 bg-blue-600 [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]"></div>

    <div className="size-96 bg-amber-400 flex justify-center items-center [clip-path:polygon(50%_0%,60%_35%,92%_35%,65%_53%,90%_85%,50%_67%,10%_85%,35%_53%,8%_35%,40%_35%)] animate-spin">
      <div className="size-80 bg-blue-400 flex justify-center items-center [clip-path:polygon(50%_0%,60%_35%,92%_35%,65%_53%,90%_85%,50%_67%,10%_85%,35%_53%,8%_35%,40%_35%)]">
        <div className="size-70 bg-amber-400 flex justify-center items-center [clip-path:polygon(50%_0%,60%_35%,92%_35%,65%_53%,90%_85%,50%_67%,10%_85%,35%_53%,8%_35%,40%_35%)]">
          <div className="size-60 bg-blue-400 flex justify-center items-center [clip-path:polygon(50%_0%,60%_35%,92%_35%,65%_53%,90%_85%,50%_67%,10%_85%,35%_53%,8%_35%,40%_35%)]">
            <div className="w-15 h-15 bg-white flex justify-center items-center [clip-path:circle(50%)]">
              <div className="w-14 h-14 bg-black flex justify-center items-center [clip-path:circle(50%)]">
                <div className="w-13 h-13 bg-white flex justify-center items-center [clip-path:circle(50%)]">
                  <div className="w-12 h-20 bg-black flex justify-center items-center [clip-path:circle(50%)]">
                    <div className="w-10 h-10 bg-white flex justify-center items-center [clip-path:circle(50%)]">
                      <div className="w-9 h-9 bg-black flex justify-center items-center [clip-path:circle(50%)]">
                        <div className="w-8 h-8 bg-white flex justify-center items-center [clip-path:circle(50%)]">
                          <div className="w-7 h-7 bg-black flex justify-center items-center [clip-path:circle(50%)]">
                            <div className="w-6 h-6 bg-white flex justify-center items-center [clip-path:circle(50%)]">
                              <div className="w-5 h-5 bg-black flex justify-center items-center [clip-path:circle(50%)]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
