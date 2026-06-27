/* ============================================
   BIRTHDAY — SCRIPT.JS
   Stars · Elegant Balloons · Confetti (on demand)
   Candles · Flip · Envelope · Scroll Reveal
   ============================================ */

// ════════════════════════════════════════
// 1. STARFIELD — subtle slow twinkling
// ════════════════════════════════════════
const starCanvas = document.getElementById('starCanvas');
const sctx = starCanvas.getContext('2d');

function resizeStar() {
  starCanvas.width  = window.innerWidth;
  starCanvas.height = window.innerHeight;
}
resizeStar();

const stars = Array.from({ length: 120 }, () => ({
  x:      Math.random() * window.innerWidth,
  y:      Math.random() * window.innerHeight,
  r:      Math.random() * 1.3 + 0.2,
  alpha:  Math.random(),
  dA:     (Math.random() * 0.0035 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
  speed:  Math.random() * 0.05 + 0.008,
}));

function drawStars() {
  sctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
  stars.forEach(s => {
    s.alpha += s.dA;
    if (s.alpha > 1 || s.alpha < 0) s.dA *= -1;
    s.y -= s.speed;
    if (s.y < -5) { s.y = starCanvas.height + 5; s.x = Math.random() * starCanvas.width; }
    sctx.beginPath();
    sctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    sctx.fillStyle = `rgba(255,238,252,${Math.max(0, s.alpha)})`;
    sctx.fill();
  });
  requestAnimationFrame(drawStars);
}
drawStars();

// ════════════════════════════════════════
// 2. ELEGANT BALLOON CANVAS (max 4, very slow)
// ════════════════════════════════════════
const balloonCanvas = document.getElementById('balloonCanvas');
const bctx = balloonCanvas.getContext('2d');

function resizeBalloon() {
  balloonCanvas.width  = window.innerWidth;
  balloonCanvas.height = window.innerHeight;
}
resizeBalloon();

const PALETTES = [
  { body:'#f48fb1', shine:'#fff0f5', string:'#c2185b' },  // baby pink
  { body:'#e91e8c', shine:'#fce4ec', string:'#880e4f' },  // hot pink
  { body:'#f8bbd0', shine:'#ffffff', string:'#e91e8c' },  // soft rose
  { body:'#ff80ab', shine:'#fce4ec', string:'#c2185b' },  // coral pink
  { body:'#ce93d8', shine:'#f3e5f5', string:'#7b1fa2' },  // lilac
  { body:'#f06292', shine:'#fce4ec', string:'#ad1457' },  // deep rose
  { body:'#f8a5c6', shine:'#fff5f8', string:'#e91e8c' },  // blush
];

const bImgs = [
  'images/6af2ca7209499cdcd28d8f5e6541d460_0.jpeg',
  'images/b5cb65ff55b79d316dcde71e1e102ae6_1732636605767_0.webp.webp',
  'images/d94450cc0451f1083e9558c76b227cf3_0.jpeg',
  'images/f79432f0b2b1af3a998b8be4ed1ae8b4_0.jpeg',
  'images/IMG20240823184135.jpg',
  'images/IMG20241118161908.jpg',
  'images/IMG20241125154412.jpg',
  'images/IMG20241207125354.jpg',
  'images/IMG20241217140323.jpg',
  'images/IMG20250217145157.jpg',
  'images/IMG20250217145224.jpg',
  'images/IMG20250406180726.jpg',
  'images/IMG20250419131047.jpg',
  'images/IMG20250602183843.jpg',
  'images/WhatsApp Image 2026-06-26 at 11.35.26 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.35.54 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.35.54 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.35.55 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.35.55 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.35.56 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.35.57 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.35.57 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.35.58 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.35.58 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.35.59 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.00 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.00 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.01 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.01 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.02 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.03 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.03 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.04 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.05 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.06 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.06 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.07 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.07 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.08 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.09 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.09 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.10 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.10 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.11 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.11 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.13 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.13 PM (2).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.13 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.14 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.14 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.15 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.15 PM (2).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.15 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.16 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.16 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.17 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.17 PM (2).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.17 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.18 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.18 PM (2).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.18 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.19 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.19 PM (2).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.19 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.20 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.20 PM (2).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.20 PM (3).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.20 PM (4).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.20 PM (5).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.20 PM.jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.21 PM (1).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.21 PM (2).jpeg',
  'images/WhatsApp Image 2026-06-26 at 11.36.21 PM.jpeg'
].map(src => {
  const i = new Image(); i.src = src; return i;
});

class Balloon {
  constructor(startMid = false) {
    const p = PALETTES[Math.floor(Math.random() * PALETTES.length)];
    this.p      = p;
    this.r      = 34 + Math.random() * 22;
    this.x      = Math.random() * balloonCanvas.width;
    this.y      = startMid
                  ? balloonCanvas.height * (0.25 + Math.random() * 0.55)
                  : balloonCanvas.height + 100;
    this.speedY = 0.22 + Math.random() * 0.25;
    this.wob    = Math.random() * Math.PI * 2;
    this.wobF   = 0.005 + Math.random() * 0.006;
    this.wobA   = 10 + Math.random() * 14;
    this.opacity= startMid ? 0.5 : 0;
    this.fadeIn = true;
    this.strLen = this.r * 3.3;
    this.img    = bImgs[Math.floor(Math.random() * bImgs.length)];
  }
  update() {
    this.y   -= this.speedY;
    this.wob += this.wobF;
    this.x   += Math.sin(this.wob) * 0.35;
    if (this.fadeIn && this.opacity < 0.7) this.opacity += 0.005;
    if (this.y < balloonCanvas.height * 0.12) this.opacity -= 0.005;
  }
  draw() {
    bctx.save();
    bctx.globalAlpha = Math.max(0, this.opacity);
    const { x, y, r } = this;

    // Shadow
    bctx.shadowColor = 'rgba(0,0,0,.28)';
    bctx.shadowBlur  = 14; bctx.shadowOffsetY = 7;

    // Body Path
    bctx.beginPath();
    bctx.save(); bctx.translate(x, y); bctx.scale(1, 1.22);
    bctx.arc(0, 0, r, 0, Math.PI * 2); bctx.restore();

    // Body Gradient
    const g = bctx.createRadialGradient(x - r*.32, y - r*.38, r*.06, x, y, r*1.1);
    g.addColorStop(0,   this.p.shine);
    g.addColorStop(.44, this.p.body);
    g.addColorStop(1,   'rgba(0,0,0,.2)');
    bctx.fillStyle = g; bctx.fill();
    
    bctx.save();
    bctx.clip(); // clips to the body path we just drew
    if (this.img && this.img.complete && this.img.width > 0) {
      const iw = this.img.width, ih = this.img.height;
      // Use contain so the full image is visible
      const scale = Math.min((r*1.75) / iw, (r*1.22*1.85) / ih);
      const dw = iw * scale, dh = ih * scale;
      bctx.globalAlpha = Math.max(0, this.opacity);
      // Optional subtle shadow behind the image inside the balloon
      bctx.shadowColor = 'rgba(0,0,0,0.4)';
      bctx.shadowBlur = 8;
      bctx.drawImage(this.img, x - dw/2, y - dh/2, dw, dh);
    }
    bctx.restore();

    // Reset shadow
    bctx.shadowColor = 'transparent'; bctx.shadowBlur = 0; bctx.shadowOffsetY = 0;

    // Shine
    bctx.beginPath();
    bctx.save(); bctx.translate(x - r*.3, y - r*.34); bctx.scale(1,.56);
    bctx.arc(0, 0, r*.26, 0, Math.PI * 2); bctx.restore();
    bctx.fillStyle = 'rgba(255,255,255,.48)'; bctx.fill();

    // Knot
    const ky = y + r*1.22 + 2;
    bctx.beginPath();
    bctx.moveTo(x-3, ky);
    bctx.bezierCurveTo(x-5, ky+5, x+5, ky+5, x+3, ky);
    bctx.closePath(); bctx.fillStyle = this.p.string; bctx.fill();

    // String
    bctx.beginPath(); bctx.moveTo(x, ky+4);
    bctx.quadraticCurveTo(
      x + Math.sin(this.wob*1.8)*9, ky + this.strLen*.55,
      x + Math.sin(this.wob)*5,     ky + this.strLen
    );
    bctx.strokeStyle = this.p.string; bctx.lineWidth = 1.1;
    bctx.globalAlpha = this.opacity * .48; bctx.stroke();
    bctx.restore();
  }
  isDead() { return this.y < -this.r * 2 || (this.opacity <= 0 && this.y < balloonCanvas.height * .12); }
}

let balloons = [];
let lastBalloonTs = 0;
for (let i = 0; i < 12; i++) balloons.push(new Balloon(true));

function animateBalloons(ts) {
  bctx.clearRect(0, 0, balloonCanvas.width, balloonCanvas.height);
  if (ts - lastBalloonTs > 1000 && balloons.length < 20) {
    balloons.push(new Balloon());
    lastBalloonTs = ts;
  }
  balloons = balloons.filter(b => !b.isDead());
  balloons.forEach(b => { b.update(); b.draw(); });
  requestAnimationFrame(animateBalloons);
}
requestAnimationFrame(animateBalloons);

// ════════════════════════════════════════
// 3. CONFETTI — ON DEMAND ONLY
// ════════════════════════════════════════
const confettiCanvas = document.getElementById('confettiCanvas');
const cctx = confettiCanvas.getContext('2d');

function resizeConfetti() {
  confettiCanvas.width  = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
resizeConfetti();

let cParticles = [];
const C_COLS = ['#e91e8c','#f48fb1','#ffd700','#ce93d8','#ff80ab','#ffe082','#c2185b','#fff'];

class CParticle {
  constructor(ox, oy) {
    this.x    = ox ?? Math.random() * confettiCanvas.width;
    this.y    = oy ?? -10;
    this.vx   = (Math.random() - .5) * 9;
    this.vy   = Math.random() * 5 + 1.5;
    this.r    = Math.random() * 5 + 3;
    this.color= C_COLS[Math.floor(Math.random() * C_COLS.length)];
    this.alpha= 1;
    this.rot  = Math.random() * 360;
    this.rSpd = (Math.random() - .5) * 7;
    this.wob  = 0;
    this.dead = false;
  }
  update() {
    this.wob += .04;
    this.x  += this.vx + Math.sin(this.wob) * 1.1;
    this.y  += this.vy;
    this.vy += .07;
    this.rot += this.rSpd;
    if (this.y > confettiCanvas.height + 20) { this.alpha -= .1; }
    if (this.alpha <= 0) this.dead = true;
  }
  draw() {
    cctx.save();
    cctx.globalAlpha = this.alpha;
    cctx.translate(this.x, this.y);
    cctx.rotate(this.rot * Math.PI / 180);
    cctx.fillStyle = this.color;
    cctx.fillRect(-this.r, -this.r/2, this.r*2, this.r);
    cctx.restore();
  }
}

let cRunning = false;
window.burstConfetti = function(x, y, count = 45) {
  for (let i = 0; i < count; i++) cParticles.push(new CParticle(x, y));
  if (!cRunning) {
    cRunning = true;
    (function loop() {
      cctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      cParticles = cParticles.filter(p => !p.dead);
      cParticles.forEach(p => { p.update(); p.draw(); });
      if (cParticles.length) requestAnimationFrame(loop);
      else { cRunning = false; cctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height); }
    })();
  }
};

// ════════════════════════════════════════
// 4. LETTER ANIMATION — opener title
// ════════════════════════════════════════
(function initLetters() {
  const wrapper = document.querySelector('.letter-wrap');
  if (!wrapper) return;
  const words = ['كل', 'سنة', 'وانتي', 'طيبة', 'يا', 'تبروكتي', '🎀'];
  let html = '';
  words.forEach((w, i) => {
    const delay = (0.85 + i * 0.18).toFixed(2);
    html += `<span class="letter-char" style="animation-delay:${delay}s">${w}</span>`;
    if (i < words.length - 1) html += '&nbsp;';
  });
  wrapper.innerHTML = html;

  const lastDelay = 0.85 + words.length * 0.18 + 0.5;
  setTimeout(() => {
    const cue = document.getElementById('scrollCue');
    if (cue) cue.style.opacity = '1';
  }, lastDelay * 1000);
})();

// ════════════════════════════════════════
// 5. ENVELOPE — click to open
// ════════════════════════════════════════
(function initEnvelope() {
  const wrap = document.getElementById('envelopeWrap');
  const env  = document.getElementById('envelope');
  const hint = document.getElementById('envHint');
  if (!wrap || !env) return;

  let opened = false;

  function openIt() {
    if (opened) return;
    opened = true;
    env.classList.add('open');
    hint.classList.add('hidden');

    // Confetti burst
    const rect = env.getBoundingClientRect();
    window.burstConfetti(rect.left + rect.width/2, rect.top + rect.height/3, 38);

    // Show scroll cue
    setTimeout(() => {
      const cue = document.getElementById('scrollCue');
      if (cue) cue.style.opacity = '1';
    }, 700);
  }

  wrap.addEventListener('click',   openIt);
  wrap.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openIt(); });
})();

