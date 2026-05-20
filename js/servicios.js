document.querySelectorAll('.faq-item').forEach(item => {

  const button =
    item.querySelector('.faq-question');

  button.addEventListener('click', () => {

    item.classList.toggle('active');

  });

});

