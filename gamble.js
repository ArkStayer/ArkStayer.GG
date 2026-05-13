
let money = localStorage.getItem('money')
if(money === null) {
  money = 1000
}
if (money <= 0) {
    money = 0
    document.getElementById("moneytext").textContent = "0$";
}
document.getElementById("moneytext").textContent =  money + "$";
document.getElementById("moneytext").textContent = money + "$";
function AddMoney(rarity) {
  if (rarity === "blue") {
    money = money + 50
    console.log(money)
    localStorage.setItem('money', money)
  }
  if (rarity === "purple") {
    money = money + 100
    console.log(money)
    localStorage.setItem('money', money)
  }
  if (rarity === "pink") {
    money = money + 350
    console.log(money)
    localStorage.setItem('money', money)
  }
  if (rarity === "red") {
    money = money + 1000
    console.log(money)
    localStorage.setItem('money', money)
  }
  if (rarity === "gold") {
    money = money + 5000
    console.log(money)
    localStorage.setItem('money', money)
  }
  if (rarity === "gold2") {
    money = money + 10000
    console.log(money)
    localStorage.setItem('money', money)
  }
}
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

    console.log("username is empty rn")
}
else {
    console.log(x)
    document.getElementById("logintext").textContent = "Logged in as : " + x;
    document.getElementById("logintext").style.display = 'flex';
}
this.skins1 = {
  white: [],      
  lightblue: [],  
  blue: ["Five-SeveN Scrawl", "MAC-10 Ensnared", "MP5-SD Necro Jr", "Sawed-Off Spirit Board", "MAG-7 Foresight", "SCAR-20 Poultrygeist", "P2000 Lifted Spirits"],
  purple: ["G3SG1 Dream Glade", "USP-S Ticket to Hell", "M4A1-S Night Terror", "PP-Bizon Space Cat", "XM1014 Zombie Offensive"],
  pink: ["FAMAS Rapid Eye Movement", "MP7 Abyssal Apparition", "Dual Berettas Melondrama"],
  red: ["AK-47 Nightwish", "MP9 Starlight Protector"],
  gold: ["Butterfly Knife Gamma Doppler", "Karambit Gamma Doppler"]
}
this.skins2 = {
  white: [],      
  lightblue: [],  
  blue: ["SG 553 Ultraviolet", "MP7 Skulls", "AUG Wings"],
  purple: ["USP-S Dark Water", "Glock-18 Dragon Tattoo", "M4A1-S Dark Water"],  
  pink: ["AK-47 Case Hardened", "Desert Eagle Hypnotic"],       
  red: ["AWP Lightning Strike"],      
  gold: ["M9 Bayonet Case Hardened","Karambit Fade"," Karambit Urban Masked "]
};
this.skins3 = {
  white: [],      
  lightblue: [],  
  blue: ["Glock-18 Oxide Blaze", "Tec-9 Fubar", "SG 553 Danger Close", "Sawed-Off Black Sand", "Nova Wood Fired", "MP9 Modest Threat", "M4A4 Magnesium"],
  purple: ["P250 Nevermore", "MAC-10 Pipe Down", "USP-S Flashback", "Galil AR Signal", "G3SG1 Scavenger"],  
  pink: ["Desert Eagle Mecha Industries", "MP5-SD Phosphor", "UMP-45 Momentum"],       
  red: ["AK-47 Asiimov", "AWP Neo-Noir"],      
  gold: ["Talon Knife Fade", "Stiletto Knife Fade"]
};
this.skins4 = {
  white: [],      
  lightblue: [],  
  blue: ["Galil AR Shattered", "SG 553 Wave Spray", "Dual Berettas Black Limba", "UMP-45 Bone Pile", "G3SG1 Demeter", "Nova Tempest"],
  purple: ["USP-S Overgrowth", "M4A1-S Bright Water", "M4A4 Zirka", "MAC-10 Graven"],  
  pink: ["AWP Graphite", "P2000 Ocean Foam", "P90 Emerald Dragon"],       
  red: ["AK-47 Fire Serpent", "Desert Eagle Golden Koi"],      
  gold: ["Karambit | Vanilla", "M9 Bayonet Fade"]
};
this.skins5 = {
  white: [],      
  lightblue: [],  
  blue: ["Glock-18 Sacrifice", "FAMAS Decommissioned", "Tec-9 Flash Out", "MAC-10 Classic Crate", "MAG-7 Popdog", "Dual Berettas Elite 1.6", "SCAR-20 Assault"],
  purple: ["MP5-SD Agent", "P250 Inferno", "Five-SeveN Buddy", "UMP-45 Plastique", "M249 Aztec"],  
  pink: ["MP9 Hydra", "AUG Death by Puppy", "P90 Nostalgia"],       
  red: ["AWP Wildfire", "FAMAS Commemoration"],      
  gold: ["Classic Knife Crimson Web", "Classic Knife Fade"]
};

