document.querySelector("#headingOne").addEventListener("click",function() {
if (document.getElementById("collapseOne").style.display === "none"){
document.getElementById("collapseOne").style.display = "block"
}
else{
    document.getElementById("collapseOne").style.display = "none"
}
});