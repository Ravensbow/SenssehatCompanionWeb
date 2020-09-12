let isActive_img=false;
$(document).ready(function () {
    let imageAll = $('img');
    let currentimg=null;
    let content = $('.wrapper')


    if(imageAll.length>0)
        currentimg=0;
    imageAll.each(function () {
        console.log($(this).attr('src'));
    });
    $(imageAll).click(function () {
        delte_full_img();
        console.log('siema');
        currentimg= $(this).attr('src');

        $.get("szablony/full_foto.html", function (data) {
            $(content).prepend(data);
            $("#full_image").children().attr('src',currentimg);
        });

        $('div').not('#full_image').not('.wrapper').addClass('hide');
    })
});

function delte_full_img()
{
    $("#full_image").remove();
}
$(document).mouseup(function (e) {
    if ($(e.target).closest("#full_image").length === 0) {
        $('div').removeClass('hide');
        delte_full_img();
    }
});