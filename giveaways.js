let money = localStorage.getItem('money')
if(money === null) {
  money = 1000
}
if (money <= 0) {
    money = 0
    document.getElementById("moneytext").textContent = "0$";
}

document.getElementById("moneytext").textContent = money + "$";
let gw1num = localStorage.getItem('gw1num');
let gw2num = localStorage.getItem('gw2num');
let gw3num = localStorage.getItem('gw3num');

function rannum() { 
    return Math.floor(Math.random() * 100000) + 1;
}

// Get entries from localStorage FIRST
let entries1 = localStorage.getItem('entries1');
let entries2 = localStorage.getItem('entries2');
let entries3 = localStorage.getItem('entries3');

// Initialize if null
if (entries1 === null || entries1 === "") {
    entries1 = rannum();
    localStorage.setItem('entries1', entries1);
}
if (entries2 === null || entries2 === "") {
    entries2 = rannum();
    localStorage.setItem('entries2', entries2);
}
if (entries3 === null || entries3 === "") {
    entries3 = rannum();
    localStorage.setItem('entries3', entries3);
}

// Display entries
document.getElementById("entries1").textContent = "Current Entries : " + entries1;
document.getElementById("entries2").textContent = "Current Entries : " + entries2;
document.getElementById("entries3").textContent = "Current Entries : " + entries3;

if (gw1num === null || gw1num === "") {
    console.log("no assign")
}
else {
    console.log(gw1num)
    let gw1 = document.getElementById("gw1")
    gw1.classList.remove("gwbutton")
    gw1.classList.add("gwover")
    gw1.disabled = true;
    gw1.textContent = "Already Entered";
}
if (gw2num === null || gw2num === "") {
    console.log("no assign for gw2")
}
else {
    let gw2 = document.getElementById("gw2")
    gw2.classList.remove("gwbutton")
    gw2.classList.add("gwover")
    gw2.disabled = true;
    localStorage.setItem('gw2num', 1)
    gw2.textContent = "Already Entered";
}
if (gw3num === null || gw3num === "") {
    console.log("no assign for gw3")
}
else {
    let gw3 = document.getElementById("gw3")
    gw3.classList.remove("gwbutton")
    gw3.classList.add("gwover")
    gw3.disabled = true;
    localStorage.setItem('gw3num', 1)
    gw3.textContent = "Already Entered";
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (isMobile()) {
    console.log("MOBILE")
    window.location.href = 'mobile.html'
} else {
    console.log("NOT MOBILE")
}

let x = localStorage.getItem('username');
if (x === null || x===null) {
    alert("Must Log In Fist To Use This Feature!");
    window.location.href = 'login.html'
    document.getElementById("moneytext").style.display = 'none';
    console.log("username is empty rn")
}
else {
    console.log(x)
    document.getElementById("logintext").textContent = "Logged in as : " + x;
    document.getElementById("logintext").style.display = 'flex';
}

document.getElementById("gw1").onclick = function(){
    console.log("clicked giveaway button.");
    let gw1 = document.getElementById("gw1");
    gw1.classList.remove("gwbutton");
    gw1.classList.add("gwover");
    gw1.disabled = true;
    localStorage.setItem('gw1num', 1);
    gw1.textContent = "Already Entered";
    
    // Get current value, add 1, save, display
    let currentEntries = Number(localStorage.getItem('entries1'));
    let newEntries = currentEntries + 1;
    localStorage.setItem('entries1', newEntries);
    document.getElementById("entries1").textContent = "Current Entries : " + newEntries;
}

document.getElementById("gw2").onclick = function(){
    console.log("clicked giveaway2 button.");
    let gw2 = document.getElementById("gw2");
    gw2.classList.remove("gwbutton");
    gw2.classList.add("gwover");
    gw2.disabled = true;
    localStorage.setItem('gw2num', 1);
    gw2.textContent = "Already Entered";
    
    let currentEntries = Number(localStorage.getItem('entries2'));
    let newEntries = currentEntries + 1;
    localStorage.setItem('entries2', newEntries);
    document.getElementById("entries2").textContent = "Current Entries : " + newEntries;
}

document.getElementById("gw3").onclick = function(){
    console.log("clicked giveaway3 button.");
    let gw3 = document.getElementById("gw3");
    gw3.classList.remove("gwbutton");
    gw3.classList.add("gwover");
    gw3.disabled = true;
    localStorage.setItem('gw3num', 1);
    gw3.textContent = "Already Entered";
    
    let currentEntries = Number(localStorage.getItem('entries3'));
    let newEntries = currentEntries + 1;
    localStorage.setItem('entries3', newEntries);
    document.getElementById("entries3").textContent = "Current Entries : " + newEntries;
}

let seconds = localStorage.getItem('seconds');
let seconds2 = localStorage.getItem('seconds2');
let seconds3 = localStorage.getItem('seconds3');

if (seconds === null || seconds === "") {
    seconds = 86400 * 3;
}
if (seconds2 === null || seconds2 === "") {
    seconds2 = 86400;
}
if (seconds3 === null || seconds3 === "") {
    seconds3 = 86400 * 2;
}

setInterval(() => {
    function formatTime(seconds) {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;
        localStorage.setItem('seconds', seconds)
        return `${hours}:${minutes}:${secs}`;
    }

    let newtext = (formatTime(seconds));
    let text1 = document.getElementById("text1")
    text1.textContent = "Time Left : " + (newtext);
    seconds--;
    
    if (seconds < 0) {
        seconds = 86400 * 3;
        gw1num = null;
    }
}, 1000);

setInterval(() => {
    function formatTime(seconds2) {
        let hours = Math.floor(seconds2 / 3600);
        let minutes = Math.floor((seconds2 % 3600) / 60);
        let secs = seconds2 % 60;
        localStorage.setItem('seconds2', seconds2)
        return `${hours}:${minutes}:${secs}`;
    }

    let newtext2 = (formatTime(seconds2));
    let text2 = document.getElementById("text2")
    text2.textContent = "Time Left : " + (newtext2);
    seconds2--;
    
    if (seconds2 < 0) {
        seconds2 = 86400;
        gw2num = null;
    }
}, 1000);

setInterval(() => {
    function formatTime(seconds3) {
        let hours = Math.floor(seconds3 / 3600);
        let minutes = Math.floor((seconds3 % 3600) / 60);
        let secs = seconds3 % 60;
        localStorage.setItem('seconds3', seconds3)
        return `${hours}:${minutes}:${secs}`;
    }

    let newtext3 = (formatTime(seconds3));
    let text3 = document.getElementById("text3")
    text3.textContent = "Time Left : " + (newtext3);
    seconds3--;
    
    if (seconds3 < 0) {
        seconds3 = 86400 * 2;
        gw3num = null;
        
    }
}, 1000);
// this code is SO FUCKING TRASH LITERALLY WHAT THE HELL IS THIS SHIT WITH ALL THE NESTING AND CHECKS LIKE WHAA. surely theres better way to do this ^^^