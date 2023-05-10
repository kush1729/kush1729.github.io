// add bootstrap classes to tables
$(document).ready(function() {
  $('table').each(function() {
    // make table use bootstrap-table
    $(this).attr('data-toggle','table');
    // add some classes to make the table look better
    // $(this).addClass('table-sm');
    $(this).addClass('table-hover');

    if (document.documentElement.getAttribute("data-theme") == "dark") {
      $(this).addClass('table-dark');
    } else {
      $(this).removeClass('table-dark');
    }
  })
});

