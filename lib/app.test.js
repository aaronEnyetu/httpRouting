import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('#GET /cats returns an array of cat objects', async () => {
  const res = await request(app).get('/api/v1/cats');
 
  expect(res.status).toBe(200);
  expect.any(String);
});
 
it('#POST /cats adds a new cat object to the list', async () => {
  const newCat = {
    name: 'Siamese',
    origin: 'Asia',
    characteristics: 'noted for its intelligence'
  };
  const res = await request(app).post('/api/v1/cats').send(newCat);

  expect(res.status).toBe(202);
})
