/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, 
  { underscored: true,
    timestamps: false,
  });
  // models.BlogPost.hasMany(models.PostCategory, {
  //   foreignKey: 'categoryId',
  //   as: 'categoryId',
  // });

  return Category;
}