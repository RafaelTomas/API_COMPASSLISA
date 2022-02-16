const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../src/app');
const peopleService = require('../src/app/services/PeopleService');

const people = {};

describe('Test people controller', () => {
  afterAll(async () => {
    mongoose.connection.close();
  });

  it('create people', async () => {
    const res = await request(app).post('/api/v1/people').send({
      nome: 'Rafael Tomas',
      cpf: '950.242.284-80',
      data_nascimento: '24/03/2003',
      email: 'rafaelzinho@email.com',
      senha: 'Rafael@12',
      habilitado: 'sim',
    });
    expect(res.statusCode).toBe(201);
  });

  it('find all people', async () => {
    const res = await request(app).get('/api/v1/people');
    expect(res.statusCode).toBe(200);
  });

  it('update people', async () => {
    const res = await request(app).put(`/api/v1/people/${b1._id}`).send(
      {
        nome: 'Rafael Tomás',
        cpf: '131.147.860-49',
        data_nascimento: '24/03/2002',
        email: 'rafaelzinho@gmail.com',
        senha: 'Rafael@12',
        habilitado: 'não',
      },
    );

    expect(res.statusCode).toBe(200);
  });

  it('delete people', async () => {
    const res = await request(app).delete(`/api/v1/people/${people.b1._id}`);
    expect(res.statusCode).toBe(204);
  });
});
