const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
    // access our user model and run .findAll() method -- similar to SELECT * FROM users;
    User.findAll({
        attributes: { exclude: ['[password']}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err); 
        res.status(500).json(err);
    });
});