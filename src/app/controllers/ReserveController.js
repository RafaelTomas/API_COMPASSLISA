// const ReserveService = require('../services/ReserveService');
// const NotFound = require('../errors/NotFound');
// const errorCodes = require('../utils/errorCodes');

// class ReserveController {
//   async create(req, res) {
//     try {
//       const data = await ReserveService.create(req.body);
//       return res.status(200).json({
//         Pessoa: {
//           _id: data.id,
//           nome: data.nome,
//           cpf: data.cpf,
//           data_nascimento: data.data_nascimento,
//           email: data.email,
//           senha: data.senha,
//           habilitado: data.habilitado,
//         },
//       }).send();
//     } catch (error) {
//       return res.status(errorCodes(error)).json({
//         details: [
//           {
//             description: 'bad request',
//             name: error.message,
//           },
//         ],
//       });
//     }
//   }

//   async find(req, res) {
//     const payload = req.query;
//     try {
//       const data = await ReserveService.find(payload);
//       return res.status(200).json({
//         Pessoas: data,
//       });
//     } catch (error) {
//       return res.status(errorCodes(error)).json({
//         details: [
//           {
//             description: 'bad request',
//             name: error.message,
//           },
//         ],
//       });
//     }
//   }

//   async findById(req, res) {
//     const id = req.params;
//     try {
//       const Reserve = await ReserveService.findById(id);
//       return res.status(200).json(Reserve);
//     } catch (error) {
//       return res.status(errorCodes(error)).json({
//         details: [
//           {
//             description: 'bad request',
//             name: error.message,
//           },
//         ],
//       });
//     }
//   }

//   async delete(req, res) {
//     const ReserveId = req.params.id;
//     try {
//       const Reserve = await ReserveService.findById(ReserveId);
//       if (!Reserve) {
//         throw new NotFound(`ID: ${ReserveId}`);
//       }
//       await ReserveService.delete(ReserveId);
//       res.status(204).end();
//     } catch (error) {
//       return res.status(errorCodes(error)).json({
//         details: [
//           {
//             description: 'bad request',
//             name: error.message,
//           },
//         ],
//       });
//     }
//   }

//   async update(req, res) {
//     const ReserveId = req.params.id;
//     const newData = req.body;
//     try {
//       const Reserve = await ReserveService.findById(ReserveId);
//       if (Reserve === null) {
//         throw new NotFound(`ID: ${ReserveId}`);
//       }
//       const updatedReserve = await ReserveService.update(ReserveId, newData);
//       res.status(200).json(updatedReserve);
//     } catch (error) {
//       return res.status(errorCodes(error)).json({
//         details: [
//           {
//             description: 'bad request',
//             name: error.message,
//           },
//         ],
//       });
//     }
//   }
// }

// module.exports = new ReserveController();
