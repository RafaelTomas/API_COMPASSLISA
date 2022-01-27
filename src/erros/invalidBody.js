class invalidBody extends Error {
  constructor(erro) {
    super(`${erro}`);
    this.name = 'invalidBody';
    this.idErro = 1;
  }
}

module.exports = invalidBody;