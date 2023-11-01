const request = require('supertest');
const app = require('./app'); // Importa tu aplicación Express

describe('Test básico de endpoint', () => {
  it('GET /api/test debería devolver 200', async () => {
    const response = await request(app).get('/api/test');
    expect(response.statusCode).toBe(200);
  });
});