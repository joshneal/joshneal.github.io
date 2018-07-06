
// var rgb = $('.navbar')
// 			.css('background-color')
// 			.replace('rgb(', '')
// 			.replace(')','' )
// 			.split(',')
// 			.map(Number);

// var o = Math.round(((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) /1000);
// if(o > 125) {
//   $('.navbar .nav > li > a').css('color', 'black');
//   $('.navbar-default .navbar-toggle .icon-bar').css('color', 'black');
// } else {
//   $('.navbar .nav > li > a').css('color', 'white');
//   $('.navbar-default .navbar-toggle .icon-bar').css('color', 'white');
// }

$('#myCarousel').bind('slide.bs.carousel', function (e) {
    console.log('slide event!');
});