const canvas = document.querySelector<HTMLCanvasElement>('#silicon-world');
const chapters = [...document.querySelectorAll<HTMLElement>('[data-scene]')];
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

if (canvas) {
  const context = canvas.getContext('2d', { alpha: false });
  let width = 1;
  let height = 1;
  let dpr = 1;
  let scroll = 0;
  let targetScroll = 0;
  let pointerX = 0;
  let pointerY = 0;
  let frame = 0;

  const palettes = [
    ['#080a0b', '#15191a', '#9d5f22'],
    ['#090c0d', '#1b2021', '#bb7427'],
    ['#0b0e0f', '#292f30', '#d18a37'],
    ['#101314', '#343a3b', '#dca35e'],
    ['#15191a', '#4a5050', '#f0c58f'],
  ];

  const hex = (value: string) => [1, 3, 5].map(i => Number.parseInt(value.slice(i, i + 2), 16));
  const colour = (a: string, b: string, t: number) => {
    const aa = hex(a); const bb = hex(b);
    return `rgb(${aa.map((v, i) => Math.round(v + (bb[i] - v) * t)).join(',')})`;
  };
  const mixPalette = (position: number) => {
    const low = Math.min(palettes.length - 1, Math.floor(position));
    const high = Math.min(palettes.length - 1, low + 1);
    const t = position - low;
    return palettes[low].map((value, i) => colour(value, palettes[high][i], t));
  };

  function resize() {
    if (!canvas || !context) return;
    dpr = Math.min(2, window.devicePixelRatio || 1);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function ridge(y: number, amplitude: number, offset: number, fill: string, stroke: string) {
    if (!context) return;
    context.beginPath();
    context.moveTo(-40, height + 10);
    context.lineTo(-40, y);
    for (let x = -40; x <= width + 80; x += 36) {
      const wave = Math.sin(x * 0.006 + offset) * amplitude + Math.sin(x * 0.013 + offset * 1.7) * amplitude * 0.26;
      context.lineTo(x, y + wave);
    }
    context.lineTo(width + 40, height + 10);
    context.closePath();
    context.fillStyle = fill;
    context.fill();
    context.strokeStyle = stroke;
    context.lineWidth = 1;
    context.stroke();
  }

  function traces(scene: number, time: number) {
    if (!context) return;
    const baseY = height * 0.72;
    context.save();
    context.globalCompositeOperation = 'screen';
    for (let i = 0; i < 11; i++) {
      const y = baseY + i * 13 + Math.sin(i * 1.8 + scene) * 5;
      const start = ((i * 173 + scene * 91) % (width + 300)) - 120;
      context.beginPath();
      context.moveTo(start, y);
      context.lineTo(start + 115, y);
      context.lineTo(start + 142, y - 20);
      context.lineTo(start + 310, y - 20);
      context.strokeStyle = i % 3 === 0 ? 'rgba(224,147,57,.48)' : 'rgba(133,143,141,.19)';
      context.lineWidth = i % 3 === 0 ? 1.5 : 1;
      context.stroke();
      if (!reduced.matches && i % 3 === 0) {
        const progress = (time * 0.00011 + i * 0.19) % 1;
        const x = start + progress * 310;
        context.fillStyle = 'rgba(255,188,94,.9)';
        context.beginPath(); context.arc(x, y - (progress > .37 ? 20 : 0), 2.2, 0, Math.PI * 2); context.fill();
      }
    }
    context.restore();
  }

  function packages(scene: number) {
    if (!context) return;
    const count = width < 700 ? 3 : 6;
    for (let i = 0; i < count; i++) {
      const x = ((i * 271 + scene * 113) % (width + 240)) - 100;
      const y = height * (0.67 + (i % 3) * 0.08);
      const size = 22 + (i % 2) * 11;
      context.save();
      context.translate(x, y);
      context.transform(1, -.28, 0, 1, 0, 0);
      context.fillStyle = i % 2 ? '#1b1f20' : '#252a2a';
      context.strokeStyle = 'rgba(213,151,74,.28)';
      context.fillRect(-size, -size * .55, size * 2, size * 1.1);
      context.strokeRect(-size, -size * .55, size * 2, size * 1.1);
      context.restore();
    }
  }

  function draw(time = 0) {
    if (!context) return;
    targetScroll = Math.max(0, Math.min(chapters.length - 1, window.scrollY / Math.max(1, document.documentElement.scrollHeight - height) * (chapters.length - 1)));
    scroll += (targetScroll - scroll) * (reduced.matches ? 1 : .045);
    const [top, middle, amber] = mixPalette(scroll);
    const sky = context.createLinearGradient(0, 0, 0, height);
    sky.addColorStop(0, top); sky.addColorStop(.56, middle); sky.addColorStop(1, amber);
    context.fillStyle = sky; context.fillRect(0, 0, width, height);

    const glow = context.createRadialGradient(width * (.62 + pointerX * .025), height * .58, 5, width * .62, height * .58, width * .52);
    glow.addColorStop(0, 'rgba(207,126,43,.24)'); glow.addColorStop(1, 'rgba(207,126,43,0)');
    context.fillStyle = glow; context.fillRect(0, 0, width, height);

    ridge(height * .62 + pointerY * 5, 70, 1.2 + scroll * .7, 'rgba(24,29,30,.83)', 'rgba(119,129,128,.14)');
    ridge(height * .7 + pointerY * 9, 96, 2.9 + scroll * .82, 'rgba(13,17,18,.96)', 'rgba(210,135,52,.3)');
    packages(Math.round(scroll));
    traces(Math.round(scroll), time);

    // Small engineer silhouette: atmosphere only; all content remains in the DOM.
    const travelerX = width * (.56 + Math.sin(scroll * 1.4) * .12);
    const travelerY = height * .62 - 34;
    context.fillStyle = '#050606';
    context.beginPath(); context.arc(travelerX, travelerY, 4.5, 0, Math.PI * 2); context.fill();
    context.fillRect(travelerX - 3, travelerY + 4, 6, 18);
    context.beginPath(); context.moveTo(travelerX - 2, travelerY + 20); context.lineTo(travelerX - 7, travelerY + 31); context.lineTo(travelerX - 4, travelerY + 32); context.lineTo(travelerX + 1, travelerY + 22); context.fill();
    context.beginPath(); context.moveTo(travelerX + 2, travelerY + 20); context.lineTo(travelerX + 7, travelerY + 31); context.lineTo(travelerX + 4, travelerY + 32); context.lineTo(travelerX - 1, travelerY + 22); context.fill();

    frame = window.requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', event => {
    pointerX = event.clientX / Math.max(1, width) - .5;
    pointerY = event.clientY / Math.max(1, height) - .5;
  }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) window.cancelAnimationFrame(frame);
    else frame = window.requestAnimationFrame(draw);
  });
  frame = window.requestAnimationFrame(draw);
}

const observer = new IntersectionObserver(entries => {
  for (const entry of entries) if (entry.isIntersecting) entry.target.classList.add('visible');
}, { threshold: .16 });
document.querySelectorAll('.reveal').forEach(node => observer.observe(node));
