$(document).ready(function(){
    $('#checkbox').click(function(){
        if ($(this).is(':checked')){
            $('#cuy').attr('type','text');
        }else{
            $('#cuy').attr('type','password');
        }
    })
})