$('button.navbar-toggler').on('click', function(){
    if ( $(this).attr('aria-expanded') == 'false' ) {
        $(this).css('background-color', 'rgba(0,147,216,1)');
        $('li.dropdown').addClass('show');
        $('div.dropdown-menu').addClass('show');
        $('a.dropdown-toggle').attr('aria-expanded', 'true');
        $('dropdown-toggle::after').css('visibility', 'hidden!important');
    }
    else {
        $(this).css('background-color', 'rgba(0,147,216,0)');
    }
});