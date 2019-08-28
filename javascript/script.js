
window.history.forward();
console.log(window.history)

const story = document.getElementsByClassName("story");
const a1 = document.getElementById("ancorone");
const a2 = document.getElementById("ancortwo");
const a3 = document.getElementById("ancorthree");
const a4 = document.getElementById("ancorfour");
let edit = document.getElementsByClassName("story")[0];
let text;




let ancorone, ancoortwo, ancorthree, ancorfour;
if (a1 != null) { ancorone = a1.innerHTML.split(""); a1.innerHTML = ""; a1.style.display = "none"; }
if (a2 != null) { ancortwo = a2.innerHTML.split(""); a2.innerHTML = ""; a2.style.display = "none"; }
if (a3 != null) { ancorthree = a3.innerHTML.split(""); a3.innerHTML = ""; a3.style.display = "none"; }
if (a4 != null) { ancorfour = a4.innerHTML.split(""); a4.innerHTML = ""; a4.style.display = "none"; }
text = edit.innerHTML;
let ancor = 0;
edit.innerHTML = "";
text = text.split("");
let index = 0;

let interval = setInterval(e => {
    if (index >= text.length) {
        index = 0;
        ancor++;
        if (a1 != undefined && ancor == 1) { edit = a1; text = ancorone; a1.style.display = "flex"; } else if (ancor == 1) ancor++;
        if (a2 != undefined && ancor == 2) { edit = a2; text = ancortwo; a2.style.display = "flex"; } else if (ancor == 2) ancor++;
        if (a3 != undefined && ancor == 3) { edit = a3; text = ancorthree; a3.style.display = "flex"; } else if (ancor == 3) ancor++;
        if (a4 != undefined && ancor == 4) { edit = a4; text = ancorfour; a4.style.display = "flex"; console.log("happend"); } else if (ancor == 4) ancor++;
        if (ancor > 4) clearInterval(interval);
    } else {
        edit.innerHTML += text[index];
        index++;
    }

}, 40);

document.addEventListener("mousedown", e => {
    edit.innerHTML = text.join("");
    index = text.length;
});


document.addEventListener("keydown", e => {
    let road;
    if (e.key == "1") {
        road = document.querySelector(".choice a:nth-child(1)");
        if (road != null)
            this.document.location.href = road.href;
        //ancorone
    } else if (e.key == "2") {
        road = document.querySelector(".choice a:nth-child(2)");
        if (road != null)
            this.document.location.href = road.href;
        //ancortwo
    } else if (e.key == "3") {
        road = document.querySelector(".choice a:nth-child(3)");
        if (road != null)
            this.document.location.href = road.href;
        //ancorthree
    } else if (e.key == "4") {
        road = document.querySelector(".choice a:nth-child(4)");
        if (road != null)
            this.document.location.href = road.href;
        //ancorfour
    } else if (e.key = " ") {
        edit.innerHTML = text.join("");
        index = text.length;
    }
});

