

function atualizarRelogio() {
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    horas = formatarTempo(horas);
    minutos = formatarTempo(minutos);
    segundos = formatarTempo(segundos);

    document.getElementById("relogio").innerText = horas + ":" + minutos + ":" + segundos;
}

function formatarTempo(tempo) {
    return tempo < 10 ? "0" + tempo : tempo;
}

setInterval(atualizarRelogio, 1000);
var dark = 0;

function darkMode() {
    var element = document.body;
    dark = dark + 1;
    element.classList.toggle("dark-mode");
    document.getElementById("botaodark").src = "/assets/light-mode.png";
    if (dark == 2){
        document.getElementById("botaodark").src = "/assets/dark-mode.png";
        dark = 0
    }
}