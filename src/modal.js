const body = document.querySelector('body');
const modal = [...document.querySelectorAll('.vz-modal')];
const closeModalButton = [...document.querySelectorAll('[data-dismiss]')];

const closeModal = (e) => {
  modal.map(target => {
    body.style.overflow = 'auto';
    target.style.display = 'none';
  })
}

const openModal = (e) => {
  modal.map(target => {
    if (e.target.dataset.target === target.id) {
      body.style.overflow = 'hidden';
      target.style.display = 'block';
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
