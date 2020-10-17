import routerx from 'express-promise-router';
import articuloControler from '../controllers/ArticuloController';
import auth from '../middlewares/auth';

const router = routerx();
router.post('/add',auth.verifyAlmacenero,articuloControler.add);
router.get('/query',auth.verifyAlmacenero,articuloControler.query);
router.get('/queryCodigo',auth.verifyUsuario,articuloControler.queryCodigo);
router.get('/list',auth.verifyAlmacenero,articuloControler.list);
router.put('/update',auth.verifyAlmacenero,articuloControler.update);
router.delete('/remove',auth.verifyAlmacenero,articuloControler.remove);
router.put('/activate',auth.verifyAlmacenero,articuloControler.activate);
router.put('/deactivate',auth.verifyAlmacenero,articuloControler.deactivate);

export default router;