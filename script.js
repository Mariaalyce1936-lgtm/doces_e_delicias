// FORMULÁRIO
document.getElementById('form-contato').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Mensagem enviada com sucesso! 😊');
  this.reset();
});

// MODAL
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescricao = document.getElementById('modal-descricao');
const fechar = document.getElementById('fechar');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalTitulo.textContent = card.dataset.title;
    modalDescricao.textContent = card.dataset.desc;
  });
});

fechar.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });

// VOLTAR AO TOPO
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  if(document.documentElement.scrollTop > 200){ topBtn.style.display = 'block'; }
  else { topBtn.style.display = 'none'; }
});
topBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// FADE-IN
const faders = document.querySelectorAll('.fade');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

faders.forEach(fader => observer.observe(fader));
