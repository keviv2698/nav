$(document).ready(function() {
    $.each($('.tabwrapper .tabmenu ul.nav li'), function(i) {
        $(this).attr('data-tab', i);
    });
    $.each($('.tabwrapper .tabcontent .tabs'), function(i) {
        $(this).attr('data-tab', i);
    });
    $('.tabwrapper .tabmenu ul.nav li a').click(function() {
        var parent = $(this).parent(),
            dataId = parent.data('tab');
        if (!parent.hasClass('active')) {
            $('.tabwrapper .tabmenu ul.nav li').removeClass('active');
            parent.addClass('active');
            $('.tabwrapper .tabcontent .tabs').hide();
            $('.tabwrapper .tabcontent .tabs[data-tab="' + dataId + '"]').fadeIn();
        }
    });
});
