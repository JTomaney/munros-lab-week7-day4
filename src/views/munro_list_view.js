const PubSub = require('../helpers/pub_sub.js')
const MunroView = require('./munro_view.js')

const MunroListView = function (container) {
  this.container = container
}

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:MunrosByRegion', (event) => {
    this.munros = event.detail
    this.container.innerHTML = ""
    this.render()
  })
};

MunroListView.prototype.render = function () {
  this.munros.forEach((munro) => {
    const munroView = new MunroView(this.container, munro)
    munroView.render()
  })
};

module.exports = MunroListView
