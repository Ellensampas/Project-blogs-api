module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  },
    {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
    }
  )
   
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'blogPostCategories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPostCategories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });
  }
  return PostCategory;
};