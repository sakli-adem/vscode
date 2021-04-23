var codes=document.getElementById("textarea");
var play=document.getElementById("run");
var rem=document.getElementById("del");
var result=document.getElementById("result");

play.onclick =()=>{
    result.innerHTML=codes.value;
    localStorage.setItem("RESULT",codes.value)
}
rem.onclick=()=>{
    result.innerHTML="";
   // codes.value="";
}
onload=()=>{
    codes.value= localStorage.getItem("RESULT")
}