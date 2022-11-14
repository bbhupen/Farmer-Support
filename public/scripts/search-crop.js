const cropSearch = document.getElementById('formCropSearch')
const searchResult = document.getElementById('searchResult')

cropSearch.addEventListener('submit', async(e) => {
    e.preventDefault()

    let data = new FormData(cropSearch)

    const formDataObjects = Object.fromEntries(data.entries())

    console.log(formDataObjects['cropname'])


    window.location.replace(`/search-result?q=${formDataObjects['cropname'].toLowerCase()}`)

   
})

