const LINKS = {
  discord:  "https://discord.gg/7TU3B7VkW",
  youtube:  "https://youtube.com/@yamazakiclanforever?si=Uf0tqG778jk2pfGZ",
  tiktok:   "https://www.tiktok.com/@yamazaki.comunity?_r=1&_t=ZS-9AclBv61kn6",
  whatsapp: "https://chat.whatsapp.com/DYXiVgTY7fpGqp35hmJSFz"
};

const $ = s => [...document.querySelectorAll(s)];

function toast(m){
  const t = document.getElementById('t');
  t.textContent = m;
  t.classList.add('s');
  setTimeout(() => t.classList.remove('s'), 1800);
}

$('[data-k]').forEach(a => {
  const u = LINKS[a.dataset.k];
  if (u) { a.href = u; a.target = '_blank'; a.rel = 'noopener'; }
  else { a.href = '#'; a.onclick = e => { e.preventDefault(); toast('Link ' + a.dataset.k + ' belum diisi'); }; }
});

const pages = $('.page'), navs = $('nav a');
function go(){
  const h = (location.hash || '#home').slice(1);
  const id = pages.some(p => p.id === h) ? h : 'home';
  pages.forEach(p => p.hidden = p.id !== id);
  navs.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + id));
  scrollTo(0, 0);
}
addEventListener('hashchange', go);
go();