document.getElementById('click').addEventListener('click', agerr)
let age = 0

function agerr () {
  age = document.getElementById('table').value
  if (age >= 17) {
    document.getElementById('name').innerHTML = 'You are allowed to see - XVII+'
  } else if (age >= 13) {
    document.getElementById('name').innerHTML = 'You are allowed to see - XIII+'
  } else if (age >= 5) {
    document.getElementById('name').innerHTML = 'You are allowed to see - V+'
  } else {
    document.getElementById('name').innerHTML = 'You are forbiden to see any movie, my child'
  }
}
