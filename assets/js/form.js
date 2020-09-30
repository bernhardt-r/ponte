$('#nameInput').on('focus', function(){
    $(this).prev('label').addClass('opone');
    $(this).removeAttr('placeholder');
});

$('#emailInput').on('focus', function(){
    $(this).prev('label').addClass('opone');
    $(this).removeAttr('placeholder');
});

$('#messageTextarea').on('focus', function(){
    $(this).prev('label').addClass('opone');
    $(this).removeAttr('placeholder');
});
$('#messageTextarea').keyup(function() {
  $('#remainChars').text(200 - $(this).val().length);
});