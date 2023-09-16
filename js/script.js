/**
 * declare and initialize the quotes array.
 */
const quotes = []
quotes.push({
    quote: "A rose by any other name would smell as sweet.",
    source: "William Shakespeare",
    citation: "Romeo and Julietm, Act II, Scene II"
}, {
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    source: "Thomas Edison"
}, {
    quote: "I think therefore I am.",
    source: "Rene Descartes"
}, {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt"
}, {
    quote: "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
    source: "Abraham Lincoln",
    year: 1858
})

/**
 * stores the index of quote currently selected to prevent repeating quote
 */
var currentIndex = 0;

/**
 * Pick a random quote from the quotes array
 */
getRandomQuote = ()=>{
    const index = Math.floor(Math.random() * quotes.length)
    if(currentIndex===index) {
        return getRandomQuote();
    }else{
        currentIndex = index;
    }
    return quotes[index];
}

/**
 * Display a random quote inside the "quote-box" div
 */
printQuote = ()=>{
    quote = getRandomQuote();
    let html = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`
    if(quote.citation) html+=`<span class="citation">${quote.citation}</span>`;
    if(quote.year) html+=`<span class="year">${quote.year}</span>`;
    html+="</p>";
    document.querySelector("#quote-box").innerHTML = html;

}


/** 
 * setup event listener for "Load quote" button. Invoke printQuote when pressed 
 */
document.getElementById('load-quote').addEventListener("click", printQuote)