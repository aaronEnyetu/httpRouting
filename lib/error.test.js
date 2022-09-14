import request from 'supertest';
import app from './app.js';



//testing for the method-patch
 it('receives a 404 when requesting an unknown resource/method', async () => {
    await request(app)
      .patch('/api/v1/cats')
      .expect(404);
  });