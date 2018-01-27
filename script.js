function annoy() {
    var forms = document.getElementsByTagName('form');

    /*
        for all the video elements in a website
    */
    var i = 0
    while (forms.length > 0) {
        var sizeSpecs = forms[0].getBoundingClientRect();
        var width = sizeSpecs.width;
        var height = sizeSpecs.height;
        // alert(width + " : " + height);     
        
    }
    
    
}
//Run functions
annoy();