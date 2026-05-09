function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
let money = localStorage.getItem('money')
if(money === null) {
  money = 1000
}
if (money <= 0) {
    money = 0
    document.getElementById("moneytext").textContent = "0$";
}

if (money <= 0) {
    document.getElementById("moneytext").textContent = "0$";
}
document.getElementById("moneytext").textContent = money + "$";
if (isMobile()) {
  console.log("MOBILE")
  window.location.href = 'mobile.html'
} else {
  console.log("NOT MOBILE")
}
let logoutbtn = document.getElementById("logout")
logoutbtn.onclick =  function() {
  localStorage.clear()
  window.location.href = "index.html"
}
let x = localStorage.getItem('username');
if (x === null || x===null) {
    console.log("username is empty rn")
    document.getElementById("loginbtn2").style.display = 'flex';
    document.getElementById("logintext").style.display = 'none';
    document.getElementById("loginbtnmain").style.display = 'flex';
    document.getElementById("moneytext").style.display = 'none';
    logoutbtn.style.display = "none";
}
else {
    console.log(x)
    document.getElementById("loginbtn2").style.display = 'none';
    document.getElementById("loginbtnmain").style.display = 'none';
    document.getElementById("logintext").textContent = "Logged in as : " + x;
    document.getElementById("logintext").style.display = 'flex';
}
