function reloj(){
  var fecha = new Date()
  var hora = fecha.getHours()
  var min = fecha.getMinutes()
  var seg = fecha.getSeconds()
  var recarga = setTimeout('reloj()',500)
  document.getElementById('print').innerHTML =  hora + ':' + min + ':' + seg
}

function dividirCadena(){
  var input = document.getElementsByClassName('inputPalindromas')[0].value
  var inputSeparar = input.split(" ")

  var inputReverse = document.getElementsByClassName('inputPalindromas')[0].value
  var inputSepararReverse = inputReverse.split("").reverse("").join("")

  for(var i = 0; i < inputSeparar.length; i++){
    if(inputSeparar.every == inputSepararReverse.every)
    {
      document.getElementById('new').insertRow(-1).innerHTML = '<tr><td>' + inputSeparar[i] + '</td><td>' + inputSepararReverse + '</td><td>' + si + '</td></tr>'

    } else{
      document.getElementById('new').insertRow(-1).innerHTML = '<tr><td>' + inputSeparar[i] + '</td><td>' + inputSepararReverse + '</td></tr>'
    }
  }
}
