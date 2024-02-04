'use strict';

const request = require('supertest');
const app = require('./app'); // Express uygulamanızın dosya yolunu doğru şekilde belirtin

describe('GET /', () => {
  it('responds with "Hello World"', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello World', done);
  });
});
