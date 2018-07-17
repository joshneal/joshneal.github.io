	function runFunction() {
		//Well 1 Image Change
		document.getElementById("well1").onmouseover = function() {mouseOver1()};
		document.getElementById("well1").onmouseout = function() {mouseOut1()};

		function mouseOver1 () {
			document.getElementById("programming").src = "Images/Icons/Programming History Hover.jpg";
		}
		function mouseOut1 () {
			document.getElementById("programming").src = "Images/Icons/Programming History.jpg";
		}


		//Well 2 Image Change
		document.getElementById("well2").onmouseover = function() {mouseOver2()};
		document.getElementById("well2").onmouseout = function() {mouseOut2()};

		function mouseOver2 () {
			document.getElementById("employment").src = "Images/Icons/Employment History Hover.jpg";
		}
		function mouseOut2 () {
			document.getElementById("employment").src = "Images/Icons/Employment History.jpg";
		}



		//Well 3 Image Change
		document.getElementById("well3").onmouseover = function() {mouseOver3()};
		document.getElementById("well3").onmouseout = function() {mouseOut3()};

		function mouseOver3 () {
			document.getElementById("about").src = "Images/Icons/About Me Hover.jpg";
		}
		function mouseOut3 () {
			document.getElementById("about").src = "Images/Icons/About Me.jpg";
		}


		//Well 4 Image Change
		document.getElementById("well4").onmouseover = function() {mouseOver4()};
		document.getElementById("well4").onmouseout = function() {mouseOut4()};

		function mouseOver4 () {
			document.getElementById("contact").src = "Images/Icons/Contact Me Hover.jpg";
		}
		function mouseOut4 () {
			document.getElementById("contact").src = "Images/Icons/Contact Me.jpg";
		}


		//Collapsible List at bottom
		var coll = document.getElementsByClassName("collapsible");
		var i;

		for (i = 0; i < coll.length; i++) {
		  coll[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var content = this.nextElementSibling;
		    if (content.style.maxHeight){
		      content.style.maxHeight = null;
		    } else {
		      content.style.maxHeight = content.scrollHeight + "px";
		    } 
		  });
		}
	}