let x=Math.floor(Math.random()*100);
console.log(x);
let cnt=0;
function one(){
    cnt++;
    var num=document.getElementById("number").value;
    document.getElementById("number").value="";
    document.getElementById('showno').innerHTML+=" "+num;
    if(num===""){
        alert("Enter the no");
        return;
    }
    if(cnt==4){
        document.getElementById("showdiv").innerHTML="YOU EXCEED THE LIMIT";
        document.getElementById('submit').disabled=true;
        document.getElementById('showno').innerHTML="";
        document.getElementById('but').innerHTML=`<br><button type="button" onclick="two()">Start new Game</button>`
        cnt=0;
    }
    else if(num==x){
        document.getElementById("showdiv").innerHTML=`<div><h3 id="cong">Congratulations</h3><p>The number is correct</p></div><br>`;
        document.getElementById('submit').disabled=true;
        document.getElementById('but').innerHTML=`<button type="button" onclick="two()">Start new Game</button>`

    }
    else if(num>x){
        document.getElementById("showdiv").innerHTML+=`<div><h3 class="wrong">WRONG</h3><p>The number is HIGH</p></div><br>`;
    }
    else if(num<x){
        document.getElementById("showdiv").innerHTML+=`<div><h3 class="wrong">WRONG</h3><p>The number is LOW</p></div><br>`;
    }
}
function two(){
    document.getElementById('submit').disabled=false;
    document.getElementById('showdiv').innerHTML="";
    document.getElementById('but').innerHTML="";
    document.getElementById('showno').innerHTML=" ";
    x=Math.floor(Math.random()*100);
    console.log(x);

} 