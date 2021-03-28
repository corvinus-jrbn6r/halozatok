var kérdések;
var kérdés = 0;

function letöltés() {
fetch('/questions.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0)
}


function kérdésMegjelenítés(kérdés) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdés].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;
}

window.onload = function () {
    letöltés();
   

    document.getElementById("előre").onclick = function előre() {
        if (kérdés == 2) {
            kérdés = 0;
        }
        else {
            kérdés++;
        }
        console.log()
        kérdésMegjelenítés(kérdés);
        document.getElementById("válasz1").style.background = "initial";
        document.getElementById("válasz2").style.background = "initial";
        document.getElementById("válasz3").style.background = "initial";

        document.getElementById("válasz1").style.pointerEvents = "initial";
        document.getElementById("válasz2").style.pointerEvents = "initial";
        document.getElementById("válasz3").style.pointerEvents = "initial";
    }

    document.getElementById("vissza").onclick = function vissza() {
        if (kérdés == 0) {
            kérdés = 2;
        }
        else {
            kérdés--;
        }
        kérdésMegjelenítés(kérdés);
        document.getElementById("válasz1").style.background = "initial";
        document.getElementById("válasz2").style.background = "initial";
        document.getElementById("válasz3").style.background = "initial";

        document.getElementById("válasz1").style.pointerEvents = "initial";
        document.getElementById("válasz2").style.pointerEvents = "initial";
        document.getElementById("válasz3").style.pointerEvents = "initial";
    }

    document.getElementById("válasz1").onclick = () => {

        if (kérdések[kérdés].correctAnswer == 1) {
            document.getElementById("válasz1").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz1").style.background = "red";
            document.getElementById("válasz" + kérdések[kérdés].correctAnswer).style.background = "darkgreen";
        }

       document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';

    }

    document.getElementById("válasz2").onclick = () => {

        if (kérdések[kérdés].correctAnswer == 2) {
            document.getElementById("válasz2").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz2").style.background = "red";
            document.getElementById("válasz" + kérdések[kérdés].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';
    }

    document.getElementById("válasz3").onclick = () => {

        if (kérdések[kérdés].correctAnswer == 3) {
            document.getElementById("válasz3").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz3").style.background = "red";
            document.getElementById("válasz" + kérdések[kérdés].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';
    }
}