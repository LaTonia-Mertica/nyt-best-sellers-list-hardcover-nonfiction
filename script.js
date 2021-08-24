const promise = axios.get(
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=ICC9xiMKjph9039DEICZ2cOcrnZyJeay"
);
let htmlToUpdate = "";
let imgsToUpdate = "";

promise.then((response) => {
  let books = response.data.results.books;

  for (const book of books) {
    let card = `<div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4" id="colBookImage">
            <img
              src="${book.book_image}"
              class="img-fluid rounded-start"
              alt="Book Cover"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">${book.title}</h2>             
              <h3 class="card-author">by ${book.author}</h3>
              <p class="card-text" id="colDescription">
                ${book.description}
              </p>
              <p class="card-text">
                <small class="text-muted"
                  >last updated in pursuit of celebratory digital portfolio
                  feature project - thanks max</small
                >
              </p>
            </div>
          </div>
          </div>
        </div>`;

    htmlToUpdate += card;

    imgsToUpdate += `<img
        src="${book.book_image}"
        alt="Book Cover: ${book.title}"
    />`;
  }

  document.getElementById("myAPIContent").innerHTML = htmlToUpdate;
  document.getElementById(
    "bestNonfictionSellersTitleBarImgs"
  ).innerHTML = imgsToUpdate;
});
