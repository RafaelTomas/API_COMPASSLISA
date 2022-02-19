const request = require('supertest');
const app = require('../../src/app');
const peopleService = require('../../src/app/services/PeopleService');

const truncate = require('../utils/truncate');

const people = {};

describe('PEOPLE', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('POST - CREATE PEOPLE', async () => {
    const res = await request(app)
      .post('/api/v1/people/')
      .send({
        nome: 'Rafael Santos',
        cpf: '691.123.740-83',
        data_nascimento: '24/03/2003',
        email: 'rafaelcompasso@gmail.com',
        senha: 'Rafael@12',
        habilitado: 'sim',
      });
    expect(res.statusCode).toBe(200);
  });

  it('GET - FIND ALL', async () => {
    const res = await request(app)
      .get('/api/v1/people');
    expect(res.statusCode).toBe(200);
  });

  it('UPDATE', async () => {
    people.p3 = await peopleService.create({
      nome: 'Tomás Santos',
      cpf: '231.410.874-40',
      data_nascimento: '24/03/2003',
      email: 'tomascompasso@gmail.com',
      senha: 'Rafael@12',
      habilitado: 'sim',
    });
    const res = await request(app).put(`/api/v1/people/${people.p3._id}`).send(
      {
        nome: 'Rafael Tomás',
        cpf: '231.410.874-40',
        data_nascimento: '24/03/2002',
        email: 'tricolor@gmail.com',
        senha: 'Rafael@12',
        habilitado: 'não',
      },
    );

    expect(res.statusCode).toBe(200);
  });

  it('DELETE - DELETE PEOPLE', async () => {
    people.p2 = await peopleService.create({
      nome: 'Tomás Santos',
      cpf: '231.410.874-40',
      data_nascimento: '24/03/2003',
      email: 'tomascompasso@gmail.com',
      senha: 'Rafael@12',
      habilitado: 'sim',
    });
    const res = await request(app).delete(`/api/v1/people/${people.p2._id}`);
    expect(res.statusCode).toBe(204);
  });
});
