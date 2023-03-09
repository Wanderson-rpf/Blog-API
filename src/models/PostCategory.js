/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

// Model (tabela) para relacionamento.
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
      tableName: 'posts_categories',
    }
  );
  PostCategory.associate = ({ Category, BlogPost}) => {
    Category.belongsToMany(BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory,
      as: 'categoryId',
    });
    BlogPost.belongsToMany(Category, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
      as: 'categories',
    });
  };
  return PostCategory;
};