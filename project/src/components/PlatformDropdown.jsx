import { useEffect, useState } from "react";

function PlatformDropdown() {
  const [platforms, setPlatforms] = useState([]);
  const [selected, setSelected] = useState("PC");

  useEffect(() => {
    fetch("/platforms.json")
      .then((res) => res.json())
      .then((data) => setPlatforms(data));
  }, []);

  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="bg-white text-black px-2 py-1 rounded"
    >
      {platforms.map((platform) => (
        <option key={platform} value={platform}>
          {platform}
        </option>
      ))}
    </select>
  );
}

export default PlatformDropdown;
