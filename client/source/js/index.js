var BrandMailLink = document.getElementById('brands')
var AgencyMailLink = document.getElementById('agencies')
var ModalPopUpForm = document.getElementById('ModalForm')
var CloseButton = document.getElementById('CloseButton')

AgencyMailLink.addEventListener('click', function (evt) {
  evt.preventDefault()
  ModalPopUpForm.style.display = 'block'
  CloseButton.addEventListener('click', function () {
    ModalPopUpForm.style.display = 'none'
  })
})
BrandMailLink.addEventListener('click', function (evt) {
  evt.preventDefault()
  ModalPopUpForm.style.display = 'block'
  CloseButton.addEventListener('click', function () {
    ModalPopUpForm.style.display = 'none'
  })
})
