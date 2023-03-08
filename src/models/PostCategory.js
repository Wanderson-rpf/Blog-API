/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'BlogPost',
          key: 'id',
        },
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Category',
          key: 'id',
        },
      },
    },
    { 
      timestamps: false, 
      underscored: true,
    }
  );
  PostCategory.associate = (models) => {
    models.Category.hasMany(models.BlogPost, {
      foreignKey: 'postId',
      as: 'postId',
    });
  };
  return PostCategory;
};