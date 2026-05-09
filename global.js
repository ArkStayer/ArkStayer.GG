let money = localStorage.getItem('money')
if(money === null) {
  money = 1000
}
if (money <= 0) {
    money = 0
    document.getElementById("moneytext").textContent = "0$";
}


document.getElementById("moneytext").textContent = money + "$";
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