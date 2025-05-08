import "./style.css";

const PLATFORM_API_URL = "http://localhost:3002/platforms";
const GAME_API_URL = "http://localhost:3001/games";
const DEAL_API_URL = "http://localhost:3004/deals";

const platformSelect = document.getElementById(
  "platform-select"
) as HTMLSelectElement;
const searchInput = document.getElementById("search") as HTMLInputElement;
const main = document.querySelector("main") as HTMLElement;

async function initPlatformDropdown() {
  if (!platformSelect) return;

  try {
    const res = await fetch(PLATFORM_API_URL);
    const data: { name: string }[] = await res.json();
    const platforms = data.map((p) => p.name);
    platformSelect.innerHTML = "";
    platforms.forEach((p) => {
      const opt = document.createElement("option");
      opt.value = p;
      opt.textContent = p;
      platformSelect.appendChild(opt);
    });
    platformSelect.value = platforms[0];
  } catch {
    // fallback
    ["PC", "PlayStation 4", "PlayStation 5", "Xbox", "Nintendo"].forEach(
      (p) => {
        const opt = document.createElement("option");
        opt.value = p;
        opt.textContent = p;
        platformSelect.appendChild(opt);
      }
    );
  }

  // Koppel event listeners
  platformSelect.addEventListener("change", fetchGames);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      fetchGames();
    }
  });
}

async function fetchGames() {
  const searchTerm = searchInput.value.trim();
  const searchBar = document.querySelector(".search-bar") as HTMLDivElement;

  if (!searchTerm) {
    const oldCards = document.querySelectorAll(".game-card");
    oldCards.forEach((el) => el.remove());
    searchBar.classList.remove("top-right");
    return;
  }

  const platform = platformSelect.value;
  const title = searchInput.value;

  try {
    const [gameRes, dealRes] = await Promise.all([
      fetch(`${GAME_API_URL}?title=${encodeURIComponent(title)}&platform=${encodeURIComponent(platform)}`),
      fetch(DEAL_API_URL),
    ]);

    const games = await gameRes.json();
    const deals = await dealRes.json();

    // Combineer games met bijhorende deals op basis van title
    const gamesWithDeals = games.map((game: any) => {
      const matchingDeal = deals.find((deal: any) => deal.id === game.id); // of op basis van title als je wil
      return {
        ...game,
        sale: matchingDeal?.deal ?? "0%",
        price: matchingDeal?.price ? `${Number(matchingDeal.price).toFixed(2)}€` : "Onbekend",
      };
    });

    if (title.trim() !== "" && gamesWithDeals.length > 0) {
      searchBar.classList.add("top-right");
    } else {
      searchBar.classList.remove("top-right");
    }

    renderGames(gamesWithDeals, platform);
  } catch (err) {
    console.error("Fout bij laden van games:", err);
  }
}


function renderGames(games: any[], platform: string) {
  // Verwijder oude cards
  const oldCards = document.querySelectorAll(".game-card");
  oldCards.forEach((el) => el.remove());

  games.forEach((game) => {
    const platformToImageName: Record<string, string> = {
      PC: "PC",
      Xbox: "Xbox",
      Nintendo: "Nintendo",
      "PlayStation 4": "PlayStation-4",
      "PlayStation 5": "PlayStation-5",
      "Playstation 4": "PlayStation-4",
      "Playstation 5": "PlayStation-5",
    };
    const platformKey = platformToImageName[platform] || platform;
    const imageName = `${game.title.replace(/ /g, "-")}-${platformKey}.jpg`;
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="/${imageName}" alt="${game.title}" class="game-image" />
      <div class="card-content">
        <p><strong>Game:</strong> ${game.title}</p>
        <p class="sale">Sale: ${game.sale}</p>
        <p class="price">Price: ${game.price}</p>
        <p><strong>Platform:</strong> ${platform}</p>
        <p><strong>Sale from:</strong> ${game.saleFrom}</p>
        <p><strong>Ratings:</strong> ${"★".repeat(game.rating)}${"☆".repeat(
      5 - game.rating
    )}</p>
        <p><strong>Genre:</strong> ${game.genre}</p>
        <p><strong>Opinion:</strong> 👍 | 👎</p>
        <button class="rate-button">Rate</button>
      </div>
    `;
    main.appendChild(card);
  });
}

window.addEventListener("DOMContentLoaded", initPlatformDropdown);
