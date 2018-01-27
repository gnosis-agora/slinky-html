//Width and height of video
var height;
var width;
var annoyChance = 50;

var trollVideo = ["https://www.youtube.com/embed/ZN5PoW7_kdA?start=5&autoplay=1", "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", "https://www.youtube.com/embed/2Z4m4lnjxkY?autoplay=1", "https://www.youtube.com/embed/0XrRwruU8DE?autoplay=1", "https://www.youtube.com/embed/QH2-TGUlwu4?start=3&autoplay=1","https://www.youtube.com/embed/ZZ5LpwO-An4?autoplay=1"];

function annoy() {
    var vids = document.getElementsByTagName('video')
        // vids is an HTMLCollection

    for (var i = 0; i < vids.length; i++) {
        //Alert the source of the video
        //alert(vids.item(i).src);
        if ((vids.item(i).style.height) != 0)
            height = (vids.item(i).style.height);
        if ((vids.item(i).style.width) != 0)
            width = (vids.item(i).style.width);
        vids.item(i).src = "";
    }

    try {
        document.getElementById("player").innerHTML = "";

        var randVal = Math.floor((Math.random() * 6) + 1);

        var player = document.getElementById("placeholder-player");
        player.innerHTML = '<iframe src="' + trollVideo[randVal - 1] + '" frameborder="0" allowfullscreen style="width:' + width + ';height:' + height + ';"></iframe>';
    } catch (err) {}
}

function testAnnoy(evt) {
    testedAnnoy = true;
    var randVal = Math.floor((Math.random() * 100) + 1);
    if (randVal < annoyChance) {
        annoy();
    } else {
        location.reload();
    }
}

var title = document.getElementsByTagName('title');
for (var i = 0; i < title.length; i++) {
    title.item(i).addEventListener("DOMSubtreeModified", testAnnoy, false);
}