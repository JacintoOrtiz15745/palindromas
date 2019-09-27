function reloj(){
  var fecha = new Date()
  var hora = fecha.getHours()
  var min = fecha.getMinutes()
  var seg = fecha.getSeconds()
  var recarga = setTimeout('reloj()',500)
  document.getElementById('print').innerHTML =  hora + ':' + min + ':' + seg
}

var cont = 0

function dividirCadena(){

  var input = document.getElementsByClassName('inputPalindromas')[0].value
  var inputSeparar = input.split(" ")

  var inputReverse = document.getElementsByClassName('inputPalindromas')[0].value
  var inputSepararReverse = inputReverse.split("").reverse("").join("")
  var junto = new Array()
  junto.push(inputSepararReverse) 

  for(var i = cont; i <= inputSeparar.length - 1; i++){
    if(inputSeparar[cont] == junto[cont]){
      document.getElementById('new').insertRow(-1).innerHTML = '<tr><td>' + inputSeparar + '</td><td>' + inputSepararReverse + '</td><td>' + '<i class="fa fa-check" aria-hidden="true"></i>' + '</td></tr>'
    } else if(inputSeparar[cont] != junto[cont]){
      document.getElementById('new').insertRow(-1).innerHTML = '<tr><td>' + inputSeparar + '</td><td>' + inputSepararReverse + '</td><td></td></tr>'
    }
  }
}
