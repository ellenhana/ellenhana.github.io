function NumFinding(){
  alert("WARNING! Before entering Kotori's nest, u need to find the True number(a special Int from 1 to 100)!");
  alert("But I'll also offer u a feedback as a kind assistance~");
  alert("Are you ready? To find the true IntNumber from 1 to 100?");

  function randomNum(minNum,maxNum){
  var a=maxNum-minNum;
  return Math.floor(Math.random()*a+minNum);
  }
  var truNum=randomNum(1,100);
  console.log(truNum);

  do{
    var oriAns=prompt("Now, give your NUMBER! ");
    intAns=eval(oriAns);
    if(intAns===truNum){
      var srivSty=document.getElementById("specialRiverStyle");
      srivSty.style.backgroundColor="#f0e68c";
      alert("WOW! U do change the river's color!");}
    else if(intAns>truNum){
      alert("Your answer is greater than the True Number! Try again!");}
    else{
      alert("Your answer is smaller than the True Number! Try again!");}
    }
  while(intAns!=truNum)

}
