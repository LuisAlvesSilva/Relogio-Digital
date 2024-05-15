const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const dia = document.getElementById('dia')
const mes = document.getElementById('mes')
const ano = document.getElementById('ano')

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    let d = dateToday.getDay();
    let m = dateToday.getMonth();
    let a = dateToday.getFullYear();

    horas.textContent = fixTime(hr);
    minutos.textContent = fixTime(min);
    segundos.textContent = fixTime(sec);
    dia.textContent = fixTime(d);
    mes.textContent = fixTime(m);
    ano.textContent = fixTime(a);

    function fixTime(time){
        return time < 10 ? '0' + time : time
    }
})
