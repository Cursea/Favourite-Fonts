const doc = window.document
const customText = doc.querySelector('#custom-text')
const sample = doc.querySelectorAll('.sample-text')

customText.addEventListener('input', updateValue)

function updateValue(e) {
  sample.forEach((element) => {
    element.textContent = e.target.value
  })
}
