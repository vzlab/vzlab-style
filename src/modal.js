const body = document.querySelector('body');
const modal = document.querySelector('.vz-modal');
const btnModal = document.querySelector('#btn-modal');
const closeModalButton = document.querySelector('.vz-modal--close');

const closeModal = (e) => {
  body.style.overflow = 'auto';
  modal.style.display = 'none';
}

const openModal = (e) => {
  if (e.target.dataset.target === modal.id) {
    body.style.overflow = 'hidden';
    modal.style.display = 'block';
  }
}

btnModal.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
