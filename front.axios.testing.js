const axios = require('axios');

let expect;

before(async function () {
  const chai = await import('chai');
  expect = chai.expect;
});

describe('axios get user by id test', function () {
  it('should get user by id', async function () {
    // let params = 'user/65ef2a444abff6e651025fc8';
    let params = 'shopify/productslingerie?limit=5';
    let headers = {
      'Content-Type': 'application/json',
      // 'x-auth-token':
      //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWYyYTQ0NGFiZmY2ZTY1MTAyNWZjOCIsImlhdCI6MTcxMDIxMDA5NX0.cfS5HBH_b8j0Hmhz8WzSJxXgkQ-M7qgCybo0rvxsT68',
    };

    const response = await axios
      .get(`https://mia-production.up.railway.app/api/v1/${params}`, {
        headers,
      })
      .then((response) => {
        console.log('response', response.data);
        expect(response.status).to.equal(200);
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
