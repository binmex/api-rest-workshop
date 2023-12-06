const routes = require('express').Router()
const {save,update,findAll,findId,deleteReservation} = require('../controllers/reservationController')

routes.get('/',findAll);
routes.get('/:id',findId);
routes.post('/',save);
routes.patch('/:id',update);
routes.delete('/:id',deleteReservation)

module.exports = routes