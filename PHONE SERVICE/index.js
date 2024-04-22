//   const { Alert } = require("bootstrap");

let provider = document.getElementById("provider");
let amount = document.getElementById("amount");
let landingarea = document.getElementById("landingdiv");
let callarea = document.getElementById("callarea");
let clickbacks = document.getElementById("clickback")
let shownum = document.getElementById("shownums");
let select_provider = document.getElementById("select_provider");
let rechargePin = Math.floor(Math.random() * 999);
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const valueEl = document.querySelector('.value');
let holdhome = document.getElementById("holdhome");
let gens = document.getElementById("gens");
let mm = document.getElementById("mm");
let inputs = document.getElementById("inputs");
let powerhold = document.getElementById("powerhold");
let phone = document.getElementById("phone");
let main = document.querySelector(".ml-auto");
let body = document.getElementById("body");
let offpower = document.getElementById("offpower");
let screen = document.getElementById("shows");

offpower.style.display = "none"
body.style.display = "none"

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');

gens.style.display = "none"
mm.style.display = "none"
powerhold.style.display = "none"
main.style.display = "block"

// console.log(GLO);

callarea.style.display = "none"
select_provider.style.display = "none"
let MTN = JSON.parse(localStorage.getItem("MTN"))
let GLO = JSON.parse(localStorage.getItem("GLO"))
let AIRTEL = JSON.parse(localStorage.getItem("AIRTEL"))
let ETISALAT = JSON.parse(localStorage.getItem("ETISALAT"))

// let cardID = ([], Math.floor(Math.random() * 9990));
let cardID = 0;
const findcard = MTN.find((f) => f.used == false)

// let GLO = []
// let AIRTEL = []
// let ETISALAT = []

let img = document.getElementById("img")
let reader = new FileReader()
// let file = ev.target.files[0];
function pickfile(ev) {
    let file = ev.target.files[0];
    console.log(file);
    reader.onload = (file) => {
        console.log(reader.result);
        document.getElementById("img").src = reader.result
    }
    //  console.log(reader);
    if (file) {
        let data = reader.readAsDataURL(file);
    }
}
console.log(Array.isArray(setInterval));

// {/* <input type="button" value="C" onclick="shownum.value = shownum.value.toString().splice(0,-1)"></input> */}

let deles = document.getElementById("deles")
let nums = [];
function delt() {
    shownum.innerHTML = ""
    nums.splice(shownum, 1);
    console.log(nums);
    console.log(delt);
    for (let index = 0; index < nums.length; index++) {
        const dan = nums[nums]
    }
    // shownum.value.toString().splice.index(0,-1)
}
function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var session = document.getElementById("session");

    if (hrs >= 12) {
        hrs -= 12;
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM'
    }

    document.getElementById("hour").innerHTML = hrs;
    document.getElementById("mins").innerHTML = min;
}

setInterval(displayTime, 1000);
function cardapp() {
    gens.style.display = "block"
    holdhome.style.display = "none"
    landingarea.style.display = "none"
}
function poweroff() {
    phone.style.display = "none"
    powerhold.style.display = "block"
    offpower.style.display = "block"
}
function onpower() {
    main.style.display = "block"
    //   main.style.display = "block"
}
function power() {
    powerhold.style.display = "none"
    holdhome.style.display = "block"
    landingarea.style.display = "block"
}
function tbtn() {
    powerhold.style.display = "block"
    holdhome.style.display = "none"
    landingarea.style.display = "none"
}
function robo() {
    mm.style.display = "block"
    holdhome.style.display = "none"
    landingarea.style.display = "none"
}
function homec() {
    mm.style.display = "none"
    gens.style.display = "none"
    holdhome.style.display = "block"
    landingarea.style.display = "block"
}
function cancel() {
    select_provider.style.display = "none"
}
function dialmtn () {
    //  var findcard = MTN.find((f) => f.mtn_pin)
    let findcard = MTN.find((f) => f.used == false)
    console.log(findcard);
    if (findcard == null) {
        findcard = []
    }
    if (shownum.innerHTML.startsWith("*555*") && shownum.innerHTML.endsWith("#") && shownum.innerHTML.includes(findcard.mtn_pin)) {
        alert(`successfuly recharged an amout of ${findcard.amount} naira to your MTN LINE`)
        console.log(shownum.innerHTML.includes(findcard.mtn_pin));
        select_provider.style.display = "none"
        findcard.used = true;
        localStorage.setItem("MTN", JSON.stringify(MTN))
        console.log(MTN, "All cards");
        let Unused = MTN.filter((fil) => fil.used == false)
        console.log(Unused, 'Un used card');
        shownum.value = ""
        return;
    } else if (shownum.innerHTML.startsWith("090")) {
        alert("devloper at work, still in progress");

    }
    else {
        alert("Recharged Pin Already Been Used")
        console.log(shownum.innerHTML.includes(findcard.mtn_pin));
        select_provider.style.display = "none"
        return;
    }

}
function daileti() {
    if (shownum.innerHTML.startsWith("*234*") && shownum.innerHTML.endsWith("#")) {
        alert("Successfuly Recharge")
        return;
    } else {
        alert("invalid commad")
        return;
    }
}

