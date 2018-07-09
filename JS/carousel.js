var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

var about1 = document.getElementByID("about1");
var about2 = document.getElementByID("about2");

about1.onmouseover = function {
	about2.style.display = "block"
}

about1.onmouseover = function {
	about2.style.display = "none"
}