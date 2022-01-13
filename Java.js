function lets(){
    p1n=document.getElementById("p1n").value;
    p2n=document.getElementById("p2n").value;
   localStorage.setItem("key1", p1n);
   localStorage.setItem("key2", p2n);
   window.location="game.html";
}
