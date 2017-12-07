$(document).ready(function() {
    var colorCode = randomColor();
    changeText(colorCode);
    changeBackgroundColor(colorCode);


    function randomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeBackgroundColor(color) {
        $(".wrapper").css("background-color", color);
    }

    function changeText(color) {
        $('#color').text(colorCode);
    }
});

