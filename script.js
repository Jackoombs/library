function Book(title, author, pages, read, excerpt) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.excerpt = excerpt;
  myLibrary.push(this)
}

function createCard(book) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.setAttribute('data-index-number', index++)

  const cardRemove = document.createElement('button')
  cardRemove.classList.add('remove')
  cardRemove.innerHTML = `<img src="remove.png" alt="remove book">`
  removeListener(cardRemove)
  
  const cardTitle = document.createElement('h2');
  const cardAuthor = document.createElement('h3');
  cardAuthor.classList.add('author')
  const cardExcerpt = document.createElement('p');

  const footer = document.createElement('div')
  footer.classList.add('cardFooter')
  const input = document.createElement('div')
  input.classList.add('checkDiv')
  const cardCheckbox = document.createElement('input')
  cardCheckbox.setAttribute('type', 'checkbox')
  cardCheckbox.addEventListener('change', () => {
    card.classList.toggle('notRead')
  })
  const checkLabel = document.createElement('p')
  checkLabel.textContent ='READ?'

  const cardPages = document.createElement('h3');
  cardPages.classList.add('pages')

  const container = document.querySelector('.content')

  input.appendChild(cardCheckbox)
  input.appendChild(checkLabel)
  footer.appendChild(input)
  footer.appendChild(cardRemove)
  footer.appendChild(cardPages)
  card.appendChild(cardTitle)
  card.appendChild(cardAuthor)
  card.appendChild(cardExcerpt)
  card.appendChild(footer)
  container.appendChild(card)
  
  cardTitle.textContent = book.title;
  cardAuthor.textContent = `By ${book.author}`
  cardPages.textContent = `${book.pages} pages`
  book.read ? cardCheckbox.checked = true : card.classList.toggle('notRead')
 
  cardExcerpt.textContent = `'${book.excerpt}'`
}

function initBooks() {
  myLibrary.forEach(book => {
    createCard(book)
  }) 
}

function removeListener(button) {
  button.addEventListener('click', () => {
    let removeindex = button.parentElement.parentElement.getAttribute('data-index-number')
    myLibrary.splice(removeindex, 1)

    cards = document.querySelectorAll('.card')
    cards[removeindex].style.scale = '0'
    cards[removeindex].addEventListener('transitionend', () => {
      cards[removeindex].remove()
    })
    index--
    
    cards.forEach(card => {
      console.log(cards, card.children[1].outer, card.getAttribute('data-index-number'), removeindex)
      if (card.getAttribute('data-index-number') > removeindex){
        temp = card.getAttribute('data-index-number')
        console.log(card.children[1].outerText, card.getAttribute('data-index-number'),card.getAttribute('data-index-number') - 1)
        card.setAttribute('data-index-number', temp -1 )
      }  
    });
  })
}

//-------------------------------------------------------------------------------------------------------//

let myLibrary = []
let index = 0

const modal = document.querySelector('.modalContainer')
const addBook = document.querySelector('.addBook')
const form = document.querySelector('form')

const theHobbit = new Book("The Hobbit", "JRR Tolkien", 302, true, "“We are plain quiet folk and have no use for adventures. Nasty disturbing uncomfortable things! Make you late for dinner! I can\'t think what anybody sees in them,” said our Mr. Baggins.")
const theWayOfKings = new Book('The Way of Kings', 'Brandon Sanderson', 1007, true, `When he died, he was sent back, no choice. When he survived the Desolation, he was supposed to go back as well. Back to that place that he dreaded. Back to that place of pain and fire. What if he just decided . . . not to go?`)
const nineteenEightyFour = new Book('Nineteen Eighty-Four', 'George Orwell', 328, false, 'The Ministry of Truth -- Minitrue, in Newspeak -- was startlingly different from any other object in sight. It was an enormous pyramidal structure of glittering white concrete, soaring up, terrace after terrace, 300 metres into the air. From where Winston stood it was just possible to read...')

initBooks()

addBook.addEventListener('click', () => {
  modal.classList.toggle('hide')
})

form.addEventListener('submit', (e) => {
  e.preventDefault()

  title = document.getElementById('title').value
  author = document.getElementById('author').value
  pages = document.getElementById('pages').value
  read = document.getElementById('read').checked
  excerpt = document.getElementById('excerpt').value
  console.log(read)

  modal.classList.toggle('hide')

  let book = new Book(title, author, pages, read, excerpt)
  createCard(book)
  form.reset()
})







