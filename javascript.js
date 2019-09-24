function dividirCadena(){
  var input = document.getElementsByClassName('inputPalindromas')[0].value
  var inputSeparar = input.split(" ")
  document.getElementById('new').insertRow(-1).innerHTML = '<td>' + inputSeparar + '<td>'

}
