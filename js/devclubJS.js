
//add new js functions here

//navbar - collapse on click fix
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

//navbar - collapse when clicking outside menu
$(document).click(function(e) {
    if (!$(e.target).is('a')) {
        $('.collapse.in').collapse('hide');
    }
});