let users = new Map();

users['swhitney'] = 'password'
users['andrew'] = 'ladd'
users['sschofie'] = '1234'

const form = document.getElementById('loginform');
const testintButton = document.getElementById('testing');

form.addEventListener('submit', () => {
    let username = document.getElementById('usernameInput').value;
    let password = document.getElementById('passwordInput').value;

    if(validateLogin(username, password)) {
        console.log("success");
        form.action="../htmldocs/protectpaws.html"; 
    } else {
        console.log("failure");
    }
});

function validateLogin(username, password) {
    if(users[username] === password) {
        return true;
    } else return false;
}