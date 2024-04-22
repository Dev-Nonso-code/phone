let anArray = ['myArray', 'yourArray', 'hisArray', 'herArray', 'theirArry']
console.log(anArray);
anArray.splice(0,1)
console.log(anArray);
let myinp = document.getElementById("myinp");
let disp = document.getElementById("screen");
let todo = document.getElementById("todo");
let mylist = [];

todo.style.display = "none"
function add(){
    disp.innerHTML = ""
    mylist.push(myinp.value)
  //  console.log(mylist);
    for(let index = 0; index < mylist.length; index++){
       const dan = mylist[index]
        disp.innerHTML += `
        <div id="llo">
      <span id="ppo">${dan}</span>
        <button class="btn btn-danger" id="po" onclick='del(${index})'>del</button>
        </div>
        `
    }
}
function todos(){
    todo.style.display = "block"
    holdhome.style.display = "none"
    landingdiv.style.display = "none"
}
function x(){
    todo.style.display = "none"
    holdhome.style.display = "block"
    landingdiv.style.display = "block"
    myinp.value = ""
    return;
}
function del(index){
    disp.innerHTML = ""
    mylist.splice(index, 1);
    console.log(mylist);
    console.log(index);
    for(let index = 0; index < mylist.length; index++){
        const dan = mylist[index]
        disp.innerHTML += `
        <div id="llo">
        <span id="ppo">${dan}</span>
        <button class="btn btn-danger" id="po" onclick='del(${index})'>del</button>
        </div>
        `
    }
}
function clearit(){
    disp.innerHTML = ""
    console.log("hello world");
    mylist = []
    console.log(mylist);
    for(let index = 0; index < mylist.length; index++){
        const dan = mylist[index]
        disp.innerHTML += `
        <div id="lls">
        <span id="ppo">${dan}</span>
        <button class="btn btn-danger" id="po" onclick='del(${index})'>del</button>
        </div>
        `
    }
}