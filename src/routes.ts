import { Router } from 'express'
import { AuthenticateClientController } from './modules/account/authenticate-client/authenticate-client-controller';
import { CreateClientController } from './modules/client/useCases/create/create-client-controller'

const routes = Router()

const authenticateController = new AuthenticateClientController();
const createClientController = new CreateClientController();

routes.post("/session/", authenticateController.handler);
routes.post("/client/", createClientController.handle);

export { routes }
