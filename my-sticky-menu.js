// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var myStickyNavbar = document.getElementById("myStickyNavbar");

// Get the offset position of the navbar
var sticky = myStickyNavbar.offsetTop;

//testingggggg things
//var myHeaderHeight = document.getElementById("header").offsetHeight;
//var header= myHeader.height;
//var offsetHeight = document.getElementById('myDiv').offsetHeight;




// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    var myHeaderHeight = document.getElementById("header").offsetHeight;
    console.log("myStickyNavbar.offsetTop:"+sticky);
    console.log("window.pageYOffset:"+window.pageYOffset);
    console.log("myheader.offHeight:"+myHeaderHeight);
  if (window.pageYOffset >= sticky+550) {
    myStickyNavbar.classList.add("sticky")
    
  } else {
    myStickyNavbar.classList.remove("sticky");
    
  }
}