

$(function() {
    $("#myHover").hover(
        function() {
            $(this).attr("src", "simon-says.gif");
        },
        function() {
            $(this).attr("src", "simonsays.png");
        }
    );
});
