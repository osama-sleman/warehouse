import { useEffect } from "react";

function App() {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg) {
      tg.ready();
      tg.expand(); // Optional: makes the app full-height
      console.log("Telegram WebApp loaded:", tg);
    } else {
      console.warn("Telegram WebApp is not available");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        📦 Warehouse Goods
      </h1>
      <p className="text-center mb-2 text-sm text-gray-600">
        Telegram SDK loaded!
      </p>
      <div className="grid grid-cols-2 gap-4">
        {/* We'll render items here later */}
      </div>
    </div>
  );
}

export default App;
