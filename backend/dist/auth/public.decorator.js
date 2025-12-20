"use strict";

const {
  SetMetadata
} = require('@nestjs/common');
function Public() {
  return SetMetadata('isPublic', true);
}
module.exports = {
  Public
};