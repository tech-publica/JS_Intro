let btn = document.getElementById("mainBtn");
btn = document.querySelector("#mainBtn");

var t = 8;
console.log(t);
console.log(window.t);

var h = 9;

// nome 
// cognome 
// data nascita
// linguaggi conosciuti
// sesso (radio button)
// email
// telefono (786)-23487986



function f() {
  //var h = 9;
   f2();
   function f2() {
     
       console.log(i);
       console.log(j);
       for(var i = 0; i < 10 ; i++) {
           const j = 2;
           const myArr = [1,2,3];
           myArr.push(4);
           myArr[0] = 11;
           myArr = [];
           console.log(i);
       }
        
   }
}

f();
console.log("fine");
let c = {
    nome : "pippo",
    cognome : null
};

let cc = null;
//console.log("C: ");
//console.log(cc);

//console.log(z);

var z = "ciccio";
//hoisting




//console.log("btn");

//console.log(btn);
let btn1 = $("#mainBtn");
btn1.click(myFunction);
console.log(btn1);

//btn.onclick = myFunction;
// first class functions
btn.addEventListener("click", myFunction);

let btn2 = document.getElementById("mainBtn2");
console.log(this);
btn2.addEventListener("click", (evt) => {
    evt = "pippo";
    console.log("ciao");
    console.log(this);
});

//btn.onclick = myFunction;


function myFunction(evt) {
let b = evt.target;
if(target == btn) {
    evt.stopPropagation();
    evt.preventDefault();
}
  console.log("hello js world from file for event in JS!");
  console.log(evt);  
}



