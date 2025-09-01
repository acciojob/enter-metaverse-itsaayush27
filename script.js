//your JS code here. If required.
const status = document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");

   enterBtn.addEventListener("click", () => {
      // Change paragraph content into an <h1> with new text
      status.outerHTML = "<h1 id='status'>Entered Metaverse</h1>";
    });