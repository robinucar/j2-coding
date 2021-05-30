const btnContinue = document.querySelectorAll('.btn--continue');
const btnConfirm = document.querySelectorAll('.btn--confirm');
const modalConfirm = document.querySelectorAll('.modal__confirmation');
const modalClose = document.querySelectorAll('.modal__confirmation--close');

//open modal confirmation box by click continue button
btnContinue.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalConfirm.forEach((modal) => {
      modal.classList.add('modal__confirmation--active');
    });
  });
});

//close modal confirmation box by click X icon
modalClose.forEach((item) => {
  item.addEventListener('click', () => {
    modalConfirm.forEach((modal) => {
      modal.classList.remove('modal__confirmation--active');
    });
  });
});

//close modal confirmation box by click confirm button
btnConfirm.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalConfirm.forEach((modal) => {
      modal.classList.remove('modal__confirmation--active');
    });
  });
});
