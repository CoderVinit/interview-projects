window.addEventListener("load", () => {
  setTimeout(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0].type === "reload";
    if (isReload) {
      document.getElementById("popup").style.display = "block";
      document.getElementById("overlay").style.display = "block";
    }
  },3000);
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
