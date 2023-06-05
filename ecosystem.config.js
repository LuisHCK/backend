module.exports = {
    apps: [
        {
            name: 'strapi',
            script: 'npm',
            args: 'run start',
            env_production: {
                NODE_ENV: 'production',
                HOST: "0.0.0.0",
                DATABASE_HOST: 'localhost', // database endpoint
                DATABASE_PORT: '5432',
                DATABASE_NAME: 'strapi', // DB name
                DATABASE_USERNAME: 'strapi', // your username for psql
                DATABASE_CLIENT: 'postgres',
                DATABASE_PASSWORD: '',
                APP_KEYS: "zAoPHu5ydUu8o4MERY3CFg==,HG6Ge/z82E+jTuEhb9k+qQ==,gM/TrvItdA/0Y9geDkCgjA==,U2Lm+eiLsfgdJKG4ICwR/Q==",
                API_TOKEN_SALT: "dH8vca25D2gcW4o5XPI5Yw==",
                ADMIN_JWT_SECRET: "p3+sUB54J/qXRaHzDwuNvA==",
                TRANSFER_TOKEN_SALT: "dlNpWNhmI3cMeRf4zfTs7Q==",
                JWT_SECRET: "Milq5OWxypgeIGACKk4ikQ==",
            },
        },
    ],
};
