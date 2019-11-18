const shared = {
	CSEmail: 'te+ch@contentsquare.com',
	CSPassword: 'Qwerty1234!'
};

const production = {
	csHomePage : 'https://uxanalytics.content-square.fr/728#/site-overview',
	CSEmail: 'abhinav.chadha+test2406@contentsquare.com',
	CSPassword: 'Test1234!',
	ZoningGroup: 'AB - Vitrines',
	ZoningPage:'logins',
};

const staging = {
	csHomePage : 'https://staging-app.contentsquare.com/88#/',
	CSEmail: 'te+ch@contentsquare.com',
	CSPassword: 'Qwerty1234!',
	ZoningGroup: 'AB - Vitrines',
	ZoningPage:'logins',
};

const generateConfig = () => {
	const environment = process.env.TEST_ENV == 'staging' ? staging : production;
	return {...shared, ...environment};
};

const isDebug = () => {
	browser.debug() ;
}
export const config = generateConfig();
export const  debug = isDebug();