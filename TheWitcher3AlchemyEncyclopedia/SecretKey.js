alert("Tips!The first letter should be CAPITALIZED while answering!");
alert("To Miss Tang: The true answers are in console.");
console.log("Geralt","Zireael");
console.log("I've also made 2 small designs for the situation when users give the wrong answers~");

function dlcSK(){
  document.getElementById("SK2").className="visible";
}

function getAns(){
var ans1 = document.getElementById("q1").value;
var ans2 = document.getElementById("q2").value;
console.log(ans1,ans2);

if(ans1==="Geralt"&&ans2==="Zireael"){
document.getElementById("SK").className="visible";
alert("Congratulations on Finding the Secret Key!");
alert("Before using this Secret Key to add items, u're supposed to open the CONSOLE in the GAME!");
alert("Tips! Try to click Geralt in the bottom right-hand corner~");
}
else if(ans1==="Geralt"&&ans2!="Zireael"){
alert("Sorry u get the wrong answers~ But at least one of them is right.");
}
else if(ans1!="Geralt"&&ans2==="Zireael"){
alert("Sorry u get the wrong answers~ But at least one of them is right.");
}
else{
alert("Sorry both the two answers r wrong. Please try again if u wanna get our Secret key.");
}

}