// ════════════════════════════════════════
// 6. INTERACTIVE CANDLES
// ════════════════════════════════════════
(function initCandles() {
  const row  = document.getElementById('candlesRow');
  const popup= document.getElementById('wishPopup');
  if (!row) return;

  let blown = 0;
  let popupTimer;

  row.querySelectorAll('.candle').forEach(candle => {
    const flame = candle.querySelector('.candle-flame');
    const wish  = candle.dataset.wish;

    candle.addEventListener('click', () => {
      if (flame.classList.contains('blown')) return;
      flame.classList.add('blown');
      blown++;

      // Show wish popup
      clearTimeout(popupTimer);
      popup.textContent = wish;
      popup.classList.add('show');
      popupTimer = setTimeout(() => popup.classList.remove('show'), 2800);

      // Confetti
      const r = candle.getBoundingClientRect();
      window.burstConfetti(r.left + r.width/2, r.top, 28);

      // All blown
      if (blown === 5) {
        setTimeout(() => {
          popup.textContent = 'يارب نتجوز ونعيش مع بعض طول العمر ❤️';
          popup.classList.add('show');
          window.burstConfetti(window.innerWidth/2, window.innerHeight/3, 100);
        }, 500);
      }
    });
  });
})();

// ════════════════════════════════════════
// 7. FLIP CARDS
// ════════════════════════════════════════
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click',   () => card.classList.toggle('flipped'));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') card.classList.toggle('flipped');
  });
});

