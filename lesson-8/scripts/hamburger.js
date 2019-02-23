function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    //the above line is only there to show what the console is doing in the development tools. You can delete it. It is not needed.
    
    document.getElementById("primaryNav").classList.toggle("hide");
}