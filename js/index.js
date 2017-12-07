$(document).ready(function() {
    initColor();
    $(window).keypress(function (e) {
        if (e.keyCode === 0 || e.keyCode === 32) {
            e.preventDefault()
            initColor();
        }
    });

    function initColor() {
        var colorCode = randomColor();
        changeText(colorCode);
        changeBackgroundColor(colorCode);
        textColorForBackground(colorCode);
    }

    function randomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeBackgroundColor(color) {
        $('.wrapper').css("background-color", color);
    }

    function changeText(color) {
        var colorText = $('#color');
        var wrapper = $('.wrapper');
        var textColor = textColorForBackground(color);
        colorText.text(color);
        wrapper.css("color", textColor);
    }

    function textColorForBackground(bgColor) {
        var r = parseInt(bgColor.substr(1, 2), 16);
        var g = parseInt(bgColor.substr(3, 2), 16);
        var b = parseInt(bgColor.substr(5, 2), 16);
        var textColor = ((r*299)+(g*587)+(b*114))/1000;
        if (textColor >= 128)
            return "#222222";
        else
            return "#FFFFFF";
    }
});

