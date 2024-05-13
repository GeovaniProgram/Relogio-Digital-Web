
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
    document.getElementById("botaodark").src = "https://images2.imgbox.com/da/d3/9oymQnsk_o.png";
    document.getElementById("github").src = "https://images2.imgbox.com/98/86/gXmWw59p_o.png";
    document.getElementById("linkedin").src ="https://images2.imgbox.com/90/78/5d0AC1hh_o.png";
    if (dark == 2){
        document.getElementById("github").src = "https://images2.imgbox.com/af/dd/cYb58SPj_o.png";
        document.getElementById("linkedin").src ="https://images2.imgbox.com/09/31/5S00TG1i_o.png";
        document.getElementById("botaodark").src = "https://images2.imgbox.com/d2/1f/eC6GZgjb_o.png";
        dark = 0
    }
}