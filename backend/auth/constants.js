const jwtConstants = {
  secret: process.env.JWT_SECRET || 'supersecretkey',
};

module.exports = { jwtConstants };
