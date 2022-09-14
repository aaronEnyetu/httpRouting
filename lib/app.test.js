import request from 'supertest';
import app from './app.js';
import cats from './routes/cats.js';

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
  const addCat = {
    name: 'Siamese',
    origin: 'Asia',
    characteristics: 'noted for its intelligence'
  };
  const res = await request(app).post('/api/v1/cats').send(addCat);

  expect(res.status).toBe(204);
});

it('#PUT /cats updates the cats details', async () => {
  const updateCat = {
    name: 'Siamese'
  };
  const res = await request(app).put('/api/v1/cats').send(updateCat);

  expect(res.status).toBe(204);
});

it('#DELETE /cats deletes the cat object', async () => {
  const deleteCat = {
    name: 'Siamese',
    origin: 'Asia',
    characteristics: 'noted for its intelligence'
  };
  const res = await request(app).delete('/api/v1/cats').send(deleteCat);

  expect(res.status).toBe(200);
});
