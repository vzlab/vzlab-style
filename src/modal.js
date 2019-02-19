const body = document.querySelector('body');
const modal = [...document.querySelectorAll('.vz-modal')];
const closeModalButton = [...document.querySelectorAll('[data-dismiss]')];

const closeModal = (e) => {
  modal.map(item => {
    body.style.overflow = 'auto';
    item.style.display = 'none';
  })
}

const openModal = (e) => {
  modal.map(item => {
    if (e.target.dataset.target === item.id) {
      body.style.overflow = 'hidden';
      item.style.display = 'block';
    }
  });

  return;
}

const handleKeyInput = (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
}

document.addEventListener('click', openModal);
document.addEventListener('keydown', handleKeyInput);

closeModalButton.map(button => {
  button.addEventListener('click', closeModal);
});
