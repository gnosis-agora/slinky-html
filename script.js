function annoy() {


  var elements = document.querySelectorAll('body *');
  // var exceptions = ["SCRIPT"];
  /*
      for all the video elements in a website
  */
  for (var i=0;i<elements.length;i++) {
    var tag = elements[i].tagName;
    if (elements[i].hasChildNodes()) {
      elements[i].className += " ignoreMe";
    }
  }

  $(document).ready(function(){
    $('body').jGravity({
      weight: 25,
      depth: 1,
      drag: true,    
    });
  });
   
}
//Run functions
annoy();