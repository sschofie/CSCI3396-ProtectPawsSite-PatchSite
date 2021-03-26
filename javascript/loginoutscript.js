if(document.getElementById("logout") != null) {
    const logoutbtn = document.getElementById("logout");
    logoutbtn.addEventListener("click", () => redirectToLogin());
}

if(document.getElementById("loginRedirect") != null) {
    const loginRedirectbtn = document.getElementById("loginRedirect");
    loginRedirectbtn.addEventListener("click", () => redirectToLogin());
}


function redirectToLogin() {
    window.location.replace("../htmldocs/login.html");
}