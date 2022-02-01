class NotFound extends Error {
  constructor(service) {
    super(`${service} not found`);
    this.name = 'notFound';
    this.idErro = 0;
  }
}

module.exports = NotFound;