// ════════════════════════════════════════
// 8. SCROLL REVEAL
// ════════════════════════════════════════
function checkReveal() {
  document.querySelectorAll('.reveal-section').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * .84) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkReveal, { passive: true });
checkReveal();

// ════════════════════════════════════════
// 9. GRAND FINALE — FIREWORKS SPELLING "تبارك"
// ════════════════════════════════════════
const fwCanvas = document.getElementById('fireworksCanvas');
const fwCtx    = fwCanvas.getContext('2d');
function resizeFireworks() {
  fwCanvas.width  = window.innerWidth;
  fwCanvas.height = window.innerHeight;
}
resizeFireworks();

// Letter paths for Arabic name "تبارك" using particle dots
const NAME = 'تبارك';

const FW_COLORS = [
  '#e91e8c','#f48fb1','#ffd700','#ce93d8',
  '#ff80ab','#ffe082','#ffffff','#ff4081'
];

class FWParticle {
  constructor(tx, ty, delay) {
    this.tx    = tx;   // target x
    this.ty    = ty;   // target y
    this.delay = delay;
    this.x     = Math.random() * fwCanvas.width;
    this.y     = fwCanvas.height * (.7 + Math.random() * .3);
    this.color = FW_COLORS[Math.floor(Math.random() * FW_COLORS.length)];
    this.r     = Math.random() * 3 + 2;
    this.alpha = 0;
    this.t     = 0;
    this.done  = false;
  }
  update(now) {
    if (now < this.delay) return;
    this.t = Math.min(1, this.t + 0.022);
    const ease = 1 - Math.pow(1 - this.t, 3);
    this.x = this.x + (this.tx - this.x) * 0.06;
    this.y = this.y + (this.ty - this.y) * 0.06;
    this.alpha = Math.min(1, this.t * 3);
    if (this.t >= 1) {
      this.x = this.tx; this.y = this.ty;
      this.done = true;
    }
  }
  draw() {
    fwCtx.save();
    fwCtx.globalAlpha = this.alpha;
    fwCtx.beginPath();
    fwCtx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    fwCtx.fillStyle = this.color;
    fwCtx.shadowBlur  = 8;
    fwCtx.shadowColor = this.color;
    fwCtx.fill();
    fwCtx.restore();
  }
}

