const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const firstName = form['first-name'].value
  const lastName = form['last-name'].value
  const email = form['email'].value
  const password = form['password'].value

  if (firstName === '') {
    showError('first-name', 'First Name cannot be empty')
  } else {
    removeError('first-name')
  }

  if (lastName === '') {
    showError('last-name', 'Last Name cannot be empty')
  } else {
    removeError('last-name')
  }

  if (email === '') {
    showError('email', 'Looks like this is not an email')
  } else if (!validateEmail(email)) {
    showError('email', 'We need a valid email!!!!')
  } else {
    removeError('email')
  }

  if (password === '') {
    showError('password', 'Password cannot be empty')
  } else {
    removeError('password')
  }
})

function showError(inputName, errorMessage) {
  const formControl = form[inputName].parentNode
  formControl.classList.add('error')

  const errorFormMessage = formControl.querySelector('.error-form-message')
  errorFormMessage.innerText = errorMessage
}

function removeError(inputName) {
  const formControl = form[inputName].parentNode
  formControl.classList.remove('error')
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