this.skins6 =  
  blue: ["MP7 Skulls"]      
  gold: ["Butterfly Knife Gamma Doppler"]
};

    
this.chances = {
  blue: 60,
  purple: 24,
  pink: 10,
  red: 5,
  gold: 1
};
this.vars = {
  blue: 99,
  gold2: 1
};

function selectRarity() {
  const random = Math.random() * 100;
  let sum = 0;
  
  for (const [rarity, chance] of Object.entries(chances)) {
    sum += chance;
    if (random <= sum) return rarity;
  }
}
function selectRarity6() {
  const random = Math.random() * 100;
  let sum = 0;
  
  for (const [rarity, chance] of Object.entries(vars)) {
    sum += chance;
    if (random <= sum) return rarity;
  }
}
document.getElementById("case1").onclick = async function() {
    if (money <= 0) {
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      document.getElementById("moneytext").textContent = "0$";
      document.getElementById("overlay").style.display = "block";
      document.getElementById("text").style.display= "block";
      document.getElementById("text").textContent = "You Dont Have Enough Money.";
      document.body.style.overflow = 'hidden';
      document.getElementById("overlay").onclick = function() {
        document.getElementById("overlay").style.display = "none";
        document.body.style.overflow = 'auto';
      }
    }

    else {
      document.getElementById("one").style.display = "block";
      document.getElementById("two").style.display = "block";
      document.getElementById("three").style.display = "block";
      document.body.style.overflow = 'hidden';
      const oldimg = document.getElementById("caseimg")
      const oldtext = document.getElementById("text")
      if (oldtext === null){
        await sleep(100)
      }
      else {
      oldtext.remove();
      }
      if (oldimg === null){
        await sleep(100)
      }
      else {
      oldimg.remove();
      }
      document.getElementById("overlay").style.display = "block";
      await sleep(3000)
        document.getElementById("overlay").onclick = function() {
          const oldimg = document.getElementById("caseimg")
          const oldtext = document.getElementById("text")
          oldimg.remove();
          oldtext.remove()
          document.getElementById("overlay").style.display = "none";
          document.body.style.overflow = 'auto';
        }
      money = money - 500
      const rarity = selectRarity();
      const skinList = skins1[rarity];
      const randomSkin = skinList[Math.floor(Math.random() * skinList.length)];
      console.log(rarity)
      AddMoney(rarity)

      localStorage.setItem('money', money)
      document.getElementById("moneytext").textContent = money + "$";
      if (rarity === "red") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "red";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "blue") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "pink") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "pink";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "purple") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "purple";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "gold") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "gold";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      const img = document.createElement('img');
      img.src = `images/caseimgs/${randomSkin}.png`;
      img.setAttribute("id", "caseimg");
      
      const container = document.getElementById('overlay');
      container.appendChild(img);

      document.body.style.overflow = 'hidden';
    
    }
}
document.getElementById("case2").onclick = async function() {
    if (money <= 0) {
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      document.getElementById("moneytext").textContent = "0$";
      document.getElementById("overlay").style.display = "block";
      document.getElementById("text").style.display= "block";
      document.getElementById("text").textContent = "You Dont Have Enough Money.";
      document.body.style.overflow = 'hidden';
      document.getElementById("overlay").onclick = function() {
        document.getElementById("overlay").style.display = "none";
        document.body.style.overflow = 'auto';
      }
    }

    else {
      document.getElementById("one").style.display = "block";
      document.getElementById("two").style.display = "block";
      document.getElementById("three").style.display = "block";
      document.body.style.overflow = 'hidden';
      const oldimg = document.getElementById("caseimg")
      const oldtext = document.getElementById("text")
      if (oldtext === null){
        await sleep(100)
      }
      else {
      oldtext.remove();
      }
      if (oldimg === null){
        await sleep(100)
      }
      else {
      oldimg.remove();
      }
      document.getElementById("overlay").style.display = "block";
      await sleep(3000)
        document.getElementById("overlay").onclick = function() {
          const oldimg = document.getElementById("caseimg")
          const oldtext = document.getElementById("text")
          oldimg.remove();
          oldtext.remove()
          document.getElementById("overlay").style.display = "none";
          document.body.style.overflow = 'auto';
        }
      money = money - 500
      const rarity = selectRarity();
      const skinList = skins2[rarity];
      const randomSkin = skinList[Math.floor(Math.random() * skinList.length)];
      console.log(rarity)
      AddMoney(rarity)

      localStorage.setItem('money', money)
      document.getElementById("moneytext").textContent = money + "$";
      if (rarity === "red") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "red";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "blue") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "pink") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "pink";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "purple") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "purple";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "gold") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "gold";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      const img = document.createElement('img');
      img.src = `images/caseimgs/${randomSkin}.png`;
      img.setAttribute("id", "caseimg");
      
      const container = document.getElementById('overlay');
      container.appendChild(img);

      document.body.style.overflow = 'hidden';
    
    }
}
document.getElementById("case3").onclick = async function() {
    if (money <= 0) {
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      document.getElementById("moneytext").textContent = "0$";
      document.getElementById("overlay").style.display = "block";
      document.getElementById("text").style.display= "block";
      document.getElementById("text").textContent = "You Dont Have Enough Money.";
      document.body.style.overflow = 'hidden';
      document.getElementById("overlay").onclick = function() {
        document.getElementById("overlay").style.display = "none";
        document.body.style.overflow = 'auto';
      }
    }

    else {
      document.getElementById("one").style.display = "block";
      document.getElementById("two").style.display = "block";
      document.getElementById("three").style.display = "block";
      document.body.style.overflow = 'hidden';
      const oldimg = document.getElementById("caseimg")
      const oldtext = document.getElementById("text")
      if (oldtext === null){
        await sleep(100)
      }
      else {
      oldtext.remove();
      }
      if (oldimg === null){
        await sleep(100)
      }
      else {
      oldimg.remove();
      }
      document.getElementById("overlay").style.display = "block";
      await sleep(3000)
        document.getElementById("overlay").onclick = function() {
          const oldimg = document.getElementById("caseimg")
          const oldtext = document.getElementById("text")
          oldimg.remove();
          oldtext.remove()
          document.getElementById("overlay").style.display = "none";
          document.body.style.overflow = 'auto';
        }
      money = money - 500
      const rarity = selectRarity();
      const skinList = skins3[rarity];
      const randomSkin = skinList[Math.floor(Math.random() * skinList.length)];
      console.log(rarity)
      AddMoney(rarity)

      localStorage.setItem('money', money)
      document.getElementById("moneytext").textContent = money + "$";
      if (rarity === "red") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "red";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "blue") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "pink") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "pink";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "purple") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "purple";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "gold") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "gold";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      const img = document.createElement('img');
      img.src = `images/caseimgs/${randomSkin}.png`;
      img.setAttribute("id", "caseimg");
      
      const container = document.getElementById('overlay');
      container.appendChild(img);

      document.body.style.overflow = 'hidden';
    
    }
}
document.getElementById("case4").onclick = async function() {
    if (money <= 0) {
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      document.getElementById("moneytext").textContent = "0$";
      document.getElementById("overlay").style.display = "block";
      document.getElementById("text").style.display= "block";
      document.getElementById("text").textContent = "You Dont Have Enough Money.";
      document.body.style.overflow = 'hidden';
      document.getElementById("overlay").onclick = function() {
        document.getElementById("overlay").style.display = "none";
        document.body.style.overflow = 'auto';
      }
    }

    else {
      document.getElementById("one").style.display = "block";
      document.getElementById("two").style.display = "block";
      document.getElementById("three").style.display = "block";
      document.body.style.overflow = 'hidden';
      const oldimg = document.getElementById("caseimg")
      const oldtext = document.getElementById("text")
      if (oldtext === null){
        await sleep(100)
      }
      else {
      oldtext.remove();
      }
      if (oldimg === null){
        await sleep(100)
      }
      else {
      oldimg.remove();
      }
      document.getElementById("overlay").style.display = "block";
      await sleep(3000)
        document.getElementById("overlay").onclick = function() {
          const oldimg = document.getElementById("caseimg")
          const oldtext = document.getElementById("text")
          oldimg.remove();
          oldtext.remove()
          document.getElementById("overlay").style.display = "none";
          document.body.style.overflow = 'auto';
        }
      money = money - 500
      const rarity = selectRarity();
      const skinList = skins4[rarity];
      const randomSkin = skinList[Math.floor(Math.random() * skinList.length)];
      console.log(rarity)
      AddMoney(rarity)

      localStorage.setItem('money', money)
      document.getElementById("moneytext").textContent = money + "$";
      if (rarity === "red") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "red";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "blue") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "pink") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "pink";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "purple") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "purple";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "gold") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "gold";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      const img = document.createElement('img');
      img.src = `images/caseimgs/${randomSkin}.png`;
      img.setAttribute("id", "caseimg");
      
      const container = document.getElementById('overlay');
      container.appendChild(img);

      document.body.style.overflow = 'hidden';
    
    }
}
document.getElementById("case5").onclick = async function() {
    if (money <= 0) {
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      document.getElementById("moneytext").textContent = "0$";
      document.getElementById("overlay").style.display = "block";
      document.getElementById("text").style.display= "block";
      document.getElementById("text").textContent = "You Dont Have Enough Money.";
      document.body.style.overflow = 'hidden';
      document.getElementById("overlay").onclick = function() {
        document.getElementById("overlay").style.display = "none";
        document.body.style.overflow = 'auto';
      }
    }

    else {
      document.getElementById("one").style.display = "block";
      document.getElementById("two").style.display = "block";
      document.getElementById("three").style.display = "block";
      document.body.style.overflow = 'hidden';
      const oldimg = document.getElementById("caseimg")
      const oldtext = document.getElementById("text")
      if (oldtext === null){
        await sleep(100)
      }
      else {
      oldtext.remove();
      }
      if (oldimg === null){
        await sleep(100)
      }
      else {
      oldimg.remove();
      }
      document.getElementById("overlay").style.display = "block";
      await sleep(3000)
        document.getElementById("overlay").onclick = function() {
          const oldimg = document.getElementById("caseimg")
          const oldtext = document.getElementById("text")
          oldimg.remove();
          oldtext.remove()
          document.getElementById("overlay").style.display = "none";
          document.body.style.overflow = 'auto';
        }
      money = money - 500
      const rarity = selectRarity();
      const skinList = skins5[rarity];
      const randomSkin = skinList[Math.floor(Math.random() * skinList.length)];
      console.log(rarity)
      AddMoney(rarity)

      localStorage.setItem('money', money)
      document.getElementById("moneytext").textContent = money + "$";
      if (rarity === "red") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "red";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "blue") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "pink") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "pink";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "purple") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "purple";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "gold") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "gold";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      const img = document.createElement('img');
      img.src = `images/caseimgs/${randomSkin}.png`;
      img.setAttribute("id", "caseimg");
      
      const container = document.getElementById('overlay');
      container.appendChild(img);

      document.body.style.overflow = 'hidden';
    
    }
}
document.getElementById("case6").onclick = async function() {
    if (money <= 0) {
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      document.getElementById("moneytext").textContent = "0$";
      document.getElementById("overlay").style.display = "block";
      document.getElementById("text").style.display= "block";
      document.getElementById("text").textContent = "You Dont Have Enough Money.";
      document.body.style.overflow = 'hidden';
      document.getElementById("overlay").onclick = function() {
        document.getElementById("overlay").style.display = "none";
        document.body.style.overflow = 'auto';
      }
    }

    else {
      document.getElementById("one").style.display = "block";
      document.getElementById("two").style.display = "block";
      document.getElementById("three").style.display = "block";
      document.body.style.overflow = 'hidden';
      const oldimg = document.getElementById("caseimg")
      const oldtext = document.getElementById("text")
      if (oldtext === null){
        await sleep(100)
      }
      else {
      oldtext.remove();
      }
      if (oldimg === null){
        await sleep(100)
      }
      else {
      oldimg.remove();
      }
      document.getElementById("overlay").style.display = "block";
      await sleep(3000)
        document.getElementById("overlay").onclick = function() {
          const oldimg = document.getElementById("caseimg")
          const oldtext = document.getElementById("text")
          oldimg.remove();
          oldtext.remove()
          document.getElementById("overlay").style.display = "none";
          document.body.style.overflow = 'auto';
        }
      money = money - 500
      const rarity = selectRarity6();
      const skinList = skins6[rarity];
      const randomSkin = skinList[Math.floor(Math.random() * skinList.length)];
      console.log(rarity)
      AddMoney(rarity)

      localStorage.setItem('money', money)
      document.getElementById("moneytext").textContent = money + "$";
      if (rarity === "red") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "red";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "blue") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "pink") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "pink";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "purple") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "purple";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      if (rarity === "gold") {
        const text = document.createElement("h1")
        text.setAttribute("id", "text");
      
        const container = document.getElementById('overlay');
        container.appendChild(text);
        document.getElementById("text").style.color = "gold";
        document.getElementById("text").textContent = "You Got A :  " + randomSkin;
      }
      const img = document.createElement('img');
      img.src = `images/caseimgs/${randomSkin}.png`;
      img.setAttribute("id", "caseimg");
      
      const container = document.getElementById('overlay');
      container.appendChild(img);

      document.body.style.overflow = 'hidden';
    
    }
}
