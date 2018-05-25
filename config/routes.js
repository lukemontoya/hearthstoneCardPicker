//Update the name of the controller below and rename the file.
const cards = require("../controllers/cards.js")
module.exports = function(app){

  app.get('/', cards.index);
  app.post('/cards', cards.addTo);
  app.get('/cards/:id', cards.list);
  app.get('/cards/remove/:id', cards.remove);
}
