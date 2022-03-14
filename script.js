function Book(title, author, pages, read, excerpt) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.excerpt = excerpt;
  myLibrary.push(this)
}

function createElements() {
  const card = document.createElement('div');
  const cardTitle = document.createElement('h2');
  const cardAuthor = document.createElement('h3');
  const cardPages = document.createElement('h3');
  const cardRead = document.createElement('h3');
  const cardExcerpt = document.createElement('p');
  const container = document.querySelector('.content')

  card.appendChild(cardTitle)
  card.appendChild(cardAuthor)
  card.appendChild(cardPages)
  card.appendChild(cardRead)
  card.appendChild(cardExcerpt)
  container.appendChild(card)
}

function createBookCard() {
  myLibrary.forEach(book => {
    const card = document.createElement('div')
    card.classList.add('card')
    const cardTitle = document.createElement('h2');
    const cardAuthor = document.createElement('h3');
    cardAuthor.classList.add('author')
    const cardPages = document.createElement('h3');
    cardPages.classList.add('pages')
    const cardExcerpt = document.createElement('p');
    const container = document.querySelector('.content')
  
    card.appendChild(cardTitle)
    card.appendChild(cardAuthor)
    card.appendChild(cardExcerpt)
    card.appendChild(cardPages)
    container.appendChild(card)

    console.log(book.title)
    cardTitle.textContent = book.title;
    cardAuthor.textContent = `By ${book.author}`
    cardPages.textContent = `${book.pages} pages`
    !book.read ? card.classList.add('notRead') : card.classList.remove('.notRead')
    cardExcerpt.textContent = `'${book.excerpt}'`
  });
}

let myLibrary = [];

const theHobbit = new Book("The Hobbit", "JRR Tolkien", 302, true, "“We are plain quiet folk and have no use for adventures. Nasty disturbing uncomfortable things! Make you late for dinner! I can\'t think what anybody sees in them,” said our Mr. Baggins.")
const theWayOfKings = new Book('The Way of Kings', 'Brandon Sanderson', 1007, true, `When he died, he was sent back, no choice. When he survived the Desolation, he was supposed to go back as well. Back to that place that he dreaded. Back to that place of pain and fire. What if he just decided . . . not to go?`)
const nineteenEightyFour = new Book('Nineteen Eighty-Four', 'George Orwell', 328, false, 'The Ministry of Truth -- Minitrue, in Newspeak -- was startlingly different from any other object in sight. It was an enormous pyramidal structure of glittering white concrete, soaring up, terrace after terrace, 300 metres into the air. From where Winston stood it was just possible to read...')

const button = document.querySelector('.addBook')
const image = document.querySelector('img')

button.addEventListener('mouseover mouseout', () => {
  console.log('hi')
  button.classList.toggle('hover')
})

createBookCard()