function dailglo() {
    let findcard = GLO.find((i) => f.used == false)
    console.log(findcard);
    if (findcard == null) {
        findcard = []
    }
    if (shownum.innerHTML.startsWith("*777*") && shownum.innerHTML.endsWith("#")) {
        console.log(shownum.innerHTML.includes(findcard.glo_pin));
        select_provider.style.display = "none"
        findcard = true;
        localStorage.setItem("GLO", JSON.stringify(GLO))
        console.log(GLO, "All cards");
        console.log(Unused, 'Un used card');
        shownum.value = ""
        alert(`successfuly recharged an amout of ${findcard.amount} naira to your GLO LINE`)
        return;
    } else {
        console.log(shownum.innerHTML.includes(findcard.glo_pin));
        select_provider.style.display = "none"
        alert("invalid commad")
        return;
    }
}
function dialairtel() {
    if (shownum.innerHTML.startsWith("*123*") && shownum.innerHTML.endsWith("#")) {
        alert("Successfuly Recharge")
        return;
    } else {
        alert("invalid commad")
        return;
    }
}
function dial() {
    if (shownum.innerHTML == "") {
        alert("still dey play")
        return;
    } else {
        select_provider.style.display = "block"
        alert("ONLY MTN SERVICE WORKING NOW, we are still working on other network");
    }
}
function clickNum(num) {
    // const nums = [];
    shownum.innerHTML += num
    nums.push(clickNum.value)
    console.log(num);
    for (let index = 0; index < nums.length; index++) {
        const dan = nums[nums]
    }
}
function gotocallarea() {
    holdhome.style.display = "none"
    landingarea.style.display = "none"
    callarea.style.display = "block"
}
function clickback() {
    landingarea.style.display = "block"
    callarea.style.display = "none"
    holdhome.style.display = "block"
}

function nonsog() {
    console.log("NONSOGLOBAL")
    alert("you are about to move to nonsoglobal sure wallet, make sure you sign up with our company, to enjoy our digital global service");
    window.open("https://www.sabuss.com/nonsoglobal6/", "_blank");
    return;
}

function blog() {
    console.log(blog);
    alert("you are about to open open AFRICA1, please make sure you'r with pen and pepper(WHY AFRICA)");
    window.open("https://africa1.art.blog", "_blank");
    return; 
}

