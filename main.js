const input = document.querySelector('.username')
const nextBtn = document.querySelector('.next')
const page = document.querySelector('.container')
const popup = document.querySelector('.shadow')
const error = document.querySelector('.error')
const outMessege = document.querySelector('.greetings')
const messege = document.querySelector('.hello')

const closePopup = () => {
    const reg =new RegExp (/^[a-zA-ZęółśążźćńĘÓŁŚĄŻŹĆŃ]+$/);
    const name=reg.test(input.value)
	if (input.value === '') {
        page.style.display = 'none'
		outMessege.style.display = 'none'
		popup.style.display = 'flex'
		error.style.display = 'flex'
		error.textContent = 'Podaj proszę imię!'
    }else if (!name) {
        error.textContent = 'Czy to aby napewno imię?'
        error.style.display = 'flex'
        input.value = ''
    } else {
        page.style.display = 'flex'
		outMessege.style.display = 'flex'
		page.classList.add('slide-in')
		outMessege.classList.add('slide-out')
		popup.style.display = 'none'
		messege.textContent = `Witaj ${input.value}! Poznajmy się zatem. Tylko czekaj aż sie przebiję...bo trudno się do Ciebie dostać:)`
	}
}

nextBtn.addEventListener('click', closePopup)
