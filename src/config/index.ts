const shared = {
    CSEmail: "te+ch@contentsquare.com",
    CSPassword: "Qwerty1234!"
};

const production = {
    csHomePage : "https://staging-app.contentsquare.com/88#/",
    password: 'SuperSecretPassword!',
    domain: 'app.example.com',
    userId: '123',
    accessToken: 'a82f0e9a-1689-49ab-8456-161a44ca2365',
};

const staging = {
    csHomePage : "https://staging-app.contentsquare.com/88#/",
    password: 'Pa$$w0rd',
    domain: 'staging.example.com',
    userId: '456',
    accessToken: 'f95da72f-e8fd-492b-ac6d-0efb3eba428b',
};

const generateConfig = () => {
    const environment = process.env.TEST_ENV == 'staging' ? staging : production;
    return {...shared, ...environment};
};

export const config = generateConfig();
