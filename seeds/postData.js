const { Post } = require('../models');

const postData = [
  {
    title: 'Function in JS',
    content: 'A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.',
    user_id: 1
    
  },
  {
    title: 'What Node JS means?',
    content: 'Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser.',
    user_id: 2
  },
  {
    title: 'Eslint usage',
    content: 'A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;