// Build particle positions from canvas text rendering
function buildNameParticles(name) {
  const offscreen = document.createElement('canvas');
  const W = Math.min(window.innerWidth * .85, 700);
  offscreen.width  = W;
  offscreen.height = 160;
  const oc = offscreen.getContext('2d');
  const fs  = Math.min(W / (name.length * 0.8), 110);
  oc.font = `900 ${fs}px Cairo, sans-serif`;
  oc.fillStyle = '#fff';
  oc.textAlign = 'center';
  oc.textBaseline = 'middle';
  oc.fillText(name, W/2, 80);

  const imgData = oc.getImageData(0, 0, W, 160).data;
  const points  = [];
  const step    = 5;
  for (let y = 0; y < 160; y += step) {
    for (let x = 0; x < W; x += step) {
      const i = (y * W + x) * 4;
      if (imgData[i + 3] > 120) {
        // Map offscreen coords to center of viewport
        const cx = (window.innerWidth  - W) / 2 + x;
        const cy = window.innerHeight  * 0.28 + (y - 80);
        points.push([cx, cy]);
      }
    }
  }
  return points;
}

let fwParticles = [];
let fwRunning   = false;
let fwStartTime = 0;

function runFireworks() {
  if (fwRunning) return;
  fwRunning   = true;
  fwStartTime = performance.now();

  const pts = buildNameParticles(NAME);
  // Randomly sample up to 600 points so it's not too heavy
  const sampled = pts.sort(() => Math.random() - .5).slice(0, 600);

  fwParticles = sampled.map((pt, i) =>
    new FWParticle(pt[0], pt[1], i * 2.5)   // stagger launch
  );

  // Stage 1: launch confetti before name appears
  [.15, .5, .85].forEach((rx, i) => {
    setTimeout(() => {
      window.burstConfetti(rx * window.innerWidth, window.innerHeight * .6, 40);
    }, i * 300);
  });

  const btn = document.getElementById('finaleBtn');
  if (btn) btn.textContent = '✨ مبروك يا تبارك!';

  let allDone = false;
  (function loop(now) {
    fwCtx.clearRect(0, 0, fwCanvas.width, fwCanvas.height);
    const elapsed = now - fwStartTime;
    fwParticles.forEach(p => { p.update(elapsed); p.draw(); });

    if (!allDone && fwParticles.every(p => p.done)) {
      allDone = true;
      // Hold name for 2.5s then fade out
      setTimeout(() => {
        let fadeAlpha = 1;
        (function fadeOut() {
          fwCtx.clearRect(0, 0, fwCanvas.width, fwCanvas.height);
          fadeAlpha -= 0.018;
          if (fadeAlpha > 0) {
            fwParticles.forEach(p => {
              fwCtx.save();
              fwCtx.globalAlpha = fadeAlpha;
              fwCtx.beginPath();
              fwCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
              fwCtx.fillStyle = p.color;
              fwCtx.fill();
              fwCtx.restore();
            });
            requestAnimationFrame(fadeOut);
          } else {
            fwCtx.clearRect(0, 0, fwCanvas.width, fwCanvas.height);
            fwRunning = false;
          }
        })();
      }, 2500);
      return; // stop main loop when done
    }

    if (!allDone) requestAnimationFrame(loop);
  })(fwStartTime);
}

