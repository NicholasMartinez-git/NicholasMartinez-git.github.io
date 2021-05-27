/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* --------------- Search database on click of search-button --------------- */
/* --------------- Remove alert --------------- */

$('.close').click(function () {
    $('.alert-box').hide();
})

