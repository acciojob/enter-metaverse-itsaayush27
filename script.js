const status = document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
  // Insert an <h1> inside the <p> with id="status"
  status.innerHTML = "<h1>Entered Metaverse</h1>";
});