module.exports = {
  function(simOrNao) {
    simOrNao[simOrNao['sim'] = 0] = 'sim';
    simOrNao[simOrNao['não'] = 1] = 'não';
  }
};