const APIKey = "AIzaSyBIpPUixFadfXduY-mLHPvUUfyCIY6moHA" 

const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&projection=full&key=${APIKey}`)
    console.log(res.data)
    // displayBooks(res.data.items)
});

const displayBooks = (books) => {
    for (let result of books) {
        const img = document.createElement('IMG');
        img.src = result.volumeInfo.imageLinks.thumbnail
        document.body.append(img)
    }
}