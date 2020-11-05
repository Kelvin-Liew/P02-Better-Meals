window.onload = function(){


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

};
