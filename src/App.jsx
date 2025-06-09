import { useEffect } from "react";
import items from "./data/items";

function App() {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        📦 Warehouse Goods
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-lg p-2 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-24 object-cover rounded"
            />
            <h2 className="mt-2 font-semibold text-center text-sm">
              {item.name}
            </h2>
            <p className="text-xs text-gray-500">Stock: {item.quantity}</p>
            <button className="mt-2 px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
              Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