function generator() {

    if (cardID == 0){
        cardID = Math.floor(Math.random() * 99999);
    }

    screen.innerHTML += `
        <div id="vv">
           <p> ${rechargePin}</p>
           <p> ${cardID}</p>
              </div>
         `

    if (provider.value == "" || amount.value == "") {
        alert("invaild operator mr BLA-BLUE")
        return;
    } else if (provider.value == "MTN") {
        if (MTN == null) {
            MTN = []
            MTN.push({ id: cardID, mtn_pin: rechargePin, amount: amount.value, used: false })
            localStorage.setItem("MTN", JSON.stringify(MTN))
            console.log(MTN);
            alert(`You have successfully generated  ${provider.value} card of ${amount.value} naira ${mtn_pin.rechargePin}`)
            console.log(provider.value, amount.value, rechargePin);
            gens.style.display = "none"
            holdhome.style.display = "block"
            landingarea.style.display = "block"
            return;
        } else {
            cardID++
            MTN.push({ id: cardID, mtn_pin: rechargePin, amount: amount.value, used: false })
            localStorage.setItem("MTN", JSON.stringify(MTN))
            console.log(MTN);
            alert(`You have successfully generated  ${provider.value} card of ${amount.value} naira`)
            console.log(provider.value, amount.value, rechargePin);
            gens.style.display = "none"
            holdhome.style.display = "block"
            landingarea.style.display = "block"
            return;
        }
    } else if (provider.value == "GLO") {
        if (GLO == null) {
            GLO = []

            console.log(GLO);
            //   cardID++
            GLO.push({ id: cardID, glo_pin: rechargePin, amount: amount.value, used: false })
            localStorage.setItem("GLO", JSON.stringify(GLO))
            console.log(GLO);
            alert(`You have successfully generated  ${provider.value} card of ${amount.value} naira`)
            console.log(provider.value, amount.value, rechargePin);
            gens.style.display = "none"
            holdhome.style.display = "block"
            landingarea.style.display = "block"
            return;
        } else {
            cardID++
            GLO.push({ id: cardID, glo_pin: rechargePin, amount: amount.value, used: false })
            localStorage.setItem("GLO", JSON.stringify(GLO))
            console.log(GLO);
            alert(`You have successfully generated  ${provider.value} card of ${amount.value} naira`)
            console.log(provider.value, amount.value, rechargePin);
            gens.style.display = "none"
            holdhome.style.display = "block"
            landingarea.style.display = "block"
            return;
        }

    } else if (provider.value == "AIRTEL") {
        if (AIRTEL == null) {
            AIRTEL = []

            console.log(AIRTEL)

            alert(`You have successfully generated  ${provider.value} card of ${amount.value} naira`)
            console.log(AIRTEL);
            AIRTEL.push({ id: cardID, AIRTEL_pin: rechargePin, amount: amount.value, used: false })
            localStorage.setItem("AIRTEL", JSON.stringify(AIRTEL))
            console.log(provider.value, amount.value, rechargePin);
            gens.style.display = "none"
            holdhome.style.display = "block"
            landingarea.style.display = "block"
            return;
        } else {
            cardID++
            AIRTEL.push({ id: cardID, AIRTEL_pin: rechargePin, amount: amount.value, used: false })
            localStorage.setItem("AIRTEL", JSON.stringify(AIRTEL))
            console.log(AIRTEL);

            alert(`You have successfully generated  ${provider.value} card of ${amount.value} naira`)
            console.log(provider.value, amount.value, rechargePin);
            gens.style.display = "none"
            holdhome.style.display = "block"
            landingarea.style.display = "block"
            return;

        }
    } else if (provider.value == "ETISALAT") {

        if (ETISALAT == null) {
            ETISALAT = []

            console.log(ETISALAT)

            alert(`You have successfully generated  ${provider.value} card of ${amount.value} naira`)
            console.log(ETISALAT);
            ETISALAT.push({ id: cardID, Etisalat_pin: rechargePin, amount: amount.value })
            localStorage.setItem("ETISALAT", JSON.stringify(ETISALAT))
            console.log(provider.value, amount.value, rechargePin);
            gens.style.display = "none"
            holdhome.style.display = "block"
            landingarea.style.display = "block"
            return;
        }else {
            cardID++
            ETISALAT.push({ id: cardID, ETISALAT_pin: rechargePin, amount: amount.value, used: false })
            localStorage.setItem("ETISALAT", JSON.stringify(ETISALAT))
            console.log(ETISALAT);

            alert(`You have successfully generated  ${provider.value} card of ${amount.value} naira`)
            console.log(provider.value, amount.value, rechargePin);
            gens.style.display = "none"
            holdhome.style.display = "block"
            landingarea.style.display = "block"
            return;
        }

    }

}

const updateTime = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    // const currentMonth = currentTime.getMonth();

    if (currentHour > 12) {
        currentHour -= 12;
    }
    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2, '0');
    //  console.log(currentHour);
}
const updateTimes = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    // const currentMonth = currentTime.getMonth();

    if (currentHour > 12) {
        currentHour -= 12;
    }
    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2, '0');
    //  console.log(currentHour);
}
setInterval(updateTime, 1000);
function retype() {
    document.getElementById("something").innerHTML = typing.value
}

function Video({ video }) {
    return (
        `
  <div>
        <Thumbnail video={video} />
        <a href={video.url}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </a>
        <LikeButton video={video} />
     </div>
     `
        //   console.log(video);
    );
}