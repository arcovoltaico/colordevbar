$ (document).ready(function(){ 
        $('#bdevbar').on('click', function (e) {
        e.preventDefault();
        $('#devbar').toggleClass('hidden');
        if ($("#devbar").hasClass("hidden")) {
            for (i=1; i<6;i++) {
                $("#normal"+i)[0].beginElement();
            }
        } else {
            for (i=1; i<6;i++) {
                $("#red"+i)[0].beginElement();
            }
        }
       });
});







