const $form = document.querySelector('#contactForm')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  });
  if(response.ok) {
    this.reset()
    const $success = document.querySelector('#submitSuccessMessage')
    $success.style.removeProperty('display')
    this.querySelector('button').disabled = true
    setTimeout(() => {
        $success.style.display = 'none'
        this.querySelector('button').disabled = false
    }
    , 3000)
  } else {
    const $error = document.querySelector('#submitErrorMessage')
    $error.style.removeProperty('display')
    this.querySelector('button').disabled = true
    setTimeout(() => {
        $error.style.display = 'none'
        this.querySelector('button').disabled = false
    }
    , 3000)
  }
}
