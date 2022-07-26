let total=4;
let count=0;

let prev=document.getElementById("prev");
prev.addEventListener("click",previous);

function previous(){
    document.getElementById(`${count}`).classList.add("hide");
    count=((count+total)-1)%total;
    document.getElementById(`${count}`).classList.remove("hide");
}

let nx=document.getElementById("next");
nx.addEventListener("click",next);

function next(){
    document.getElementById(`${count}`).classList.add("hide");
    count=(count+1)%total;
    document.getElementById(`${count}`).classList.remove("hide");
}

function displaySlide(n){
    document.getElementById(`${count}`).classList.add("hide");
    document.getElementById(n).classList.remove("hide");
    count=n;
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode==37){
        previous();
    }
    else if(event.keyCode==39){
        next();
    }
    else if(event.keyCode==49 || event.keyCode==50 || event.keyCode==51 || event.keyCode==52){
        displaySlide(event.keyCode-49);
    }
});