"use strict";

var _testing = require("@nestjs/testing");
var _app = require("./app.controller");
var _app2 = require("./app.service");
describe('AppController', () => {
  let appController;
  beforeEach(async () => {
    const app = await _testing.Test.createTestingModule({
      controllers: [_app.AppController],
      providers: [_app2.AppService]
    }).compile();
    appController = app.get(_app.AppController);
  });
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});