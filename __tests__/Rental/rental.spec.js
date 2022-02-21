const request = require('supertest');
const app = require('../../src/app');
const rentalService = require('../../src/app/services/RentalService');

const truncate = require('../utils/truncate');

const rental = {};

describe('rental', () => {
  beforeEach(async () => {
    await truncate();
  });

  /*
  CRUD
  */

  it('POST - CREATE RENTAL', async () => {
    const res = await request(app)
      .post('/api/v1/rental/')
      .send({
        nome: 'Localiza Rent a Car',
        cnpj: '16670085000155',
        atividades: 'Aluguel de Carros E Gestão de Frotas',
        endereco: [
          {
            cep: '54725-000',
            number: '2085',
            isFilial: false,
          },

        ],

      });
    expect(res.statusCode).toBe(201);
  });

  it('GET - FIND ALL', async () => {
    const res = await request(app)
      .get('/api/v1/rental');
    expect(res.statusCode).toBe(200);
  });

  it('PUT - UPDATE', async () => {
    rental.p3 = await rentalService.create({
      nome: 'Localiza Dealship',
      cnpj: '16.670.085/0001-55',
      atividades: 'Aluguel de Carros ',
      endereco: [
        {
          cep: '54725-000',
          number: '1234',
          isFilial: false,
        },

      ],
    });
    const res = await request(app).put(`/api/v1/rental/${rental.p3._id}`).send(
      {
        nome: 'Localiza Rent a Car',
        cnpj: '16.670.085/0001-55',
        atividades: 'Aluguel de Carros E Gestão de Frotas',
        endereco: [
          {
            cep: '54725-000',
            number: '1234',
            isFilial: false,
          },

        ],
      },
    );

    expect(res.statusCode).toBe(200);
  });

  it('DELETE - DELETE RENTAL', async () => {
    rental.p2 = await rentalService.create({
      nome: 'Localiza Dealship',
      cnpj: '07.239.488/0001-53',
      atividades: 'Aluguel de Carros ',
      endereco: [
        {
          cep: '54725-000',
          number: '1234',
          isFilial: false,
        },

      ],
    });
    const res = await request(app).delete(`/api/v1/rental/${rental.p2._id}`);
    expect(res.statusCode).toBe(204);
  });

  /*
  ERROR
  */

  it('GET - NOT FOUND', async () => {
    const res = await request(app)
      .get('/api/v1/retnal');
    expect(res.statusCode).toBe(404);
  });

  it('POST - BAD REQUEST', async () => {
    const res = await request(app)
      .post('/api/v1/rental/')
      .send({
        nome: 'Localiza Rent a Car',
        cnpj: '',
        atividades: 'Aluguel de Carros E Gestão de Frotas',
        endereco: [
          {
            cep: '',
            number: '2085',
            isFilial: false,
          },

        ],
      });
    expect(res.statusCode).toBe(400);
  });

  it('PUT - NOT FOUND', async () => {
    const res = await request(app)
      .put('/api/v1/rental/6212651960672c217f621e06')
      .send(
        {
          nome: 'Localiza Rent a Car',
          cnpj: '16670085000155',
          atividades: 'Aluguel de Carros E Gestão de Frotas',
          endereco: [
            {
              cep: '54725-000',
              number: '2085',
              isFilial: false,
            },
          ],
        },
      );

    expect(res.statusCode).toBe(404);
  });

  it('PUT - BAD REQUEST', async () => {
    rental.p3 = await rentalService.create({
      nome: 'Localiza Rent a Car',
      cnpj: '16670085000155',
      atividades: 'Aluguel de Carros E Gestão de Frotas',
      endereco: [
        {
          cep: '54725-000',
          number: '2085',
          isFilial: false,
        },

      ],

    });
    const res = await request(app)
      .put(`/api/v1/rental/${rental.p3._id}`)
      .send(
        {
          nome: 'Localiza Rent a Car',
          cnpj: '6700850015165',
          atividades: 'Aluguel de Carros E Gestão de Frotas',
          endereco: [
            {
              cep: '',
              number: '2085',
              isFilial: false,
            },

          ],
        },
      );

    expect(res.statusCode).toBe(400);
  });

  it('PUT - BAD REQUEST ID', async () => {
    const res = await request(app)
      .put('/api/v1/rental/62126519606').send({
        nome: 'Localiza Rent a Car',
        cnpj: '16670085000155',
        atividades: 'Aluguel de Carros E Gestão de Frotas',
        endereco: [
          {
            cep: '54725-000',
            number: '2085',
            isFilial: false,
          },
        ],
      });
    expect(res.statusCode).toBe(400);
  });

  it('DELETE - NOT FOUND', async () => {
    const res = await request(app)
      .delete('/api/v1//6212651960672c217f621e06');

    expect(res.statusCode).toBe(404);
  });

  it('DELETE - BAD REQUEST', async () => {
    const res = await request(app)
      .delete('/api/v1/rental/6212');

    expect(res.statusCode).toBe(400);
  });
});
