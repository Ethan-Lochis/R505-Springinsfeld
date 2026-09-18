import { useState, useEffect } from "react";
import FollowerCard from "./components/follower_card";
import OverviewCard from "./components/overview_card";
import { platformsData, totalFollowers, todayStats } from "./data";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Vérifier si un choix est sauvegardé ou si le système est en dark mode
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text-heading dark:text-dark-text-heading p-8 flex flex-col items-center justify-center transition-colors duration-300">
      <header className="flex w-full justify-between px-12 my-12">
        <div className="">
          <h1 className="text-3xl font-bold">Social media dashboard</h1>
          <h2 className="text-sm font-bold text-light-text dark:text-dark-text">total followers : {totalFollowers}</h2>
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="dark-mode" className="text-sm font-bold text-light-text dark:text-dark-text cursor-pointer">
            Dark Mode
          </label>
          {/* Slider Switch */}
          <label htmlFor="dark-mode" className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="dark-mode"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="sr-only peer"
            />
            {/* Arrière-plan du slider */}
            <div className="w-12 h-6 rounded-full bg-toggle-light peer-checked:bg-toggle-dark peer-focus:outline-none transition-colors duration-300"></div>
            {/* Bouton rond coulissant */}
            <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-light-bg dark:bg-dark-card transition-transform duration-300 peer-checked:translate-x-6"></div>
          </label>
        </div>

      </header>
      <div className="w-full max-w-6xl">
        {/* Grille responsive : 1 col sur mobile, 2 sur tablette, 4 sur desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformsData.map((item) => (
            <FollowerCard
              key={item.id}
              platform={item.platform}
              user={item.user}
              total={item.total}
              unit={item.unit}
              today={item.today}
              isPositive={item.isPositive}
            />
          ))}
        </div>
      </div>
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-light-text-heading dark:text-dark-text-heading mt-12 mb-6">
          Overview - Today
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {todayStats.map((item) => (
            <OverviewCard
              key={item.id}
              platform={item.platform}
              title={item.title}
              value={item.value}
              percentage={item.percentage}
              isPositive={item.isPositive}
            />
          ))}
        </div>
      </div>
    </main>
  );
}