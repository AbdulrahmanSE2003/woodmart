const progressBar = document.querySelector(".my-progress-bar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;

  const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

  progressBar.style.width = `${scrollPercent}%`;
});
