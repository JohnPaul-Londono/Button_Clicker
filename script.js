console.log("page loaded...");
// login
function logOut(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}
// disappear
function hide(element) {
    element.remove();
}
