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

// const options = {
//   method: 'GET',
//   url: 'https://quotes15.p.rapidapi.com/quotes/random/',
//   headers: {
//     'x-rapidapi-key': '301626cf34mshfd321ccdb79b314p10a602jsnf44a97ccd7b8',
//     'x-rapidapi-host': 'quotes15.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });