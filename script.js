// --- Theme toggle + persist ---
function toggleMode(){
  const body = document.body;
  body.classList.toggle('light-mode');
  localStorage.setItem('mixnest-theme', body.classList.contains('light-mode') ? 'light' : 'dark');
}
(function initTheme(){
  const saved = localStorage.getItem('mixnest-theme');
  if(saved === 'light'){ document.body.classList.add('light-mode'); }
})();

// --- Mobile nav toggle ---
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(btn && links){
    btn.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Active nav link
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if(a.getAttribute('href') === here){ a.classList.add('active'); }
  });

  // Back to top
  const topLink = document.getElementById('to-top');
  if(topLink){ topLink.addEventListener('click', e => { e.preventDefault(); scrollTo({top:0, behavior:'smooth'}); }); }

  // Footer year
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }

  // Inject schedule data if present
  const grid = document.getElementById('schedule-grid');
  if(grid){
    const schedule = [
      {day:'Monday', time:'6:00 PM', show:'Lo‑Fi Lounge', host:'DJ Echo'},
      {day:'Tuesday', time:'8:00 PM', show:'Retro Rewind', host:'NeonBoi'},
      {day:'Wednesday', time:'7:00 PM', show:'D&B Sessions', host:'PulseKit'},
      {day:'Thursday', time:'9:00 PM', show:'Chillhop Nights', host:'DJ Echo'},
      {day:'Friday', time:'10:00 PM', show:'The Weekend Drop', host:'Rotation'},
      {day:'Saturday', time:'All Day', show:'Open Format', host:'Guests'},
      {day:'Sunday', time:'7:00 PM', show:'Ambient Air', host:'Rotation'}
    ];
    grid.innerHTML = schedule.map(s => `
      <div class="schedule-item">
        <h3>${s.show}</h3>
        <p class="time">${s.day} • ${s.time}</p>
        <p class="host">Host: ${s.host}</p>
      </div>
    `).join('');
  }

  // Simulated Now Playing (placeholder demo)
  const titles = [
    {title:'Synthwave Dreams', artist:'NeonBoi', duration: 210},
    {title:'Night Drive 84', artist:'DJ Echo', duration: 198},
    {title:'Liquid Lines', artist:'PulseKit', duration: 228},
  ];
  let idx = 0, start = Date.now();
  const titleEl = document.getElementById('np-title');
  const artistEl = document.getElementById('np-artist');
  const progEl = document.getElementById('np-progress');
  const elapEl = document.getElementById('np-elapsed');
  const durEl = document.getElementById('np-duration');

  function renderTrack(){
    const t = titles[idx % titles.length];
    if(!t || !titleEl) return;
    titleEl.textContent = t.title;
    artistEl.textContent = t.artist;
    durEl.textContent = toTime(t.duration);
  }
  function toTime(s){ const m = Math.floor(s/60), sec = s%60; return `${m}:${sec.toString().padStart(2,'0')}`; }
  function tick(){
    const t = titles[idx % titles.length];
    if(!t || !progEl) return;
    const elapsed = Math.floor((Date.now() - start)/1000);
    if(elapsed >= t.duration){ idx++; start = Date.now(); renderTrack(); return; }
    const pct = (elapsed / t.duration) * 100;
    progEl.style.width = `${pct}%`;
    if(elapEl) elapEl.textContent = toTime(elapsed);
    requestAnimationFrame(tick);
  }
  renderTrack(); requestAnimationFrame(tick);
});

// Optional: You can replace the simulated Now Playing with your radio server's metadata API.
