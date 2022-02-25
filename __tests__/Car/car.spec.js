const request = require('supertest');
const app = require('../../src/app');
const CarService = require('../../src/app/services/CarService');
const truncate = require('../utils/truncate');

const car = {};
const token = '';

describe('Rental', () => {
  beforeEach(async () => {
    await truncate();
  });
  /* error */
  it('GET - NOT authorized', async () => {
    const res = await request(app)
      .get('/api/v1/car')
      .set('authorization', token);
    expect(res.statusCode).toBe(401);
  });

  it('PUT - NOT authorized', async () => {
    car.c1 = await CarService.create({
      modelo: 'Honda',
      cor: 'preto',
      ano: '2017',
      acessorios: [
        {
          descricao: 'Tv',
        },
        {
          descricao: 'Som',
        },
      ],
      quantidadePassageiros: 5,

    });
    const res = await request(app)
      .put(`/api/v1/car/${car.c1._id}`)
      .set('authorization', token)
      .send(
        {
          modelo: 'Yaris',
          cor: 'prata',
          ano: '2020',
          acessorios: [
            {
              descricao: 'Tv',
            },
            {
              descricao: 'Som',
            },
          ],
          quantidadePassageiros: 5,
        },
      );
    expect(res.statusCode).toBe(401);
  });

  it('POST - NOT authorized', async () => {
    const res = await request(app)
      .post('/api/v1/car')
      .send({
        modelo: 'Yaris',
        cor: 'prata',
        ano: '2020',
        acessorios: [
          {
            descricao: 'Tv',
          },
          {
            descricao: 'Som',
          },
        ],
        quantidadePassageiros: 5,
      })
      .set('authorization', token);
    expect(res.statusCode).toBe(401);
  });

  it('DELETE - NOT authorized', async () => {
    car.c2 = await CarService.create({
      modelo: 'Yaris',
      cor: 'prata',
      ano: '2020',
      acessorios: [
        {
          descricao: 'Tv',
        },
        {
          descricao: 'Som',
        },
      ],
      quantidadePassageiros: 5,
    });
    const res = await request(app)
      .delete(`/api/v1/car/${car.c2._id}`)
      .set('authorization', token);
    expect(res.statusCode).toBe(401);
  });
});
