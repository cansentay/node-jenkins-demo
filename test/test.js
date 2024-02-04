'use strict';

const request = require('supertest');
const assert = require('assert');
const app = require('../index.js');

describe('GET /', () => {
  it('responds with "Hello World"', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.text, 'Hello World');
        done();
      });
  });
});
