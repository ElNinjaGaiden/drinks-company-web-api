import express from 'express';
import servicesContainer from 'drinks-company-services-container';
import { IDrinksBusinessService } from 'drinks-company-business-services-contracts';
import customRoutes from './customRoutes';

const router: express.Router = express.Router();

router.get('/', async (req, res) => {
	res.send(`Drinks Web API for client "${servicesContainer.resolve('clientName')}"`);
});

router.get('/crazyFunction', async (req, res) => {
	const drinksBusinessService = servicesContainer.resolve('drinksBusinessService') as IDrinksBusinessService;
	const data = await drinksBusinessService.crazyFunction();
	res.json(data);
});

router.use(customRoutes);

export default router;
