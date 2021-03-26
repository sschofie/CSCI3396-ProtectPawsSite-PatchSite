const logoutbtn = document.getElementById("logout");
console.log(logoutbtn.value)

logoutbtn.addEventListener("click", () => logOut());

function logOut() {
    window.location.replace("../htmldocs/login.html");
}