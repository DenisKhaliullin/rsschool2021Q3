const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');


async function getQuotes() {  
    const quotes = 'js/data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
    let randomIndex = Math.floor(Math.random() * data.length);
    quote.textContent = `${data[randomIndex].quote}`;
    author.textContent = `${data[randomIndex].author}`;
}


changeQuote.addEventListener('click', getQuotes)
  
export { getQuotes };