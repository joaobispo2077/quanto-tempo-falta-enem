// var now = Date.now();
// var enem = new Date(Date.UTC(2020, 11, 01, 13, 00, 00, 00));

// var nite = Date(Date.parse(enem) - Date.now());


// console.log(now + ' agora');
// console.log(Date.parse(enem) + ' enem');
// var diferenca = Date();

// var diferenca = Date.parse(enem) - now;

// console.log(diferenca + ' tempo restante');


// console.log(Date.parse(nite));
/*      HEAD       
function setCookie(nome, valor, dias){ 
diasms = (new Date()) .getTime() + 1000 * 3600 * 24 * dias; 
dias = new Date(diasms); 
expires = dias.toGMTString(); 
document.cookie = escape(nome) + "=" + escape(valor) + "; expires=" + expires; 
} 
BUTTOM BODY

if (!document.cookie){
setCookie("cookie", "1", 365);
document.write("<font face='verdana' size='1'>Suas Visitas : 1</font>");
} else {
var cont = document.cookie;
var dividindo = cont.split("=");
//document.write(dividindo[1]);
var numero = parseInt(dividindo[1]);
var soma = numero + 1;
document.write("<font face='verdana' size='1'>Suas Visitas : " + soma + "</font>");
setCookie("cookie", soma, 365);
}

*/

function countdown() {
    var now = new Date();

    var eventDate = new Date(2021, 0, 17, 13, 0, 0, 0);
    console.log(`A data do enem é ${eventDate}`);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    console.log(d, h, m, s);


    setTimeout(countdown, 1000);
}

countdown();