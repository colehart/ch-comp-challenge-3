$('.js-admin, .js-main').on('click', toggleActive);
$('.js-icon-group').on('click', toggleCheck);

function toggleActive(event) {
  toggleSibs(event);
  $(event.currentTarget).toggleClass('active-group');
};

function toggleCheck(event) {
  $(event.currentTarget).find('i').toggleClass('fa-square');
};

function toggleSibs(event) {
  var activeSibs = $(event.currentTarget).parent().children().filter(function(sib) {
    return $(this).hasClass('active-group');
  });

  if (activeSibs.length) {
    activeSibs.each(function(index) {
      $(this).toggleClass('active-group');
    });
  };
};