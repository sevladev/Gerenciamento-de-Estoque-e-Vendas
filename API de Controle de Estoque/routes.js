const express = require('express');
const controller = require('./controller');
const routes = express.Router();

//Adicionar produto
routes.get('/add', controller.add);
routes.post('/addproduto', controller.addproduto);
//Atualizar produto
routes.get('/update', controller.update);
routes.post('/updateproduto', controller.updateproduto);
//Remover produto
routes.get('/remove', controller.remove);
routes.post('/removeproduto', controller.removeproduto);
//Visualizar produtos
routes.get('/view', controller.view);
routes.post('/viewproduto', controller.viewproduto);

module.exports = routes;