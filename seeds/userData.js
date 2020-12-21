const { User }  = require('../models');

const userData = [
    {
        username: 'iamgreat',
        password: 'password1'
        
      },
      {
        username: 'iloveu',
        password: 'password2'
      },
      {
        username: 'ilikeu',
        password: 'password3'
      }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;