window.grandFinale = function() {
  runFireworks();
};

// ════════════════════════════════════════
// 10. WISH BUBBLE LAUNCHER
// ════════════════════════════════════════
const BUBBLE_COLORS = [
  { bg:'rgba(233,30,140,0.18)', text:'#f8bbd0', glow:'rgba(233,30,140,0.5)' },
  { bg:'rgba(212,168,83,0.18)', text:'#ffe082', glow:'rgba(212,168,83,0.5)'  },
  { bg:'rgba(156,77,204,0.18)', text:'#e1bee7', glow:'rgba(156,77,204,0.5)' },
  { bg:'rgba(255,255,255,0.12)', text:'#ffffff', glow:'rgba(255,255,255,0.3)' },
];

window.launchWish = function() {
  const input = document.getElementById('wishInput');
  const text  = input.value.trim();
  if (!text) { input.focus(); return; }

  const container = document.getElementById('wishBubblesContainer');
  const col   = BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)];
  const size  = Math.max(120, Math.min(220, text.length * 5 + 100));
  const dur   = 5 + Math.random() * 3;
  const left  = 10 + Math.random() * 65;

  const bubble = document.createElement('div');
  bubble.className = 'wish-bubble';
  bubble.textContent = '💫 ' + text;
  bubble.style.cssText = `
    width:${size}px;
    min-height:${size}px;
    left:${left}%;
    font-size:${Math.max(12, 14 - Math.floor(text.length/10))}px;
    background:${col.bg};
    color:${col.text};
    box-shadow:0 0 18px ${col.glow}, inset 0 0 12px rgba(255,255,255,0.06);
    --dur:${dur}s;
  `;

  container.appendChild(bubble);
  input.value = '';
  input.focus();

  // Mini confetti at bubble start
  const rect = bubble.getBoundingClientRect();
  window.burstConfetti(rect.left + rect.width/2, rect.bottom, 20);

  setTimeout(() => bubble.remove(), dur * 1000 + 200);
};

// ════════════════════════════════════════
// 11. RESIZE HANDLER
// ════════════════════════════════════════
window.addEventListener('resize', () => {
  resizeStar();
  resizeBalloon();
  resizeConfetti();
  resizeFireworks();
  stars.forEach(s => {
    s.x = Math.random() * starCanvas.width;
    s.y = Math.random() * starCanvas.height;
  });
});
