const request = require('supertest');
const app = require('./app');

// describe('GET /', function () {
//   it('responds with json', function (done) {
//     return request(app)
//       .get('/')
//       .set('Accept', 'application/json')
//       .expect(200)
//       .expect("uLectures ready to go!")
//       .then(response => {
//         console.log(response.statusCode);
//         console.log(response.text);
//         done();
//       })
//       .catch(err => done(err))
//   });
// });


describe('GET /', function () {
  it('responds with json', function (done) {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json')
      .expect(200)
      .end((err, response) => {
        if (err) {
          console.log(err);
          done(err);
        } else {
          console.log(response)
          done()
        }
      });
  });
});