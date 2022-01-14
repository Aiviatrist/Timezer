p1s=0;
p2s=0;
player1=localStorage.getItem("key1");
player2=localStorage.getItem("key2");

document.getElementById("play1na").innerHTML=player1;
document.getElementById("play2na").innerHTML=player2;
document.getElementById("sco1").innerHTML=p1s;
document.getElementById("sco2").innerHTML=p2s;
document.getElementById("pq").innerHTML="Question turn : "+player1;
document.getElementById("pa").innerHTML="Answer turn : "+player2;

function dell(){
    var no1=document.getElementById("no1in").value;
    var no2=document.getElementById("go2inn").value;
    solvent= parseInt(no1)*parseInt(no2);
    var question="<h4>"+no1+" X "+no2+"</h4>";
    var input="<br>Answer : <input id='gogy' type='text' placeholder='Enter your answer'>";
    var button="<br><button class='btn btn-info' onclick='meg()'>Check</button>"
    var row= question + input + button ;
    document.getElementById("output").innerHTML=row;
    document.getElementById("no1in").value="";
    document.getElementById("go2inn").value="";
}
var quest="player1";
var answer="player2";

function meg(){
    var ga=document.getElementById("gogy").value;
    if(ga==solvent){
        if(answer=="player1"){
            p1s=p1s+1;
            document.getElementById("sco1").innerHTML=p1s;
        }
        else{
            p2s=p2s+1;
            document.getElementById("sco2").innerHTML=p2s;
        }
    }
    if(quest=="player1"){
        quest="player2";
        document.getElementById("pq").innerHTML="Question turn : "+player2;
    }
    else{
        quest="player1";
        document.getElementById("pq").innerHTML="Question turn : "+player1;
    }

    if(answer=="player1"){
        answer="player2";
        document.getElementById("pa").innerHTML="Answer turn : "+player2;
    }
    else{
        answer="player1";
        document.getElementById("pa").innerHTML="Answer turn : "+player1;
    }
    document.getElementById("output").innerHTML="";
}