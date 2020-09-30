let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("textSlides");
  let squares = document.getElementsByClassName("square");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < squares.length; i++) {
    squares[i].className = squares[i].className.replace(" activesquare", "");
  }
  slides[slideIndex-1].style.display = "block";  
  squares[slideIndex-1].className += " activesquare";
  setTimeout(showSlides, 3000);
}