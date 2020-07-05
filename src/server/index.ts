import express from 'express';
import dotenv from 'dotenv';
import { asValue } from 'awilix';
import servicesContainer from 'drinks-company-services-container';
import router from '../router';
import registerCustomDependencies from '../dependencies/customDependencies';

const packageJson = require('../../package.json');

const { drinks: { clientName } } = packageJson;
servicesContainer.register({
	clientName: asValue(clientName),
});

// Register custom dependencies
registerCustomDependencies(servicesContainer);

if (process.env.NODE_ENV !== 'production') {
	dotenv.config({ path: '.env' });
}

const APP_PORT = process.env.APP_PORT || '3000';
const app: express.Application = express();

app.use(router);

app.listen(parseInt(APP_PORT, 10), () => {
	console.log(`App is listening on port ${APP_PORT}!`);
});
