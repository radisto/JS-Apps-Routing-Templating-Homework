var arr = [{"book":"The Grapes of Wrath","author":"John Steinbeck","price":"34,24","language":"French"},
    {"book":"The Great Gatsby","author":"F. Scott Fitzgerald","price":"39,26","language":"English"},
    {"book":"Nineteen Eighty-Four","author":"George Orwell","price":"15,39","language":"English"},
    {"book":"Ulysses","author":"James Joyce","price":"23,26","language":"German"},
    {"book":"Lolita","author":"Vladimir Nabokov","price":"14,19","language":"German"},
    {"book":"Catch-22","author":"Joseph Heller","price":"47,89","language":"German"},
    {"book":"The Catcher in the Rye","author":"J. D. Salinger","price":"25,16","language":"English"},
    {"book":"Beloved","author":"Toni Morrison","price":"48,61","language":"French"},
    {"book":"Of Mice and Men","author":"John Steinbeck","price":"29,81","language":"Bulgarian"},
    {"book":"Animal Farm","author":"George Orwell","price":"38,42","language":"English"},
    {"book":"Finnegans Wake","author":"James Joyce","price":"29,59","language":"English"},
    {"book":"The Grapes of Wrath","author":"John Steinbeck","price":"42,94","language":"English"}];

var groupLanguageSortAuthorPrice = _.chain(arr)
    .sortByAll(['author', 'price'])
    .groupBy('language');

console.log(JSON.stringify(groupLanguageSortAuthorPrice));

var data = [{
    "name": "jim",
    "color": "blue",
    "age": "22"
}, {
    "name": "Sam",
    "color": "blue",
    "age": "33"
}, {
    "name": "eddie",
    "color": "green",
    "age": "77"
}];

var result = _.chain(arr)
    .groupBy('author')
    .map(function(value, key) {
        return {
            author: key,
            price: _.map(value, function(i){
                return parseFloat(i.price.replace(',', '.'));
            })
        }
    })
    .value();

var averageBookPriceForEachAuthor = _.map(result, function(item) {
    return {author: item.author, averagePrice: ((_.sum(item.price))/item.price.length).toFixed(2)};
});

console.log(JSON.stringify(averageBookPriceForEachAuthor));

var englishOrGermanPriceBelow30 = _.chain(arr)
    .filter(function(book){
   return (book.language == 'English' || book.language == 'German') && parseFloat(book.price.replace(',', '.')) < 30.00;
})
    .groupBy('author');

console.log(JSON.stringify(englishOrGermanPriceBelow30));