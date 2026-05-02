tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Courier Prime', 'monospace'],
      },
      colors: {
        // VARIAVEIS DE PALETA
        brandDark: 'black',   
        brandMid: '#0f172a',   
        brandBlue: '#242424',   
        brandAccent: '#3b82f6', 
      }
    }
  }
}


document.addEventListener("DOMContentLoaded", () => {
      const renderAlfabetoMorse = () => {
const morseData = {
  'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
  'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
  'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
  'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
  'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--', 'Z': '--..'
};

const container = document.getElementById('grid-alfabeto');


container.innerHTML = Object.entries(morseData).map(([letra, codigo]) => `
  <div class="flex justify-between items-center bg-black border-l-2 border-brandBlue p-3 rounded hover:translate-x-1 transition cursor-default group">
    <span class="font-bold text-lg text-white group-hover:text-brandAccent">${letra}</span>
    <span class="font-mono tracking-widest text-slate-400 group-hover:text-white">${codigo}</span>
  </div>
`).join('');
};


renderAlfabetoMorse();

    //FUNDO MORSE
    document.querySelectorAll('.background-morse').forEach( elemento => {

     const gemas = Array.from({ length: 5000 }, () => {
     const opcoes = ['.', '-', ' '];

     return opcoes[Math.floor(Math.random() * opcoes.length)];}).join('');

     elemento.insertAdjacentHTML('afterbegin', `<div class="fundo-morse">${gemas}</div>`);
    });

    // Lógica do Carrossel 
    const carrossel = document.getElementById('gallery-carrousel');
    const btnLeft = document.getElementById('btn-prev');
    const btnRight = document.getElementById('btn-next');

    function moverDireita() {
      
      let isMobile = window.innerWidth < 768;
      let gap = isMobile ? 16 : 24; 
      let tamanhoItem = carrossel.firstElementChild.clientWidth + gap;
      carrossel.scrollBy({ left: tamanhoItem, behavior: 'smooth' });
    }

    function moverEsquerda() {
      let isMobile = window.innerWidth < 768;
      let gap = isMobile ? 16 : 24;
      let tamanhoItem = carrossel.firstElementChild.clientWidth + gap;
      carrossel.scrollBy({ left: -tamanhoItem, behavior: 'smooth' });
    }

    btnRight.addEventListener('click', moverDireita);
    btnLeft.addEventListener('click', moverEsquerda);

    // Scroll automático 
    setInterval(() => {
      let fimDoCarrossel = carrossel.scrollWidth - carrossel.clientWidth - 10;
      if (carrossel.scrollLeft >= fimDoCarrossel) {
        carrossel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        moverDireita();
      }
    }, 8000);
    
  });
  // --- 2. LÓGICA DO CARROSSEL DO HERO ---
const heroC = document.getElementById('hero-carousel');


const scrollHero = (direction) => {
  // Calculamos a largura visível do container para o pulo exato
  const scrollAmount = heroC.clientWidth; 
  heroC.scrollBy({
    left: direction === 'next' ? scrollAmount : -scrollAmount,
    behavior: 'smooth'
  });
};

// Autoplay para o Hero (opcional - a cada 5 segundos)
setInterval(() => {
  if (heroC.scrollLeft + heroC.clientWidth >= heroC.scrollWidth - 10) {
    heroC.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    scrollHero('next');
  }
}, 5000);



