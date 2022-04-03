function calculateTip(event) {
  event.preventDefault()
  console.log(event)
  var bill = document.getElementById('bill').value
  var serviQual = document.getElementById('serviceQual').value
  var numOfPeople = document.getElementById('people').value

  if ((bill == '') | (serviQual == 0)) {
    alert('Por favor, prencha todos os valores')
  }

  if ((numOfPeople == '') | (numOfPeople <= 1)) {
    numOfPeople = 1
    document.getElementById('each').style.display = 'none'
  } else {
    document.getElementById('each').style.display = 'block'
  }
  var total = (bill * serviQual) / numOfPeople
  total = total.toFixed(2)
  document.getElementById('tip').innerHTML = total
  document.getElementById('totalTip').style.display = 'block'
}

document.getElementById('totalTip').style.display = 'none'
document.getElementById('each').style.display = 'none'

document.getElementById('tipsForm').addEventListener('submit', calculateTip)
