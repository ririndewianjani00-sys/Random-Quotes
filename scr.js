let quote = document.getElementById('quote');
let author = document.getElementById('author');

console.log(quote);
console.log(author);

async function getDataApi() {
    
    try {
        let result = await fetch('https://dummyjson.com/quotes/random')

        let data = await result.json();

        console.log(data);
        console.log(data.quote);
        console.log(data.author);

        quote.innerHTML = data.quote;
        author.innerHTML = data.author;

    } catch (error) {
        console.log("Error mys :" + error);
    }

}
