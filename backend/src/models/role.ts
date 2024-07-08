import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Roles extends Model {
  public id!: number;
  public role_name!: string;
  public permissions!: string;
  public created_at!: Date;
}

Roles.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  role_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  permissions: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Roles',
});

export default Roles;
