const band = document.getElementById('diagonalBand');
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

window.addEventListener('mousemove', (e) => {
  const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
  const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;
  mouseX = xRatio * 20;
  mouseY = yRatio * 14;
});

function animate() {
  currentX += (mouseX - currentX) * 0.07;
  currentY += (mouseY - currentY) * 0.07;
  const scrollOffset = window.scrollY * -0.12;
  band.style.transform = `rotate(-22deg) translate3d(${currentX}px, ${currentY + scrollOffset}px, 0)`;
  requestAnimationFrame(animate);
}
animate();
