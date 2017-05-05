var last_known_scroll_position = 0;
var divsize = 300;
var scrollPosition = 0;
var ticking = false;




window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      if(last_known_scroll_position >= scrollPosition){
        var div = document.createElement("div");
        div.className = "container";
        document.body.appendChild(div);
        console.log(last_known_scroll_position)
        scrollPosition += divsize;
      }
      ticking = false;
    });
  }
  ticking = true;
});
