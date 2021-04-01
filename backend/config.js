const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    env: env,
    port: process.env.PORT || 3000,
  },

  production: {
    env: env,
    port: process.env.PORT || 3030,
  }
};

module.exports = config[env];

