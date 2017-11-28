import rListItem from './articleItem'

const rList = (data) => {
  return `<section class="articles">
    ${data.items.map((item) => {
      return rListItem(item)
    }).join('')}
  </section>`
}

export default rList
