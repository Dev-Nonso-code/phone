let inputo = document.getElementById("inputo");

inputo.style.display = "none"


let passwords = {
    pass: "1234",
}
console.log(passwords);

let robot = [
    vovo = {
        name: "what did you eat today",
        age: "have you eaten today",
        life: "how is life",
    }, robots = {
        life: "how is life",
        name: "what is your name",
        age: "how old are you",
        city: "where are you from",
        know: "where are you now",
        love: "did you love me",
        gots: "can i be your friend",
        got: "can we be friend",
        live: "where do you live",
        f: "who is your father",
        h: "who is your mother",
        g: "did you know SQI",
        q: "what is the biggest city in nigeria",
        gg: "did you know rigba",
        gs: "who is rigba",
        us: "did you know nonsoglobal",
        uss: "who is nonsoglobal",
        yt: "who is president of nigeria",
        hh: "did you have brother",
        ghg: "did you have sister",
        boo: "what is my location",
    }
]
function inpt(){
    inputo.style.display = "block"
}
function locked() {
    main.style.display = "none"
    body.style.display = "block"
    return;
}
function onpower(){
    phone.style.display = "block"
    offpower.style.display = "none"
    console.log("hello world");
    alert("phone powering on please wait")
    return;
}
function fingerun() {
    if (inputo.value == passwords.pass) {
        alert("PHONE UNLOCKED")
        main.style.display = "block"
        body.style.display = "none"
        return;
    } else if (inputo.value == "" || inputo.value != passwords.pass) {
        alert("inncorret details")
        return;
    }
}
function robotf() {
    if (inputs.value === vovo.life) {
        alert("Life is Hard $ Soft")
        return;
    }
    if (inputs.value == vovo.age) {
        alert("YEAH")
        return;
    }
    if (inputs.value == vovo.name) {
        alert("juice with water ONLY")
        return;
    }
    if (inputs.value == robots.boo) {
        alert("location loading")
        redirect_url: "https://www.google.com/maps/d/viewer?mid=1B1lAsUpYFg82Je7XN1_cxRPf1UU&hl=en_US&ll=9.114362933771048%2C8.675277000000015&z=5";
        return;
    }
    if (inputs.value == robots.ghg) {
        alert("YEAH")
        return;
    }
    if (inputs.value == robots.yt) {
        alert("MUHAMMED BUHARI")
        return;
    }
    if (inputs.value == robots.hh) {
        alert("YEAH")
        return;
    }
    if (inputs.value == robots.us) {
        alert("YEAH")
        return;
    }
    if (inputs.value == robots.uss) {
        alert("DEVIL AND GOD")
        return;
    }
    if (inputs.value == robots.gs) {
        alert("he is my mother friend")
        return;
    }
    if (inputs.value == robots.gg) {
        alert("yeah")
        return;
    }
    if (inputs.value == robots.q) {
        alert("IBADAN")
        return;
    }
    if (inputs.value == robots.g) {
        alert("yeah, that is my hometown")
        return;
    }
    if (inputs.value == robots.h) {
        alert("nonsoglobal")
        return;
    }
    if (inputs.value == robots.f) {
        alert("God")
        return;
    }
    if (inputs.value == robots.name) {
        alert("my name is Robot")
        return;
        // res.document.getElementById('h1')
    }
    if (inputs.value == robots.live) {
        alert("i live  at agala, yemetu")
        return;
    }
    if (inputs.value == robots.age) {
        alert("i am two days old")
        return;
        // res.document.getElementById('h1')
    }
    if (inputs.value == robots.city) {
        alert("i am from earth")
        return;
        // res.document.getElementById('h1')
    }
    if (inputs.value == robots.know) {
        alert("i am with you")
        return;
        //res.document.getElementById('h1')
    }
    if (inputs.value == robots.love) {
        alert("i am shy")
        return;
    }
    if (inputs.value == robots.gots) {
        alert("yeah, we already friend")
        return;
    }
    if (inputs.value == robots.got) {
        alert("yeah, we already friend")
        return;
    }
    else if (inputs.value !== robots.data) {
        alert("i don't understand you")
        return;
    }
}

console.log(document.getElementById("inputs").value);
console.log(robots);
