

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

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}