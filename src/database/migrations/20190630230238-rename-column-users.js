module.exports = {
  up: queryInterface => {
    return queryInterface.renameColumn('users', 'nome', 'name');
  },

  down: queryInterface => {
    return queryInterface.renameColumn('users', 'name', 'nome');
  },
};
