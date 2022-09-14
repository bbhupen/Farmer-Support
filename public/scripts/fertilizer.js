const formFertilizer = document.getElementById('formFertilizer')

formFertilizer.addEventListener('submit', async(e) => {
    e.preventDefault()

    let data = new FormData(formFertilizer)

    const formDataObjects = Object.fromEntries(data.entries())
    const jsonFormData = JSON.stringify(formDataObjects)

    console.log(jsonFormData)

    fetch('http://127.0.0.1:5000/fertilizer-predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonFormData
    })
    .then(response => response.json())
    .then(result => window.location.replace(`/fertilizer-result?q=${result['result']}`))
    .then(error => console.log(`This is the error ${error}`))

})