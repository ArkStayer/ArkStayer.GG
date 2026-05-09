
document.getElementById("loginbtn").onclick = function(){ // do on click function
    let username = document.getElementById("username").value; // get id for usage in js
    let password = document.getElementById("password").value;
    if (password === "" || username === ""){
        console.log("INPUT PASSWORD/USERNAME, CANNOT BE EMPTY")
    }
    else {
        console.log("username is:", username,",", "password is:", password)
        localStorage.setItem('username', username)
        localStorage.getItem('username');
        window.location.href = 'index.html'


    }
}
