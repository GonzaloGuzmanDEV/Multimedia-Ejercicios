let paginaPrincipal = document.getElementById("body");
let firstH1 = document.getElementById("firstH1");
let secondH1 = document.getElementById("secondH2");
let thirdH1 = document.getElementById("thirdH3");
let buttonWhite = document.getElementById("buttonWhite");
let buttonBlack = document.getElementById("buttonBlack");


buttonBlack.onclick = function () {

    paginaPrincipal.classList.toggle("bodyCI");
}

buttonWhite.onclick = function () {

    paginaPrincipal.classList.toggle("bodyC");
}