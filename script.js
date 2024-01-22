
const navBar = document.getElementById("navbarid");

const bars = document.getElementById("barIcon");

const xmark = document.getElementById("xmarkIcon");


bars.onclick = ()=>{
    navBar.style.left = "0rem";
    console.log(bars)
}

xmark.onclick = ()=>{
    navBar.style.left = "-40rem"
}
