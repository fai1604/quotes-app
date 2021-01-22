const form = document.querySelector('#quotes')
const headingDisplay = document.querySelector('#heading')
const quoteDisplay = document.querySelector('#quote')
const authorDisplay = document.querySelector('#author')


form.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const name = form.elements.query.value;
    const res = await axios.get('https://type.fit/api/quotes')
    const num = Math.floor(Math.random() * 1642)
    const selectedQuote = res.data[num].text
    const author = res.data[num].author
    const heading = `Dear ${name}, `
    
    headingDisplay.textContent = heading
    quoteDisplay.textContent = selectedQuote;
    authorDisplay.textContent = author
})

