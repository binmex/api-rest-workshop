const routes = require('express').Router();
const {save,update,findAll,findId,deleteClient} = require('../controllers/clientController')

routes.get('/',findAll);
routes.get('/:id',findId);
routes.post('/',save);
routes.patch('/:id',update);
routes.delete('/:id',deleteClient);

module.exports = routes