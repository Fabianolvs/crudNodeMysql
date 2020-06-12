import {Router} from 'express';
import {ProdController} from './controllers/prodController';

const controller = new ProdController();

const routes = Router();

routes.get('/allProd', controller.getAllProd);
routes.post('/addProd', controller.cadastro);
routes.put('/updateProd', controller.update);
routes.delete('/deleteProd', controller.delete);

export default routes;
