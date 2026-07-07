// === MATRIX RAIN ===
const canvas = document.getElementById('matrix-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width, height, columns, drops;

  function initCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / 14);
    drops = Array(columns).fill(1);
  }

  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789<>/{}[]|&^%$#@!';

  function draw() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#FFB800';
    ctx.font = '14px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * 14, drops[i] * 14);
      if (drops[i] * 14 > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  initCanvas();
  setInterval(draw, 45);
  window.addEventListener('resize', initCanvas);
}

// === TYPEWRITER EFFECT ===
const typewriterEl = document.getElementById('typewriter');
if (typewriterEl) {
  const phrases = [
    'Full-Stack Developer × Graphic Designer × Logo Specialist',
    'Node.js || API Automation || Brand Identity',
    'IT Support | Hardware & Software Diagnosis',
    'I build systems. I craft identities. I solve problems.'
  ];
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let speed = 50;

  function typeEffect() {
    const current = phrases[phraseIdx];
    if (!isDeleting) {
      typewriterEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        isDeleting = true;
        speed = 2000;
        setTimeout(typeEffect, speed);
        return;
      }
      speed = 40 + Math.random() * 40;
    } else {
      typewriterEl.textContent = current.substring(0, charIdx);
      charIdx--;
      if (charIdx < 0) {
        isDeleting = false;
        charIdx = 0;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        speed = 500;
      } else {
        speed = 20;
      }
    }
    setTimeout(typeEffect, speed);
  }

  setTimeout(typeEffect, 1000);
}
