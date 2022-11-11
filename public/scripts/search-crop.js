const cropSearch = document.getElementById('formCropSearch')
const searchResult = document.getElementById('searchResult')

cropSearch.addEventListener('submit', async(e) => {
    e.preventDefault()

    let data = new FormData(cropSearch)

    const formDataObjects = Object.fromEntries(data.entries())
    const jsonFormData = JSON.stringify(formDataObjects)

    console.log(jsonFormData)

    fetch('http://127.0.0.1:5000/crop-search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonFormData
    })
    .then(response => response.json())
    .then(result =>
        searchResult.innerHTML = `<div class=\"container py-2 mx-auto h-10 \" style=\"margin: 4rem;\">\n\n                    <div class=\"row\">\n                        <div class=\"col-sm py-2 py-md-3\">\n                            <div class=\"card card-body\" style=\"justify-content: center; background-color: #fafaf5\">\n                                <h1 class=\"text-center\"\n                                    style=\"color: black; font-size: 50px; text-transform: capitalize; text-decoration: underline; font-family: serif; \">\n                                    ${result['title']}</h1>\n                                <br>\n\n                                <img src=\"images\\crop_images\\${result['title']}.jpg\" class=\"rounded center\"\n                                    style=\"padding: 0 270px\" alt=\"Image\">\n\n                                <br>\n                                <p class=\"text-center\" style=\"color: black; font-size: 30px; font-family: serif; \">\n                                    Scientific name: <i> ${result['sc-name']} </i></p> <br>\n                                <p class=\"text-center\"\n                                    style=\"color: black; font-size: 36px; font-family: serif; text-decoration: underline;\">\n                                    Description: </p>\n                                <p class=\"text-center\" style=\"color: black; font-size: 26px; font-family: serif; \"> ${result['desc']}</p> <br>\n                                <p class=\"text-center\"\n                                    style=\"color: black; font-size: 36px; font-family: serif; text-decoration: underline;\">\n                                    Cultivation method: </p>\n                                <p class=\"text-center\" style=\"color: black; font-size: 26px; font-family: serif; \"> ${result['cult']}</p> <br>\n                                <p class=\"text-center\"\n                                    style=\"color: black; font-size: 36px; font-family: serif; text-decoration: underline;\">\n                                    Climatic conditions: </p>\n                                <p class=\"text-center\" style=\"color: black; font-size: 26px; font-family: serif; \">${result['climate']}</p> <br>\n\n                            </div>\n\n\n                        </div>\n                    </div>\n\n                </div>`)
        .then(error => console.log(`This is the error ${error}`))

})



// window.location.replace(`/search-result?q=${result['result']}`)