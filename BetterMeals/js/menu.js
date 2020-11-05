window.onload = function(){

//new stuff
window.onscroll = function() {scrollFunction()};

var header = document.getElementById("menuNav");
var sticky = header.offsetTop;

function scrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function makeSticky() {
	  if (window.pageYOffset > sticky) {
	    header.classList.add("sticky");
	    console.log('Hello');
	  } else {
	    header.classList.remove("sticky");
	    console.log('goodbye');
	  }
	}

	window.onscroll = function(){makeSticky()};
};