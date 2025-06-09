import { useEffect } from "react";
import { initTelegramWebApp } from "@twa-dev/sdk";

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand(); // Optional: makes the app full-height
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        📦 Warehouse Goods
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {/* We'll render items here later */}
      </div>
    </div>
  );
}

export default App;
