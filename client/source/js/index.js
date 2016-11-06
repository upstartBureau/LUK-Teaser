var BrandMailLink = document.getElementById('brands')
var AgencyMailLink = document.getElementById('agencies')
var ModalPopUpForm = document.getElementById('ModalForm')
var CloseButton = document.getElementById('CloseButton')
var EntityName = document.getElementById('EntityName')

var CancelButton = document.getElementById('CancelButton')
var SubmitButton = document.getElementById('SubmitButton')
var MailFormData = {
  name: undefined,
  entity: undefined,
  email: undefined,
  message: undefined
  // name: document.getElementById('UserName').value,
  // entity: document.getElementById('EntityName').value,
  // email: document.getElementById('EmailAddress').value,
  // message: document.getElementById('EmailMessage').value
}
var Request = new XMLHttpRequest()

var HideModal = function () {
  ModalPopUpForm.style.opacity = '0'
  window.setTimeout(function () {
    ModalPopUpForm.style.display = 'none'
  }, 400)
}
var ShowModal = function () {
  ModalPopUpForm.style.display = 'block'
  window.setTimeout(function () {
    ModalPopUpForm.style.opacity = '1'
  }, 400)
}
var ErrorsExist = true
var emailRXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i

AgencyMailLink.addEventListener('click', function (evt) {
  evt.preventDefault()
  EntityName.placeholder = 'Agency Name*'
  ShowModal()
  CloseButton.addEventListener('click', function () {
    HideModal()
  })
})
BrandMailLink.addEventListener('click', function (evt) {
  evt.preventDefault()
  EntityName.placeholder = 'Company Name*'
  ShowModal()
  CloseButton.addEventListener('click', function () {
    HideModal()
  })
})
CancelButton.addEventListener('click', function (evt) {
  evt.preventDefault()
  HideModal()
})
var ActivateSuccess = function (elem) {
  let SuccessSVG = document.getElementById(elem).nextElementSibling
  let ErrorSVG = SuccessSVG.nextElementSibling
  SuccessSVG.querySelector('.SuccessIcon').classList.remove('inactive')
  console.log('set listener')
  if (document.getElementById(elem).classList.contains('error')) {
    ErrorSVG.querySelector('.ErrorIcon').classList.add('inactive')
    document.getElementById(elem).classList.remove('error')
  }
  ErrorsExist = false
}
var ActivateError = function (elem) {
  let SuccessSVG = document.getElementById(elem).nextElementSibling
  let ErrorSVG = SuccessSVG.nextElementSibling
  if (!document.getElementById(elem).classList.contains('inactive')) {
    SuccessSVG.querySelector('.SuccessIcon').classList.add('inactive')
  }
  ErrorSVG.querySelector('.ErrorIcon').classList.remove('inactive')
  document.getElementById(elem).classList.add('error')
  ErrorsExist = true
}

var RequiredInputs = document.querySelectorAll('input[type="text"]')
var EmailInput = document.getElementById('EmailAddress')
RequiredInputs.forEach((val, idx) => {
  document.getElementById(val.id).addEventListener('blur', function () {
    if (val.value) {
      ActivateSuccess(val.id)
    }
    if (!val.value) {
      ActivateError(val.id)
    }
  })
})
EmailInput.addEventListener('blur', function () {
  if (!emailRXP.test(EmailInput.value)) {
    ActivateError('EmailAddress')
  } else {
    ActivateSuccess('EmailAddress')
  }
})
SubmitButton.addEventListener('click', function (evt) {
  evt.preventDefault()
  console.log('fired!')
  if (!ErrorsExist) {
    MailFormData = {
      name: document.getElementById('UserName').value,
      entity: document.getElementById('EntityName').value,
      email: document.getElementById('EmailAddress').value,
      message: document.getElementById('EmailMessage').value
    }
    Request.open('POST', 'http://localhost:8080/send', true)
    Request.setRequestHeader('Content-type', 'application/json')
    Request.send(JSON.stringify(MailFormData))
  }
})
