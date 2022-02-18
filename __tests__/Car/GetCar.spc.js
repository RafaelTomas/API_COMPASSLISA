const request = require('supertest');

const app = require('../../src/app');
const CarService = require('../../src/app/services/CarService');
const truncate = require('../utils/truncate');

const car = {};

describe('Car', () => {
  it('POST - CREATE CAR', async () => {
    const res = await request(app).post('/api/v1/car').send({
      modelo: 'PRISMA  1.6',
      cor: 'branco',
      ano: '2021',
      acessorios: [
        { descricao: 'Ar-condicionado' },
        { descricao: 'Dir. Hidráulica' },
        { descricao: 'Som JBL' },
      ],
      quantidadePassageiros: 5,
    });
    expect(res.status).toBe(201);
  });

  it('GET - FIND ALL ', async () => {
    const res = await request(app).get('/api/v1/car');
    expect(res.status).toBe(200);
  });

  afterAll(async () => {
    afterAll(async () => {
      await connection.close();
      await db.close();
  });
});





    // beforeEach(async () => {
    //   car.Obj1 = await CarService.create({
    //     modelo: 'PRISMA  1.6',
    //     cor: 'branco',
    //     ano: '2021',
    //     acessorios: [
    //       { descricao: 'Ar-condicionado' },
    //       { descricao: 'Dir. Hidráulica' },
    //       { descricao: 'Som JBL' },
    //     ],
    //     quantidadePassageiros: 5,
    //   });
    // });
