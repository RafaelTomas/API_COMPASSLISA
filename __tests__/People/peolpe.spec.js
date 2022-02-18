const request = require('supertest');
const app = require('../../src/app');
const peopleService = require('../../src/app/services/PeopleService');

const truncate = require('../utils/truncate');

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
    await peopleService.create({
      nome: 'Rafael Santos',
      cpf: '691.123.740-83',
      data_nascimento: '24/03/2003',
      email: 'rafaelcompasso@gmail.com',
      senha: 'Rafael@12',
      habilitado: 'sim',
    });

    const res = await request(app)
      .get('/api/v1/people');
    expect(res.statusCode).toBe(200);
  });

  // it('update people', async () => {
  //   const res = await request(app).put('/api/v1/people/620e7f3fd48c3f67461959b3').send(
  //     {
  //       nome: 'Rafael Tomás',
  //       cpf: '131.147.860-49',
  //       data_nascimento: '24/03/2002',
  //       email: 'rafaelzinho@gmail.com',
  //       senha: 'Rafael@12',
  //       habilitado: 'não',
  //     },
  //   );

  //   expect(res.statusCode).toBe(200);
  // });

  // it('delete people', async () => {
  //   const res = await request(app).delete(`/api/v1/people/`);
  //   expect(res.statusCode).toBe(204);
  // });


});
