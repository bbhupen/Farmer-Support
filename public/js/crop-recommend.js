const formFieldData = document.getElementById('formFieldData')

formFieldData.addEventListener('submit', async(e) => {
    e.preventDefault()

    let data = new FormData(formFieldData)

    const formDataObjects = Object.fromEntries(data.entries())
    const jsonFormData = JSON.stringify(formDataObjects)

    console.log(jsonFormData)

    fetch('http://127.0.0.1:5000/crop-predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonFormData
    })
    .then(response => response.json())
    .then(result => window.location.replace(`/crop-result?q=${result['result']}`))
    .then(error => console.log(`This is the error ${error}`))

    // window.location.replace(`/crop-result/${result}`);

})