
function open_side_menu(){
    document.getElementById("side1").style.width = "250px";
    ////to open (display) side_menu
    
    //document.getElementById("main").style.marginLeft = "250px";
    //to move ur page to the left when the side_menu open(in case of the side_menu pushing the page)
}
function close_side_menu(){
        document.getElementById("side1").style.width = "0";
        //to close (hide) side_menu
    
       // document.getElementById("main").style.marginLeft = "0";
        //to retrive the page to its defaul location after side_menu closed
}