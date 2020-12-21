const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    // set up method to run on instance data (per user) to check password 
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    // When adding hooks via the init() method, they go below
    hooks: {
    // Use the beforeCreate hook to work with data before a new instance is created
      async beforeCreate(newUserData) {
    //In this case, we are taking password, and bcrypting it before adding it to the database.
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
          },
    //In this case, we are taking password, and bcrypting it before updating it to the database.
      async beforeUpdate(updatedUserData) {
      updatedUserData.email = await bcrypt.hash(updatedUserData.password, 10);
      return updatedUserData;
       },
     },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
