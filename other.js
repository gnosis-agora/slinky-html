var trollVideo = ["https://www.youtube.com/embed/ZN5PoW7_kdA?start=5&autoplay=1", "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", "https://www.youtube.com/embed/2Z4m4lnjxkY?autoplay=1", "https://www.youtube.com/embed/0XrRwruU8DE?autoplay=1", "https://www.youtube.com/embed/QH2-TGUlwu4?start=3&autoplay=1","https://www.youtube.com/embed/ZZ5LpwO-An4?autoplay=1"];
var annoyChance = 50;

function annoy() {
    var vids = document.getElementsByTagName('video')

    /*
    	for all the video elements in a website
    */
    while (vids.length >= 0) {
        var width = vids.item(0).offsetWidth;
        var height = vids.item(0).offsetHeight;
        //alert(width + " : " + height);
        
        var randVal = Math.floor((Math.random() * 6) + 1);
        
        vids[0].parentNode.innerHTML = '<iframe src="' + trollVideo[randVal - 1] + '" frameborder="0" allowfullscreen autoplay=1 style="width:' + width + 'px;height:' + height + 'px;"></iframe>';
    }
}

//Run functions
var randVal = Math.floor((Math.random() * 100) + 1);
if (randVal < annoyChance) {
    annoy();
}