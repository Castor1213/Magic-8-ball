const ball = document.querySelector('.ball-img')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const input = document.querySelector('input')

const answersArr = ['Tak!', 'Nie', 'Może', 'Ciężko powiedzieć', 'Lepiej byś nie znał odpowiedzi na to pytanie ...']


const checkInput = () => {
	ball.classList.remove('shake-animation')
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer()
		error.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem "?"'
		answer.textContent = ''
	} else {
		error.textContent = 'Zadaj pytanie!'
		answer.textContent = ''
	}
}

const generateAnswer = () => {
	const number = Math.floor(Math.random() * 5)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
}

const shakeBall = () => {
	ball.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}

ball.addEventListener('click', shakeBall)
