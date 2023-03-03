module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
    underscored: true,
    timestamps: false,
    tablename: 'users',
    }
  )
  return Usuarios;
};