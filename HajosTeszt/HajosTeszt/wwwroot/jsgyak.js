    let hova = document.getElementById("ide")
    hova.innerHTML=""

    for (var i = 0; i < 10; i++) {
        var ujdiv = document.createElement("div")
        hova.appendChild(ujdiv)
        ujdiv.innerText = (i+1)
        ujdiv.style.background =`rgba(${30+(30*i)},50,70,0.7)`
}

var faktorialis = function (n) {

        let er = 1;
        for (var i = 2; i <= n; i++) {
            er = er * i;
        }
        return er;
}


window.onload = () => {
    console.log("betöltődött")


let merre = document.getElementById("pascal")
merre.innerHTML = ""

for (var s = 0; s < 10; s++) {

    let sor = document.createElement("div");
    merre.appendChild(sor)
    sor.classList.add("sorban")

    for (var o = 0; o <= s; o++) {
        let szám = document.createElement("div")
        sor.appendChild(szám)
        szám.innerText = faktorialis(s) / (faktorialis(o) * faktorialis(s - o))
        szám.classList.add("elemek")
        
        
    }
        }
    }
