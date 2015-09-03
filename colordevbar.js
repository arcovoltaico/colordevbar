
$('#bdevbar').on('click', function (e) {
    e.preventDefault();
    $('#devbar').toggleClass('hidden');
    if ($("#devbar").hasClass("hidden")) {
        $("#normal3")[0].beginElement();
        $("#normal4")[0].beginElement();
        $("#normal5")[0].beginElement();
        $("#normal2")[0].beginElement();
        $("#normal")[0].beginElement();
    } else {
        $("#red3")[0].beginElement();
        $("#red4")[0].beginElement();
        $("#red5")[0].beginElement();
        $("#red2")[0].beginElement();
        $("#red")[0].beginElement();
    }
});
