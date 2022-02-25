const authenticateService = require('../services/AuthenticateService');
const errorCodes = require('../utils/errorCodes');

class AuthenticateController {
  async authenticate(req, res) {
    const payload = req.body;
    try {
      const user = await authenticateService.find(payload);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(errorCodes(error)).json({
        details: [
          {
            description: 'bad request',
            name: error.message,
          },
        ],
      });
    }
  }
}

module.exports = new AuthenticateController();
