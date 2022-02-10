const request = require('supertest');
const app = require('../src/app');
const CarService = require('../src/app/services/CarService');

describe('Create car controller', () => {
    it('create car', async () => {
     const res = await request(app).post('/api/v1/car').send({
            "modelo": "GM S10 2.8",
            "cor": "branco",
            "ano": "2021",
            "acessorios": [
                { "descricao": "Ar-condicionado" },
                { "descricao": "Dir. Hidráulica" },
                { "descricao": "Cabine Dupla" },
            ],
            "quantidadePassageiros": 5
        })
        expect(res.status).toBe(200);
    });

    it('find all car', async () => {
        const res = await request(app).post('/api/v1/car')
    })
});
