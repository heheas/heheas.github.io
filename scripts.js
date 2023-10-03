// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
var slideIndex = 1;
// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
var carouselTimer;
var carouselPaused = false;


function init() {
    showSlides(slideIndex);
    carousel();
    
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}

function carousel() {
    if (!carouselPaused) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        carouselTimer = setTimeout(carousel, 4000);    
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function pauseSlides() {
    carouselPaused = !carouselPaused;
    var pauseIcon = document.getElementById("pauseIcon");
    if (!carouselPaused) {
        pauseIcon.classList.remove("fa-play");
        pauseIcon.classList.add("fa-pause");
        carousel();
    } else {
        pauseIcon.classList.remove("fa-pause");
        pauseIcon.classList.add("fa-play");
    }
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}