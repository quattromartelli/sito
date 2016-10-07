var isOpen = "n";

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    $('#main').animate({marginLeft: '+=250px', marginRight: '-=250px'}, 0);
//    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    isOpen = "y";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */

function closeNav() {
    if (isOpen == "y" ) {
        document.getElementById("mySidenav").style.width = "0";
        $('#main').animate({marginLeft: '-=250px', marginRight: '+=250px'}, 0);
        document.body.style.backgroundColor = "white";
        isOpen = "n";
    }
}

$('#menuBTN').click( function(event){
    event.stopPropagation();
    openNav();
});

$(document).click( function(){
    closeNav();
});