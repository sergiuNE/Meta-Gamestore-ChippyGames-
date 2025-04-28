import PlatformDropdown from "./PlatformDropdown";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black bg-opacity-70">
      <img src="/logo_ICT.png" alt="Logo" className="h-12" />
      <div className="flex items-center space-x-4">
        <PlatformDropdown />
        <button className="bg-white text-black px-4 py-2 rounded-full">
          Sign-in
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
