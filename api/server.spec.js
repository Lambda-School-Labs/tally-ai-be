const request = require('supertest');

const server = require('./server.js');
const { expectCt } = require('helmet');

describe('Server Sanity Check', () => {
    it('returns 200', (done) => {
      return request(server).get('/')
      .set('Accept', 'application/json')
      .expect(200, done)
    })
    it('Returns a JSON formatted response', (done) => {
        return request(server).get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/, done)
    })
    it('Displays a Sanity Check Message', (done) => {
        return request(server).get('/')
        .set('Accept', 'application/json')
        .expect('"Sanity Check"', done)
    })
  })








// describe('server', function() {
//     describe('GET /', function() {
//         it('should return 200 OK', function() {
//             return request(server)
//             .get('/')
//             .then(res => {
//                 expect(res.status).toBe(200);
//             });
//         });

//         it('should return JSON formatted response', function() {
//             return request(server)
//             .get('/')
//             .then(res => {
//                 expect(res.type).toMatch(/json/i);
//             });
//         });
//     });
// });