const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
if(menuBtn){
  menuBtn.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

const allSwitchers = document.querySelectorAll('.nav-link, .tab');
const panels = document.querySelectorAll('.panel');

function showPanel(id){
  panels.forEach(p => { p.hidden = (p.dataset.panel !== id); });
  allSwitchers.forEach(el => {
    const isMatch = el.dataset.target === id;
    el.classList.toggle('active', isMatch);
    el.classList.toggle('current', isMatch);
  });
  if(window.innerWidth <= 840){
    sidebar.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
  window.scrollTo({top:0, behavior:'instant'});
}

allSwitchers.forEach(el => {
  el.addEventListener('click', () => showPanel(el.dataset.target));
});

document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.getAttribute('aria-controls'));
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    target.hidden = isOpen;
    btn.querySelector('.btn-label').textContent = isOpen ? 'Show details' : 'Hide details';
  });
});