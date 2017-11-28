import {stripText, plusifyText} from './helpers'

const rListItem = (data) => {
  return `<article class="article">
    <figure class="article__thumbnail">
      <a href="${data.url}">
        <img src="${data.thumbnail || `http://via.placeholder.com/600/228dbe/ffffff?text=${stripText(plusifyText(data.title))}`}" />
      </a>
    </figure>
    <div class="article__text">
      <div class="article__text-content">
        <a class="article__title" href="${data.url}">
          <span>${data.title}</span>
        </a>
        <p class="article__description">${data.description}</p>
        <a href="${data.url}" class="article__link">Read more...</a>
      </div>
    </div>
  </article>`
}

export default rListItem
