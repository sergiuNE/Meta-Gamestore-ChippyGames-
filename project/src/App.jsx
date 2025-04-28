import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-grow text-white">
        <h1 className="text-4xl md:text-6xl font-bold my-8">
          Best <span className="text-blue-400">Game Deals</span> Engine
        </h1>
        <Searchbar />
      </div>
      <footer className="bg-black text-white text-sm flex justify-between p-2">
        <div>© 2025 ChippyGames</div>
        <div>
          <a href="#" className="hover:underline">
            About
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
