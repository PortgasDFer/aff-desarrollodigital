const themeToggle = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('aaf-theme');

if(savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('aaf-theme', newTheme);

    themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
    resetServiceCards();
    startVanta();
});


document.querySelectorAll('.service-card').forEach(card => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const isLight =
      document.body.getAttribute('data-theme') === 'light';

    card.style.background = isLight

      ? `radial-gradient(
          circle at ${x}px ${y}px,
          rgba(124,58,237,0.10),
          #ffffff 60%
        )`

      : `radial-gradient(
          circle at ${x}px ${y}px,
          rgba(124,58,237,0.12),
          #111115 60%
        )`;

  });

  card.addEventListener('mouseleave', () => {

    const isLight =
      document.body.getAttribute('data-theme') === 'light';

    card.style.background =
      isLight
        ? '#ffffff'
        : '#111115';

  });

});



function resetServiceCards() {

  const isLight =
    document.body.getAttribute('data-theme') === 'light';

  document.querySelectorAll('.service-card').forEach(card => {

    card.style.background =
      isLight
        ? '#ffffff'
        : '#111115';

  });

}




const menuToggle = document.getElementById("menuToggle"); const navLinks = document.getElementById("navLinks"); menuToggle.addEventListener("click", () => { navLinks.classList.toggle("active"); });






let vantaEffect;

function startVanta() {

  // detectar tema
  const isLight =
    document.body.getAttribute("data-theme") === "light";

  // destruir efecto anterior
  if (vantaEffect) {
    vantaEffect.destroy();
  }

  // crear efecto
  vantaEffect = VANTA.GLOBE({

    el: "#hero",

    mouseControls: true,
    touchControls: true,
    gyroControls: false,

    minHeight: 200.00,
    minWidth: 200.00,

    scale: 1.00,
    scaleMobile: 1.00,

    size: isLight ? 0.9 : 0.9,
    size: window.innerWidth < 768 ? 0.8 : 0.9,

backgroundColor:
  isLight
    ? 0xffffff
    : 0x07070a,

color:
  isLight
    ? 0xd8b4fe
    : 0xff2e88,


    points:isLight ? 5 : 10,
        maxDistance:18,
        spacing:20,

        showDots:true

  });
}

// iniciar
startVanta();