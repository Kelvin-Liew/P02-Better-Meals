window.onload = function(){

	// Get the modal
	var modal = document.getElementById("myModal");

	// modal2
	var modal2 = document.getElementById("myModal2");

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myImg");

	var add2cart = document.getElementById("myAdd2cart");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// Get the button that opens the modal
	var closebtn = document.getElementById("closeBtn");

	var header = document.getElementById("menuNav");

	var sticky = 5;

	// if (header !== undefined){
	// 	console.log('you');
	// }

	if (sticky !== undefined){
		console.log('me');
	}

//new stuff
// window.onscroll = function() {scrollFunction()};

// var header = document.getElementById("menuNav");
// var sticky = header.offsetTop;

// function scrollFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }



//Main Nav JS

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}



      let mainNav=document.getElementById('main-nav');
      let navbarToggle=document.getElementById('navbar-toggle');

      navbarToggle.addEventListener('click',function(){

          if(this.classList.contains('active')){
              mainNav.style.display="none";
              this.classList.remove('active');
          }
          else{
              mainNav.style.display="flex";
              this.classList.add('active');

          }
      });

			//main nav js








//new stuff

	// When the user clicks the button, open the modal
	btn.onclick = function() {
	  modal.style.display = "block";
	}

	add2cart.onclick = function() {
	  modal2.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}

	closebtn.onclick = function() {
	  modal2.style.display = "none";
	}



	img.onclick = function(){
		modal.style.display = "block";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}

	// function makeSticky() {
	//   if (window.pageYOffset > sticky) {
	//     header.classList.add("sticky");
	//     console.log('Hello');
	//   } else {
	//     header.classList.remove("sticky");
	//     console.log('goodbye');
	//   }
	// }

	// window.onscroll = function(){makeSticky()};
};
