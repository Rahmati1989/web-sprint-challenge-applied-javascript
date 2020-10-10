// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardMake = document.querySelector('.cards-container');

axios.get('https://lambda-times-api.herokuapp.com/articles')
        .then((response) => {            
                for (const arr of Object.values(response.data.articles)) {
                  for (const item of arr) {
                    cardMake.appendChild(cardMaker(item));
                  }
                }
              })

              .catch((error) => {
                console.log( error);
            })  


function cardMaker(article) {
    const cardtitle = document.createElement('div');
    cardtitle.classList.add('card');

        const header = document.createElement('div');
        header.classList.add('headline');
        header.textContent = article.headline;
        cardtitle.appendChild(header);
        
        const author = document.createElement('div');
        author.classList.add('author');
        cardtitle.appendChild(author);
           
            const image = document.createElement('div');
            image.classList.add('img-container');
            author.appendChild(image);

                const newImg = document.createElement('img');
                newImg.src = article.authorPhoto;                
                image.appendChild(newImg);

            const authorsName = document.createElement('span');
            authorsName.textContent = article.authorName;
            author.appendChild(authorsName);

    return cardtitle;
}