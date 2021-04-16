console.log("running js")

if (window.opener) {
    console.log("running vulnerablestuff")
    window.opener.location = "https://google.com";
}