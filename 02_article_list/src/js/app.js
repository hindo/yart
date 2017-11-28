import feed from '../data/feed.json'
import rList from './articleList'

const list = rList({items: feed})

const rApp = (data) => {
  return `
    <div>${data.list}</div>
  `
}

document.querySelector('.app').innerHTML = rApp({list})
