$('.js-icon-group').on('click', toggleCheck);

function toggleCheck(event) {
  $(event.currentTarget).find('i').toggleClass('fa-square');
};