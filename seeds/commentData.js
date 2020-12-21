const { Comment } = require('../models');

const commentData = [
    {
      comment_text: "Computer Science is great course",
      user_id: 1,
      post_id: 1
    },
    {
      comment_text: "Software Developer is high paying job in the us",
      user_id: 2,
      post_id: 2
    },
    {
      comment_text: "Cloud engineer job is easy.",
      user_id: 3,
      post_id: 3
    }
  ];
  
  const seedComments = () => Comment.bulkCreate(commentData);
  
  module.exports = seedComments;