var annoyChance = 50;

function annoy() {
    var trollVideo = ["https://www.youtube.com/embed/ZN5PoW7_kdA?start=5&autoplay=1", "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", "https://www.youtube.com/embed/2Z4m4lnjxkY?autoplay=1", "https://www.youtube.com/embed/0XrRwruU8DE?autoplay=1", "https://www.youtube.com/embed/QH2-TGUlwu4?start=3&autoplay=1","https://www.youtube.com/embed/ZZ5LpwO-An4?autoplay=1"];

    $('video').attr('id', 'false');
    $('video').html("");

    var width = $('video').attr("width");
    var height = $('video').attr("height");
    var randVal = Math.floor((Math.random() * 6) + 1);

    $('video').each(function () {
        $(this).replaceWith('<iframe src="' + trollVideo[randVal - 1] + '" frameborder="0" allowfullscreen style="width:' + width + 'px;height:' + height + 'px;"></iframe>');
    });
}

var randVal = Math.floor((Math.random() * 100) + 1);
if (randVal < annoyChance) {
    annoy();
}