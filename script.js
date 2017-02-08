var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var descriptionTextarea = document.getElementById('description')
var phoneInput = document.getElementById('phone')
var emailInput = document.getElementById('email')
var previewParagraph = document.getElementById('preview')
var htmlParagraph = document.getElementById('html')

var updatePreview = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var description = descriptionTextarea.value
  var phone = phoneInput.value
  var email = emailInput.value
  previewParagraph.innerHTML =
  '<h1>' + 'Hi, my name is ' + firstName + lastName + '!' + '</h1>' + '<p>' + description + '</p>' + '<p>' + 'If you\'re interested in a date, you can email me at ' + '<a href="mailto:email" target="_blank">' + email + '</a>' + ' or give me a call at ' + '<a href="tel:phone" target="_blank">' + phone + '</a>' + '</p>' + '.'
}
var updateHtml = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var description = descriptionTextarea.value
  var phone = phoneInput.value
  var email = emailInput.value
  htmlParagraph.textContent =
  '<h1>' + 'Hi, my name is ' + firstName + ' ' + lastName + '!' + '</h1>' + '<p>' + description + '</p>' + '<p>' + 'If you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' + ' or give me a call at ' + '<a href="tel:' + phone + ' " target="_blank">' + phone + '</a>' + '</p>' + '.'
}
firstNameInput.addEventListener('input', updatePreview)
lastNameInput.addEventListener('input', updatePreview, updateHtml)
descriptionTextarea.addEventListener('input', updatePreview)
phoneInput.addEventListener('input', updatePreview)
emailInput.addEventListener('input', updatePreview)
firstNameInput.addEventListener('input', updateHtml)
lastNameInput.addEventListener('input', updateHtml)
descriptionTextarea.addEventListener('input', updateHtml)
phoneInput.addEventListener('input', updateHtml)
emailInput.addEventListener('input', updateHtml)
