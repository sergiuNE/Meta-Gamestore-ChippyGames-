import "./style.css";

// Voor toekomstige JS/TS functionaliteit
const platformSelect = document.getElementById(
  "platform-select"
) as HTMLSelectElement;
platformSelect.addEventListener("change", () => {
  console.log("Geselecteerd platform:", platformSelect.value);
});
