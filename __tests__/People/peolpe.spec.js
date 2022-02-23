const request = require('supertest');
const app = require('../../src/app');
const peopleService = require('../../src/app/services/PeopleService');
const truncate = require('../utils/truncate');

const people = {};

describe('PEOPLE', () => {
  beforeEach(async () => {
    await truncate();
  });
  /*   CRUD  */
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

  it('GET - FIND ONE', async () => {
    people.p4 = await peopleService.create({
      nome: 'Tomás Santos',
      cpf: '231.410.874-40',
      data_nascimento: '24/03/2003',
      email: 'tomascompasso@gmail.com',
      senha: 'Rafael@12',
      habilitado: 'sim',
    });
    const res = await request(app)
      .get(`/api/v1/people/${people.p4._id}`);
    expect(res.statusCode).toBe(200);
  });

  it('PUT - UPDATE', async () => {
    people.p1 = await peopleService.create({
      nome: 'Tomás Santos',
      cpf: '231.410.874-40',
      data_nascimento: '24/03/2003',
      email: 'tomascompasso@gmail.com',
      senha: 'Rafael@12',
      habilitado: 'sim',
    });
    const res = await request(app)
      .put(`/api/v1/people/${people.p1._id}`)
      .send(
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
    const res = await request(app)
      .delete(`/api/v1/people/${people.p2._id}`);
    expect(res.statusCode).toBe(204);
  });

  /*
   ERROR
  */

  it('GET - NOT FOUND', async () => {
    const res = await request(app)
      .get('/api/v1/peolpe');
    expect(res.statusCode).toBe(404);
  });

  it('POST - BAD REQUEST', async () => {
    const res = await request(app)
      .post('/api/v1/people/')
      .send({
        nome: '',
        cpf: '',
        data_nascimento: '24/03/2003',
        email: 'rafaelcompasso@gmail.com',
        senha: 'Rafael@12',
        habilitado: 'sim',
      });
    expect(res.statusCode).toBe(400);
  });

  it('PUT - NOT FOUND', async () => {
    const res = await request(app)
      .put('/api/v1/people/6212651960672c217f621e06')
      .send(
        {
          nome: 'Rafael Tomás',
          cpf: '231.410.874-40',
          data_nascimento: '24/03/2002',
          email: 'tricolor@gmail.com',
          senha: 'Rafael@12',
          habilitado: 'não',
        },
      );

    expect(res.statusCode).toBe(404);
  });

  it('PUT - BAD REQUEST', async () => {
    people.p3 = await peopleService.create({
      nome: 'Tomás Santos',
      cpf: '231.410.874-40',
      data_nascimento: '24/03/2003',
      email: 'tomascompasso@gmail.com',
      senha: 'Rafael@12',
      habilitado: 'sim',
    });
    const res = await request(app)
      .put(`/api/v1/people/${people.p3._id}`)
      .send(
        {
          nome: 'Rafael Tomás',
          cpf: '231.410.874-40',
          data_nascimento: '24/03/2002',
          email: '',
          senha: 'Rafael@12',
          habilitado: 'não',
        },
      );

    expect(res.statusCode).toBe(400);
  });

  it('PUT - BAD REQUEST ID', async () => {
    const res = await request(app)
      .put('/api/v1/people/62126519606')
      .send(
        {
          nome: 'Rafael Tomás',
          cpf: '231.410.874-40',
          data_nascimento: '24/03/2002',
          email: 'tricolor@gmail.com',
          senha: 'Rafael@12',
          habilitado: 'não',
        },
      );

    expect(res.statusCode).toBe(400);
  });

  it('DELETE - NOT FOUND', async () => {
    const res = await request(app)
      .delete('/api/v1/people/6212651960672c217f621e06');

    expect(res.statusCode).toBe(404);
  });

  it('DELETE - BAD REQUEST', async () => {
    const res = await request(app)
      .delete('/api/v1/people/6212');

    expect(res.statusCode).toBe(400);
  });
});
