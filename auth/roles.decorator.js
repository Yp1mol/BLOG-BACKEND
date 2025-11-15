const { SetMetadata } = require('@nestjs/common');

function Roles(...roles) {
  return SetMetadata('roles', roles);
}

module.exports = { Roles };
