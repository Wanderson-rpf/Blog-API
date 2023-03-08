/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'post_id',
        references: {
          model: 'BlogPost',
          key: 'id',
        },
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'category_id',
        references: {
          model: 'Category',
          key: 'id',
        },
      },
    },
    { 
      timestamps: false, 
      underscored: true,
      tableName: 'posts_categories', 
    }
  );
  PostCategory.associate = (models) => {
    models.Category.hasMany(models.BlogPost, {
      foreignKey: 'categoryId',
      as: 'categoryId',
    });
    models.BlogPost.hasMany(models.Category, {
      foreignKey: 'postId',
      as: 'postId',
    });
  };
  return PostCategory;
};