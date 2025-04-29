import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "/logo_ICT.png";

export default function App() {
  const [platform, setPlatform] = useState("PC");
  const platforms = ["PC", "Playstation", "Xbox", "Nintendo"];

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col justify-between">
      {/* Header met logo, dropdown en login */}
      <header className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo linksboven met tekst */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Logo" className="w-6 h-6" />{" "}
            {/* Verkleind logo */}
            <span className="text-gray-400 text-xs mt-1">ChippyGames</span>{" "}
            {/* Lichtgrijze tekst */}
          </div>

          {/* Rechterbovenhoek dropdown + login */}
          <div className="flex items-center gap-4">
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="px-3 py-1 rounded-full bg-white text-black text-sm font-medium text-center"
            >
              {platforms.map((p) => (
                <option key={p} value={p} className="text-center">
                  {p}
                </option>
              ))}
            </select>

            <div className="flex items-center bg-white rounded-lg px-4 py-2">
              <div className="bg-black rounded-full w-6 h-6 mr-2"></div>
              <span className="text-black text-sm">Sign-in</span>
            </div>
          </div>
        </div>
      </header>

      {/* Midden content */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-6">
          Best <span className="text-cyan-400">Game Deals</span> Engine
        </h1>

        <div className="relative w-11/12 max-w-xl">
          <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for you favorite game"
            className="w-full pl-12 pr-6 py-4 rounded-full bg-white text-gray-700 placeholder-gray-400"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-100 text-white text-sm flex justify-between items-center px-6 py-3">
        <span>© 2025 ChippyGames</span>
        <a href="#" className="text-white no-underline hover:underline">
          About
        </a>
      </footer>
    </div>
  );
}
