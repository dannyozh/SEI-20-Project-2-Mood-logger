// .then((json) => {
// 	console.log(json);
// });

// var requiredArticle = document.querySelector('.article-source');
// console.log(requiredArticle);
document.querySelector('.quote-link').addEventListener('click', function() {
    doFetch();
});

const doFetch = function() {
    var url =
        'https://newsapi.org/v2/everything?' +
        'q=mental-health+anti-depressants+insomnia&' +
        'from=2019&' +
        'sortBy=popularity&' +
        'apiKey=e82f9a5a23af468a9cb2d3dc934d84c4';

    var req = new Request(url);

    var randomnumber = Math.floor(Math.random() * 30);
    fetch(req)
        .then((res) => res.json())
        .then((json) => {
            console.log(json.articles[randomnumber]);
            if (json.articles[randomnumber] !== undefined) {
                let articleDescription = json.articles[randomnumber].title;
                let articleURL = json.articles[randomnumber].url;
                let articleImage = json.articles[randomnumber].urlToImage;
                document.querySelector('.article-exerpt').innerHTML = '';
                document.querySelector('.article-exerpt').innerHTML = articleDescription;
                document.querySelector('.article-link').href = '';
                document.querySelector('.article-link').href = articleURL;
                document.querySelector('.article-link').innerHTML = 'Read More';
                document.querySelector('.article-image').src = '';
                document.querySelector('.article-image').src = articleImage;
            } else {
                console.log('NO TITLE');
                doFetch();
            }
        })
        .catch((err) => console.log(err));
};